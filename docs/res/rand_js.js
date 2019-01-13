function randDec(min, max) {
    return min+Math.random()*(max-min+1);
}
function randInt(min, max) {
    return min+Math.floor(Math.random()*(max-min+1));
}
function randBool() {
    if (randInt(0, 1)==0) {
        return false;
    }
    else {
        return true;
    }
}
function getRndItm(list) {
    return list[randInt(0, list.length-1)];
}
function rnd2dPos(x_max, y_max, x_min, y_min) {
    x_min=x_min||0;
    y_min=y_min||0;
    return {x:randInt(x_min, x_max), y:randInt(y_min, y_max)};
}
function rnd3dPos(x_max, y_max, z_max, x_min, y_min, z_min) {
    x_min=x_min||0;
    y_min=y_min||0;
    z_min=z_min||0;
    return {x:randInt(x_min, x_max), y:randInt(y_min, y_max), z:randInt(z_min, z_max)};
}