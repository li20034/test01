var wH = 250, wW = 250;
var x_ = window.screenX, y_ = window.screenY;
var x_incr = ~~(Math.random() * 17) + 1, y_incr = ~~(Math.random() * 17) + 1;
var screenHeight = screen.availHeight, screenWidth = screen.availWidth;

function bounce() {
    window.moveTo(x_, y_);
    if ((x_ + wW >= screenWidth && x_incr > 0) || (x_ <= 0 && x_incr < 0))
        x_incr *= -1;
    if ((y_ + wH >= screenHeight && y_incr > 0) || (y_ <= 0 && y_incr < 0))
        y_incr *= -1;
    x_ += x_incr;
    y_ += y_incr;
    requestAnimationFrame(bounce);
}

bounce();