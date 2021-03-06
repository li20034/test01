function twoDigitFormat(num) {
    return num < 10 ? "0" + num : num.toString();
}
function argsParse(cmd, specialChars) {
    var quotes = 0, start = -1, lastSpace = -1, lastEscQuote = -1;
    var args = [];
    if (specialChars)
        cmd = cmd.split("\\n").join("\n").split("\\t").join("\t");
    for (var i = 0; i < cmd.length; ++i) {
        if (cmd[i] == '"') {
            if (!specialChars || cmd[i - 1] != "\\" || i == 0) {
                ++quotes;
                if (quotes % 2)
                    start = i;
                else {
                    specialChars && lastEscQuote > start && lastEscQuote < i ? args.push(cmd.substring(start + 1, i).split('\\"').join('"')) : args.push(cmd.substring(start + 1, i));
                    start = -1;
                }
            }
            else lastEscQuote = i;
        }
        else if (cmd[i] == " " && start == -1) {
            if (cmd[lastSpace + 1] != '"')
                specialChars && lastEscQuote > lastSpace && lastEscQuote < i ? args.push(cmd.substring(lastSpace + 1, i).split('\\"').join('"')) : args.push(cmd.substring(lastSpace + 1, i));
            lastSpace = i;
        }
    }
    if (cmd.length > 1 && (cmd[cmd.length-2] == "\\" || cmd[cmd.length - 1] != '"'))
        specialChars && lastEscQuote > lastSpace ? args.push(cmd.substr(lastSpace + 1).split('\\"').join('"')) : args.push(cmd.substr(lastSpace + 1));
    if (quotes == 0 && lastSpace == -1)
        return specialChars ? [cmd.split('\\"').join('"')] : [cmd];
    else if (quotes % 2 || start != -1)
        return false;
    else
        return args;
}
var fakeCmd = {};
fakeCmd.writtenSincePrompt = false;
fakeCmd.startDate = new Date();
fakeCmd.prevPrompt = "FakeCmd> ";
fakeCmd.ignoreKeys = false;
fakeCmd.linux = false;
fakeCmd.prevIgnoreKeys = fakeCmd.ignoreKeys;
fakeCmd.verStr = "Fake Command Prompt version 1.0-experimental";
fakeCmd.oscWaves = {"sine": true, "square": true, "sawtooth": true, "triangle": true};
fakeCmd.init=function (_prompt, _parseSpecialChars) {
    fakeCmd.storedContent = cmd.value = fakeCmd.prompt = _prompt;
    fakeCmd.parseSpecialChars = _parseSpecialChars;
    cmd.value = fakeCmd.verStr + "\nType \"help\" and hit enter for help on how to continue.\n" + cmd.value;
};
fakeCmd.clear = function () {
    cmd.value = "";
    fakeCmd.writtenSincePrompt = true;
};
fakeCmd.write = function (txt) {
    if (fakeCmd.writtenSincePrompt)
        cmd.value += txt;
    else {
        cmd.value += "\n" + txt;
        fakeCmd.writtenSincePrompt = true;
    }
    cmd.scrollTop = cmd.scrollHeight;
};
fakeCmd.writeln = function (txt) {
    fakeCmd.write(txt + "\n");
};
fakeCmd.saveContent = function () {
    fakeCmd.storedContent = cmd.value;
};
fakeCmd.restoreContent = function () {
    cmd.value = fakeCmd.storedContent;
};
fakeCmd.strEndsWith = function (s, suffix) {
    if (s.endsWith)
        return s.endsWith(suffix);
    else {
        for (var i = s.length - 1, j = suffix.length - 1; i >= 0, j >= 0; --i, --j)
            if (s[i] != suffix[j])
                return false;
        return true;
    }
}; //used to cope with missing string.endsWith support
fakeCmd.stringify = function (obj) {
    if (obj === null)
        return "null";
    else if (typeof obj == "undefined")
        return "undefined";
    else if (obj instanceof Array) {
        var pfx = "", out = "[";
        for (var i = 0; i < obj.length; ++i) {
            out += pfx + fakeCmd.stringify(obj[i]);
            pfx = ", ";
        }
        return out + "]";
    }
    else if (typeof obj == "string")
        return '"' + obj + '"';
    else if (typeof obj == "function") {
        fstr = obj.toString();
        fname = fstr.substring(fstr.indexOf(" ") + 1, fstr.indexOf("("));
        return "[Function: " + fname + "]";
    }
    /*else if (obj instanceof Object) {
        var pfx = "", out = "{";
        for (var k in obj) {
            out += pfx + fakeCmd.stringify(k) + ": " + fakeCmd.stringify(obj[k]);
            pfx = ", ";
        }
        return out + "}";
    }*/ //this block can trigger stack overflows on cyclic objects
    else
        return obj.toString();
};
fakeCmd.getProps = function (obj) {
    var props = [];
    for (var k in obj)
        props.push(k);
    
    return props;    
}; //more reliable version of Object.keys(), e.g. works with navigator obj
fakeCmd.toType = function (obj) {
    var tmp = ({}).toString.call(obj).split(" ")[1];
    return tmp.substr(0, tmp.length - 1);
}; //improved version of typeof obj
fakeCmd.printProps = function (obj) {
    var pfx = "", out = "";
    for (var k in obj) {
        out += pfx + '"' + k + '": [' + fakeCmd.toType(obj[k]) + "]";
        pfx = ", ";
    }
    fakeCmd.writeln(out);
};
fakeCmd.initAudioCtx = function () {
    if (!fakeCmd.audioCtx) {
        var _AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!_AudioContext)
            return false;
        
        fakeCmd.audioCtx = new _AudioContext();
    }
    return true;
};
fakeCmd.initGain = function() {
    if (!fakeCmd.initAudioCtx())
        return false;
    if (!fakeCmd.gain) {
        if (!fakeCmd.audioCtx.createGain)
            return false;
        
        fakeCmd.gain = fakeCmd.audioCtx.createGain();
        fakeCmd.gain.connect(fakeCmd.audioCtx.destination);
    }
    return true;
};
fakeCmd.initOsc = function () { //oscillators aren't reuseable
    if (!fakeCmd.initGain())
        return false;
    if (!fakeCmd.audioCtx.createOscillator)
        return false;
    
    fakeCmd.osc = fakeCmd.audioCtx.createOscillator();
    fakeCmd.osc.connect(fakeCmd.gain);
    return true;
};
fakeCmd.beep = function (freq, dur, vol, wave) {
    if (!fakeCmd.initOsc())
        return false;
    var o = fakeCmd.osc;
    wave = wave || "sine";
    if (vol == undefined)
        vol = 0.5;
    if (dur == undefined)
        dur = 1000;
    if (!fakeCmd.oscWaves[wave])
        return false;
    if (freq <= 0 || freq > 20000 || dur <= 0 || isNaN(freq) || isNaN(dur))
        return false;
    if (vol <= 0 || vol > 1 || isNaN(vol))
        return false;
    o.type = wave;
    o.frequency.value = freq;
    fakeCmd.gain.gain.value = vol;
    o.start(0);
    o.stop(fakeCmd.audioCtx.currentTime + dur / 1000);
    return true;
};
fakeCmd.getTxtWidth = function (txt) {
    if (!fakeCmd.canvas) {
        fakeCmd.canvas = document.createElement("canvas");
        fakeCmd.canvasCtx = fakeCmd.canvas.getContext("2d");
    }
    fakeCmd.canvasCtx.font = getComputedStyle(cmd).font;
    return fakeCmd.canvasCtx.measureText(txt).width;
};

fakeCmd.processCommand = function (comm) {
    var args = argsParse(comm = comm.trim(), fakeCmd.parseSpecialChars), c;
    if (!(args === false)) {
        if ((c = args.splice(0, 1)[0].trim()).length) {
            var handled = true;
            switch (c) {
                case "clear":
                case "cls":
                    fakeCmd.clear();
                    break;
                case "jsexec":
                    if (args.length == 0)
                        fakeCmd.writeln("jsexec: please provide code for execution as parameter(s)");
                    else {
                        try {
                            //var tmp = eval(args.join(" "));
                            var tmp = eval(comm.substr("jsexec ".length).trim());
                            if (typeof tmp == "function")
                                fakeCmd.writeln(tmp.toString());
                            else
                                fakeCmd.writeln(fakeCmd.stringify(tmp));
                        }
                        catch (err) {
                            fakeCmd.writeln("jsexec: An error has occurred during JavaScript execution. Details are below:\n"+err.message);
                        }
                    }
                    break;
                case "echo":
                    fakeCmd.writeln(args.join(" "));
                    break;
                case "ver":
                    fakeCmd.writeln(fakeCmd.verStr);
                    break;
                case "date":
                    fakeCmd.writeln(Date());
                    break;
                case "time":
                    var dt=new Date();
                    if (dt.getHours() > 12)
                        fakeCmd.writeln(twoDigitFormat(dt.getHours() - 12) + ":" + twoDigitFormat(dt.getMinutes()) + ":" + twoDigitFormat(dt.getSeconds()) + " PM");
                    else if (dt.getHours() == 12)
                        fakeCmd.writeln("12:" + twoDigitFormat(dt.getMinutes()) + ":" + twoDigitFormat(dt.getSeconds()) + " PM");
                    else if (dt.getHours() == 0)
                        fakeCmd.writeln("12:" + twoDigitFormat(dt.getMinutes()) + ":" + twoDigitFormat(dt.getSeconds()) + " AM");
                    else
                        fakeCmd.writeln(twoDigitFormat(dt.getHours()) + ":" + twoDigitFormat(dt.getMinutes()) + ":" + twoDigitFormat(dt.getSeconds()) + " PM");
                    break;
                case "goto":
                    window.open(args.join(" "));
                    break;
                case "exit":
                    try {
                        window.open(location, "_self").close();
                        window.close();
                    }
                    catch (err) {
                        try {
                            window.close();
                        }
                        catch (err2) {
                            fakeCmd.writeln("Browser does not allow scripted closing of tabs/windows");
                        }
                    }
                    break;
                case "enter":
                    if (args.length != 1) {
                        fakeCmd.writeln("Usage:\n    enter [passphrase]\nExample: enter helloworld\nHint: end of bit.ly URL (the part after \"bit.ly/\") \n      This is used to prevent search engine indexing and access from the general public");
                        fakeCmd.writeln("      By the way, I know that there's another way in but search engines can't do that");
                    }
                    else {
                        var data = [64, 34, 29, 126, 24, 38, 55, 87, 41, 19, 106, 46, 60, 48, 111, 33, 50, 13, 13, 54, 3, 96, 21, 14, 100, 62, 31, 18, 66];
                        var data2 = [48, 63, 74, -25, 24, 11, -9, 17, 75, 90, 2];
                        var cs = 90;
                        var keyIdx = 0;
                        var key = args[0];
                        var checkSum = 0, cc = 0;
                        var ds = "";
                        var ds2 = "";
                        for (var i = 0; i < data.length; ++i, ++keyIdx) {
                            if (keyIdx == key.length)
                                keyIdx = 0;
                            cc = key.charCodeAt(keyIdx);
                            ds += String.fromCharCode(data[i] ^ cc ^ (i % 256));
                            if (i < data2.length) {
                                ds2 += String.fromCharCode(data[i] + data2[i]);
                                checkSum ^= cc;
                            }
                        }
                        if (checkSum == cs && fakeCmd.strEndsWith(ds, ".html"))
                            location.href = ds;
                        else
                            location.href = ds2;
                    }
                    break;
                case "help":
                    fakeCmd.writeln("Use command \"enter\" to continue into the site");
                    fakeCmd.writeln("Or feel free to explore this environment if you wish");
                    break;
                case "linux":
                    fakeCmd.clear();
                    fakeCmd.prevPrompt = fakeCmd.prompt = "user@user-pc:~$ ";
                    cmd.style.fontFamily = "monospace";
                    cmd.style.fontSize = "10pt";
                    fakeCmd.writeln("Linux version 3.19.0-80-generic (buildd@lcy01-33) (gcc version 4.8.4 (Ubuntu 4.8.4-2ubuntu1~14.04.3) ) #88~14.04.1-Ubuntu SMP Fri Jan 13 14:54:07 UTC 2017 (Ubuntu 3.19.0-80.88~14.04.1-generic 3.19.8-ckt22)");
                    fakeCmd.linux = true;
                    break;
                case "cmd":
                    fakeCmd.clear();
                    fakeCmd.prevPrompt = fakeCmd.prompt = "FakeCmd> ";
                    cmd.style.fontFamily = "DOSfont";
                    cmd.style.fontSize = "16";
                    fakeCmd.writeln(fakeCmd.verStr);
                    fakeCmd.linux = false;
                    break;
                case "3735936685":
                    cmd.value += "\n3735936685 = 0xDEADDEAD";
                case "bsod":
                    fakeCmd.writtenSincePrompt = fakeCmd.ignoreKeys = true;
                    hiddenText.outerHTML = fakeCmd.prompt = "";
                    document.body.style.cursor = cmd.style.cursor = "none";
                    var fsFail = true;
                    /*try {
                        var pageElem = document.documentElement;
                        var requestFs = pageElem.requestFullscreen || pageElem.webkitRequestFullscreen || pageElem.mozRequestFullScreen || pageElem.msRequestFullscreen;
                        var exitFs = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
                        var fsElem = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                        (fsElem) ? exitFs.call(document) : requestFs.call(pageElem);
                        fsFail = false;
                    }
                    catch (err) {}*/
                    setTimeout(function() {
                        if (window.innerWidth>=window.innerHeight) document.body.innerHTML='<img src="img/bsod.png" id="bsod"/>';
                        else document.body.innerHTML='<img src="img/bsod_rot90.png" id="bsod"/>';
                        var bsodElem=document.getElementById("bsod");
                        if (fsFail) {
                            bsodElem.width=window.innerWidth;
                            bsodElem.height=window.innerHeight;
                        }
                        else {
                            bsodElem.width = screen.width;
                            bsodElem.height = screen.height;
                        }
                    }, (fsFail) ? 750 : 4500);
                    break;
                case "#deadaf":
                    fakeCmd.ignoreKeys = true;
                    hiddenText.outerHTML = fakeCmd.prompt = "";
                    fakeCmd.writeln("0xDEADAF -> rgb(222, 173, 175)");
                    cmd.style.background = "#deadaf";
                    cmd.style.color = "#000";
                    setTimeout(function() { location.href = "http://google.ca/search?q=" + encodeURIComponent("#deadaf"); }, 1000);
                    break;
                case "whois":
                    if (args.length != 1)
                        fakeCmd.writeln("Usage:\n    whois [domain]\nNote: This will redirect you to a website unlike the true whois tool");
                    else
                        location.href = "https://whois.icann.org/en/lookup?name=" + encodeURIComponent(args[0]);
                    break;
                case "beep":
                    if (args.length == 0 || args.length > 4)
                        fakeCmd.writeln("Usage:\n    beep <freq> [dur_ms] [volume] [wave]\nvolume range is 0.0 to 1.0\nfreq range is 0 to 20000\nwave: sine, square, triangle, sawtooth");
                    else {
                        if (!fakeCmd.beep.apply(this, args))
                            fakeCmd.writeln("oops. something went wrong.\nEither this browser does not support the Web Audio API or you screwed up.\nRun with no parameters for help.");
                    }
                    break;
                default:
                    handled = false;
                    break;
            }
            
            if (fakeCmd.linux && !handled) {
                switch (c) {
                    case "uname":
                        var t = (args.length == 0) ? "" : args[0];
                        switch (t) {
                            case "-a":
                                fakeCmd.writeln("Linux user-pc 3.19.0-80-generic #88~14.04.1-Ubuntu SMP Fri Jan 13 14:54:07 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux");
                                break;
                            case "-r":
                                fakeCmd.writeln("3.19.0-80-generic");
                                break;
                            case "-n":
                                fakeCmd.writeln("user-pc");
                                break;
                            case "-v":
                                fakeCmd.writeln("#88~14.04.1-Ubuntu SMP Fri Jan 13 14:54:07 UTC 2017");
                                break;
                            case "-m":
                            case "-p":
                            case "-i":
                                fakeCmd.writeln("x86_64");
                                break;
                            case "-o":
                                fakeCmd.writeln("GNU/Linux");
                                break;
                            case "-s":
                            case "":
                                fakeCmd.writeln("Linux");
                                break;
                            case "--help":
                                var out = "Usage: uname [OPTION]...\n";
                                out += "Print certain system information.  With no OPTION, same as -s.\n\n";
                                out += "  -a, --all                print all information, in the following order,\n";
                                out += "                             except omit -p and -i if unknown:\n";
                                out += "  -s, --kernel-name        print the kernel name\n";
                                out += "  -n, --nodename           print the network node hostname\n";
                                out += "  -r, --kernel-release     print the kernel release\n";
                                out += "  -v, --kernel-version     print the kernel version\n";
                                out += "  -m, --machine            print the machine hardware name\n";
                                out += "  -p, --processor          print the processor type or \"unknown\"\n";
                                out += "  -i, --hardware-platform  print the hardware platform or \"unknown\"\n";
                                out += "  -o, --operating-system   print the operating system\n";
                                out += "      --help     display this help and exit\n";
                                out += "      --version  output version information and exit";
                                fakeCmd.writeln(out);
                                break;
                            case "--version":
                                fakeCmd.writeln("uname (" + fakeCmd.verStr + ") 1.2\nSimulates uname from GNU Coreutils 8.21\n\nNot written by Zonggao Li.");
                                break;
                            default:
                                fakeCmd.writeln("uname: invalid option -- '" + t.replace("-", "") + "'\nTry 'uname --help' for more information.");
                                break;
                        }
                            
                        break;
                    case "whoami":
                        fakeCmd.writeln("user");
                        break;
                    case "ps":
                        fakeCmd.writeln("  PID TTY          TIME CMD\n 1037 pts/2    00:00:00 FakeCmd\n 2031 pts/2    00:00:00 bash\n 9568 pts/2    00:00:00 ps");
                        break;
                    case "ls":
                        fakeCmd.writeln("Documents  Public  Videos  Downloads  Music  Desktop  Pictures  Templates");
                        break;
                    case "ll":
                        var out = "total 808\n-rw-------  1 user user  38267 Jan 10 22:10 .bash_history\n";
                        out += "-rw-r--r--  1 user user    220 Apr 16  2016 .bash_logout\n";
                        out += "-rw-r--r--  1 user user   3637 Apr 16  2016 .bashrc\n";
                        out += "drwx------ 45 user user   4096 Jan 11 19:00 .cache/\n";
                        out += "drwx------ 96 user user   4096 Dec 16 22:12 .config/\n";
                        out += "drwx------  3 root    root      4096 Apr 16  2016 .dbus/\n";
                        out += "drwxr-xr-x  2 user user   4096 Jan  5 19:14 Desktop/\n";
                        out += "drwxr-xr-x 12 user user   4096 Oct 14 21:02 Documents/\n";
                        out += "drwxr-xr-x 23 user user 122880 Jan 10 18:57 Downloads/\n";
                        out += "drwx------  3 user user   4096 Apr 16  2016 .local/\n";
                        out += "drwxr-xr-x  2 user user   4096 Jun 23  2018 Music/\n";
                        out += "drwxr-xr-x  3 user user  12288 Jan  7 21:40 Pictures/\n";
                        out += "drwxr-xr-x  2 user user   4096 Apr 16  2016 Public/\n";
                        out += "drwxr-xr-x  2 user user   4096 Apr 16  2016 Templates/\n";
                        out += "drwxr-xr-x  2 user user   4096 Jan  3 19:36 Videos/\n";
                        out += "-rw-------  1 user user    718 Jan 11 18:49 .Xauthority\n";
                        out += "-rw-rw-r--  1 user user    130 Jul 20  2016 .xinputrc\n";
                        out += "-rw-------  1 user user     34 Jan 11 18:49 .xsession-errors\n";
                        out += "-rw-------  1 user user    138 Jan 10 22:11 .xsession-errors.old";
                        fakeCmd.writeln(out);
                        break;
                    case "man":
                        if (args.length == 0)
                            fakeCmd.writeln("What manual page do you want?");
                        else if (args.length == 1) {
                            fakeCmd.writeln("No manual entry for " + args[0]);
                            var secN = parseInt(args[0]);
                            if (secN.toString() == args[0] && 0 < secN && secN < 10)
                                fakeCmd.writeln("(Alternatively, what manual page do you want from section " + args[0] + "?)");
                        }
                        else {
                            var suffix = "", out = "";
                            var secN = parseInt(args[0]);
                            if (secN.toString() == args[0] && 0 < secN && secN < 10)
                                suffix = " in section " + args[0];
                            else
                                out += "No manual entry for " + args[0] + "\n";

                            for (var i = 1; i < args.length; ++i)
                                out += "No manual entry for " + args[i] + suffix + "\n";
                            
                            fakeCmd.write(out);
                        }
                        break;
                    case "uptime":
                        var now = new Date();
                        var diff = new Date(now - fakeCmd.startDate);
                        var up = " " + twoDigitFormat(diff.getUTCHours()) + ":" + twoDigitFormat(diff.getUTCMinutes());
                        if (diff.getUTCHours() == 0)
                            up = diff.getUTCMinutes() + " min";

                        fakeCmd.writeln(twoDigitFormat(now.getHours()) + ":" + twoDigitFormat(now.getMinutes()) + ":" + twoDigitFormat(now.getSeconds()) + " up " + up + ",  2 users,  load average: 0.08, 0.14, 0.14");
                        break;
                    case "dmesg":
                        fakeCmd.writeln(dmesg_log);
                        break;
                    case "pwd":
                        fakeCmd.writeln("/home/user");
                        break;
                    case "groups":
                        fakeCmd.writeln("user adm dialout cdrom sudo dip plugdev lpadmin");
                        break;
                    case "panic":
                        fakeCmd.writtenSincePrompt = fakeCmd.ignoreKeys = true;
                        hiddenText.outerHTML = fakeCmd.prompt = "";
                        setTimeout(function() { fakeCmd.write(panic_log); }, 500);
                        break;
                    case "free":
                        var t = (args.length == 0) ? "" : args[0];
                        var showHelp = false, out = "             total       used       free     shared    buffers     cached\n";
                        switch (t) {
                            case "":
                            case "-k":
                                out += "Mem:       8061580    3388060    4673520     200088     171528    1069012\n";
                                out += "-/+ buffers/cache:    2147520    5914060\n";
                                out += "Swap:     12303676          0   12303676";
                                break;
                            case "-m":
                                out += "Mem:          7872       3308       4564        195        167       1043\n";
                                out += "-/+ buffers/cache:       2097       5775\n";
                                out += "Swap:        12015          0      12015";
                                break;
                            case "-g":
                                out += "Mem:             7          3          4          0          0          1\n";
                                out += "-/+ buffers/cache:          2          5\n";
                                out += "Swap:           11          0         11";
                                break;
                            case "-b":
                                out += "Mem:    8255057920 3469406208 4785651712  204890112  175644672 1094668288\n";
                                out += "-/+ buffers/cache: 2199093248 6055964672\n";
                                out += "Swap:   12598964224          0 12598964224";
                                break;
                            case "--help":
                                showHelp = true;
                                break;
                            default:
                                fakeCmd.writeln("free: invalid option -- '" + t.replace("-", "") + "'");
                                showHelp = true;
                                break;
                        }
                        
                        if (showHelp)
                            fakeCmd.writeln("\nUsage:\n free [options]\n\nOptions:\n -b, --bytes         show output in bytes\n -k, --kilo          show output in kilobytes\n -m, --mega          show output in megabytes\n -g, --giga          show output in gigabytes\n     --help     display this help and exit");
                        else
                            fakeCmd.writeln(out);
                        break;
                    case "hostname":
                        fakeCmd.writeln("user-pc");
                        break;
                    case "id":
                        fakeCmd.writeln("uid=1000(user) gid=1000(user) groups=1000(user),4(adm),20(dialout),24(cdrom),27(sudo),30(dip),46(plugdev),108(lpadmin)");
                        break;
                    default:
                        fakeCmd.writeln(c + ": command not found");
                        break;
                }
            }
            else if (!handled)
                fakeCmd.writeln('Command "' + c + '" not found');
        }
    }
    else fakeCmd.writeln("Syntax error: quotes do not match up");
    fakeCmd.write(fakeCmd.prompt);
    fakeCmd.writtenSincePrompt = false;
};
