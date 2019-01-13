function keyValPair() {
    var ks=[], vals=[], dt={};
    var len=0;
    this.add=function (k, val) {
        if (ks.indexOf(k)==-1) {
            dt[k]=val;
            ks.push(k);
            vals.push(val);
            ++len;
        }
    };
    this.remove=function (k) {
        var pos=ks.indexOf(k);
        if (pos!=-1) {
            --len;
            delete dt[k];
            vals.splice(pos, 1);
            ks.splice(pos, 1);
        }
    };
    this.set=function (k, val) {
        var pos=ks.indexOf(k);
        if (pos!=-1) dt[k]=vals[pos]=val;
    };
    this.get=function (k) {
        return dt[k];
    };
    this.length=function () {
        return len;
    };
    this.getKeys=function () {
        return ks;
    };
    this.getVals=function () {
        return vals;
    };
    this.getObj=function () {
        return dt;
    };
    this.clear=function () {
        ks=[];
        vals=[];
        dt={};
        len=0;
    };
}