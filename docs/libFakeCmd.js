function twoDigitFormat(num) {
    return num<10?"0"+num:num.toString();
}
function argsParse(cmd, specialChars) {
    var quotes=0, start=-1, lastSpace=-1, lastEscQuote=-1;
    var args=[];
    if (specialChars) cmd=cmd.split("\\n").join("\n").split("\\t").join("\t");
    for (var i=0;i<cmd.length;++i) {
        if (cmd[i]=='"') {
            if (!specialChars||cmd[i-1]!="\\"||i==0) {
                ++quotes;
                if (quotes%2) start=i;
                else {
                    specialChars&&lastEscQuote>start&&lastEscQuote<i?args.push(cmd.substring(start+1, i).split('\\"').join('"')):args.push(cmd.substring(start+1, i));
                    start=-1;
                }
            }
            else lastEscQuote=i;
        }
        else if (cmd[i]==" "&&start==-1) {
            if (cmd[lastSpace+1]!='"') specialChars&&lastEscQuote>lastSpace&&lastEscQuote<i?args.push(cmd.substring(lastSpace+1, i).split('\\"').join('"')):args.push(cmd.substring(lastSpace+1, i));
            lastSpace=i;
        }
    }
    if (cmd.length>1&&(cmd[cmd.length-2]=="\\"||cmd[cmd.length-1]!='"')) specialChars&&lastEscQuote>lastSpace?args.push(cmd.substr(lastSpace+1).split('\\"').join('"')):args.push(cmd.substr(lastSpace+1));
    if (quotes==0&&lastSpace==-1) return specialChars?[cmd.split('\\"').join('"')]:[cmd];
    else if (quotes%2||start!=-1) return false;
    else return args;
}
var fakeCmd={};
var writtenSincePrompt=false;
var startDate = new Date();
fakeCmd.inputs=[];
fakeCmd.prevPrompt="FakeCmd> ";
fakeCmd.ignoreKeys=false;
fakeCmd.linux = false;
fakeCmd.prevIgnoreKeys=fakeCmd.ignoreKeys;
fakeCmd.init=function (_prompt, _parseSpecialChars) {
    fakeCmd.storedContent=cmd.value=fakeCmd.prompt=_prompt;
    fakeCmd.parseSpecialChars=_parseSpecialChars;
    cmd.value = "Fake Command Prompt version 1.0-experimental\nType \"help\" and hit enter for help on how to continue.\n" + cmd.value;
};
fakeCmd.clear=function () {
    cmd.value="";
    writtenSincePrompt=true;
};
fakeCmd.write=function (txt) {
    if (writtenSincePrompt) cmd.value+=txt;
    else {
        cmd.value+="\n"+txt;
        writtenSincePrompt=true;
    }
    cmd.scrollTop=cmd.scrollHeight;
};
fakeCmd.writeln=function (txt) {
    fakeCmd.write(txt+"\n");
};
fakeCmd.saveContent=function () {
    fakeCmd.storedContent=cmd.value;
};
fakeCmd.restoreContent=function () {
    cmd.value=fakeCmd.storedContent;
};
fakeCmd.strEndsWith=function (s, suffix) {
    if (s.endsWith)
        return s.endsWith(suffix);
    else {
        for (var i = s.length - 1, j = suffix.length - 1; i >= 0, j >= 0; --i, --j)
            if (s[i] != suffix[j])
                return false;
        return true;
    }
}; //used to cope with missing string.endsWith support

fakeCmd.processCommand=function (comm) {
    var args=argsParse(comm=comm.trim(), fakeCmd.parseSpecialChars), c;
    if (!(args===false)) {
        if ((c=args.splice(0, 1)[0].trim()).length) {
            switch (c) {
                case "clear":
                case "cls":
                    fakeCmd.clear();
                    break;
                case "jsexec":
                    try {
                        var tmp=eval(args.join(" "));
                        if (typeof tmp!="undefined") fakeCmd.writeln(tmp);
                    }
                    catch (err) {
                        fakeCmd.writeln("jsexec: An error has occurred during JavaScript execution. Details are below:\n"+err.message);
                    }
                    break;
                case "echo":
                    fakeCmd.writeln(args.join(" "));
                    break;
                case "ver":
                    fakeCmd.writeln("Fake Command Prompt version 1.0-experimental");
                    break;
                case "date":
                    fakeCmd.writeln(Date());
                    break;
                case "time":
                    var dt=new Date();
                    if (dt.getHours()>12) fakeCmd.writeln(twoDigitFormat(dt.getHours()-12)+":"+twoDigitFormat(dt.getMinutes())+":"+twoDigitFormat(dt.getSeconds())+" PM");
                    else if (dt.getHours()==12) fakeCmd.writeln("12:"+twoDigitFormat(dt.getMinutes())+":"+twoDigitFormat(dt.getSeconds())+" PM");
                    else if (dt.getHours()==0) fakeCmd.writeln("12:"+twoDigitFormat(dt.getMinutes())+":"+twoDigitFormat(dt.getSeconds())+" AM");
                    else fakeCmd.writeln(twoDigitFormat(dt.getHours())+":"+twoDigitFormat(dt.getMinutes())+":"+twoDigitFormat(dt.getSeconds())+" PM");
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
                    fakeCmd.writeln("Fake Command Prompt version 1.0-experimental");
                    fakeCmd.linux = false;
                    break;
                case "uname":
                    if (fakeCmd.linux) {
                        if (args[0] == "-a")
                            fakeCmd.writeln("Linux user-pc 3.19.0-80-generic #88~14.04.1-Ubuntu SMP Fri Jan 13 14:54:07 UTC 2017 x86_64 x86_64 x86_64 GNU/Linux");
                        else
                            fakeCmd.writeln("Linux");
                    }
                    else
                        fakeCmd.writeln('Command "'+c+'" not found');
                    break;
                case "whoami":
                    if (fakeCmd.linux)
                        fakeCmd.writeln("user");
                    else
                        fakeCmd.writeln('Command "'+c+'" not found');
                    break;
                case "ps":
                    if (fakeCmd.linux)
                        fakeCmd.writeln("  PID TTY          TIME CMD\n 1037 pts/2    00:00:00 FakeCmd\n 2031 pts/2    00:00:00 bash\n 9568 pts/2    00:00:00 ps");
                    else
                        fakeCmd.writeln('Command "'+c+'" not found');
                    break;
                case "ls":
                    if (fakeCmd.linux)
                        fakeCmd.writeln("Documents  Public  Videos  Downloads  Music  Desktop  Pictures  Templates");
                    else
                        fakeCmd.writeln('Command "'+c+'" not found');
                    break;
                case "ll":
                    if (fakeCmd.linux) {
                        fakeCmd.writeln("total 808\n-rw-------  1 user user  38267 Jan 10 22:10 .bash_history");
                        fakeCmd.writeln("-rw-r--r--  1 user user    220 Apr 16  2016 .bash_logout");
                        fakeCmd.writeln("-rw-r--r--  1 user user   3637 Apr 16  2016 .bashrc");
                        fakeCmd.writeln("drwx------ 45 user user   4096 Jan 11 19:00 .cache/");
                        fakeCmd.writeln("drwx------ 96 user user   4096 Dec 16 22:12 .config/");
                        fakeCmd.writeln("drwx------  3 root    root      4096 Apr 16  2016 .dbus/");
                        fakeCmd.writeln("drwxr-xr-x  2 user user   4096 Jan  5 19:14 Desktop/");
                        fakeCmd.writeln("drwxr-xr-x 12 user user   4096 Oct 14 21:02 Documents/");
                        fakeCmd.writeln("drwxr-xr-x 23 user user 122880 Jan 10 18:57 Downloads/");
                        fakeCmd.writeln("drwx------  3 user user   4096 Apr 16  2016 .local/");
                        fakeCmd.writeln("drwxr-xr-x  2 user user   4096 Jun 23  2018 Music/");
                        fakeCmd.writeln("drwxr-xr-x  3 user user  12288 Jan  7 21:40 Pictures/");
                        fakeCmd.writeln("drwxr-xr-x  2 user user   4096 Apr 16  2016 Public/");
                        fakeCmd.writeln("drwxr-xr-x  2 user user   4096 Apr 16  2016 Templates/");
                        fakeCmd.writeln("drwxr-xr-x  2 user user   4096 Jan  3 19:36 Videos/");
                        fakeCmd.writeln("-rw-------  1 user user    718 Jan 11 18:49 .Xauthority");
                        fakeCmd.writeln("-rw-rw-r--  1 user user    130 Jul 20  2016 .xinputrc");
                        fakeCmd.writeln("-rw-------  1 user user     34 Jan 11 18:49 .xsession-errors");
                        fakeCmd.writeln("-rw-------  1 user user    138 Jan 10 22:11 .xsession-errors.old");
                    }
                    else
                        fakeCmd.writeln('Command "'+c+'" not found');
                    break;
                case "man":
                    if (fakeCmd.linux) {
                        if (args.length == 0)
                            fakeCmd.writeln("What manual page do you want?");
                        else
                            fakeCmd.writeln("No manual entry for " + args[args.length - 1]);
                    }
                    else
                        fakeCmd.writeln('Command "'+c+'" not found');
                    break;
                case "uptime":
                    if (fakeCmd.linux) {
                        var now = new Date();
                        var diff = new Date(now - startDate);
                        var up = " " + twoDigitFormat(diff.getUTCHours()) + ":" + twoDigitFormat(diff.getUTCMinutes());
                        if (diff.getUTCHours() == 0)
                            up = diff.getUTCMinutes() + " min";
                        
                        fakeCmd.writeln(twoDigitFormat(now.getHours()) + ":" + twoDigitFormat(now.getMinutes()) + ":" + twoDigitFormat(now.getSeconds()) + " up " + up + ",  2 users,  load average: 0.08, 0.14, 0.14");
                    }
                    else
                        fakeCmd.writeln('Command "'+c+'" not found');
                    break;
                case "dmesg":
                    if (fakeCmd.linux)
                        fakeCmd.writeln(dmesg_log);
                    else
                        fakeCmd.writeln('Command "'+c+'" not found');
                    break;
                case "pwd":
                    if (fakeCmd.linux)
                        fakeCmd.writeln("/home/user");
                    else
                        fakeCmd.writeln('Command "'+c+'" not found');
                    break;
                case "groups":
                    if (fakeCmd.linux)
                        fakeCmd.writeln("user adm dialout cdrom sudo dip plugdev lpadmin");
                    else
                        fakeCmd.writeln('Command "'+c+'" not found');
                    break;
                case "bsod":
                    writtenSincePrompt = fakeCmd.ignoreKeys = true;
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
                case "panic":
                    if (fakeCmd.linux) {
                        writtenSincePrompt = fakeCmd.ignoreKeys = true;
                        hiddenText.outerHTML = fakeCmd.prompt = "";
                        setTimeout(function() { fakeCmd.write(panic_log); }, 500);
                    }
                    else
                        fakeCmd.writeln('Command "'+c+'" not found');
                    break;
                default:
                    fakeCmd.writeln('Command "'+c+'" not found');
                    break;
            }
        }
    }
    else fakeCmd.writeln("Syntax error: quotes do not match up");
    fakeCmd.write(fakeCmd.prompt);
    writtenSincePrompt=false;
};
