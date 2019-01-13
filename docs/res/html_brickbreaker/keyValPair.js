function keyValPair() {
    var ks=[];
    var vals=[];
    var dt={};
    var len=0;
    this.add=function (k, val) {
        if (ks.indexOf(k)==-1) {
            dt[k]=val;
            ks.push(k);
            vals.push(val);
            len++;
        }
    }
    this.remove=function (k) {
        if (ks.indexOf(k)!=-1) {
            delete dt[k];
            vals.splice(ks.indexOf(k), 1);
            ks.splice(ks.indexOf(k), 1);
            len--;
        }
    }
    this.set=function (k, val) {
        if (ks.indexOf(k)!=-1) {
            dt[k]=val;
            vals[ks.indexOf(k)]=val;
        }
    }
    this.get=function (k) {
        return dt[k];
    }
    this.length=function () {
        return len;
    }
    this.getKeys=function () {
        return ks;
    }
    this.getVals=function () {
        return vals;
    }
    this.getObj=function () {
        return dt;
    }
    this.clear=function () {
        ks=[];
        vals=[];
        dt={};
        len=0;
    }
}