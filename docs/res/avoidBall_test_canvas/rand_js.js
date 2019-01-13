function randDec(min, max) {
    return min+Math.random()*(max-min+1);
}
function randInt(min, max) {
    return min+Math.floor(Math.random()*(max-min+1));
}
function randBool() {
    return (randInt(0, 1)==1);
}
function getRndItm(list) {
    return list[randInt(0, list.length-1)];
}
function rnd2dPos(x_max, y_max, x_min, y_min) {
    return {x:randInt(x_min||0, x_max), y:randInt(y_min||0, y_max)};
}