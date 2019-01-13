function getRelPos(x1, y1, w1, h1, x2, y2) {
    if (x2<x1&&y2<y1) {
        return "tl";
    }
    else {
        if (x2>x1+w1&&y2>y1+h1) {
            return "br";
        }
        else {
            if (x2>x1+w1&&y2<y1) {
                return "tr";
            }
            else {
                if (x2<x1&&y2>y1+w1) {
                    return "bl"
                }
                else {
                    return "e";
                }
            }
        }
    }
}
function getHyp(a, b) {
    return Math.sqrt(a*a+b*b);
}
function rectHTest(x1, y1, w1, h1, x2, y2, w2, h2, hpaccu, vpaccu) {
    hpaccu=hpaccu||0;
    vpaccu=vpaccu||0;
	if (y2<=y1+h1&&y2+h2>=y1) {
		if (x2<=x1+w1&&x2>=x1+w1-hpaccu) {
			return "r";
		}
		if (x2+w2>=x1&&x2+w2<=x1+hpaccu) {
			return "l";
		}
	}
	if (x2<=x1+w1&&x2+w2>=x1) {
		if (y2+h2>=y1&&y2+h2<=y1+vpaccu) {
			return "t";
		}
		if (y2<=y1+h1&&y2>=y1+h1-vpaccu) {
			return "b";
		}
	}
	return "n";
}
function circHTest(x1, y1, w1, h1, rx, ry, r_, hpaccu_, vpaccu_) {
    var tmp, res=getRelPos(x1, y1, w1, h1, rx, ry), r=Math.round(r_), hpaccu=hpaccu_||0, vpaccu=vpaccu_||0;
    switch (res) {
        case "tl":
            tmp=Math.round(getHyp(x1-rx, y1-ry));
            break;
        case "tr":
            tmp=Math.round(getHyp(rx-(x1+w1), y1-ry));
            break;
        case "bl":
            tmp=Math.round(getHyp(x1-rx, ry-(y1+h1)));
            break;
        case "br":
            tmp=Math.round(getHyp(rx-(x1+w1), ry-(y1+h1)));
            break;
        case "e":
            return rectHTest(x1, y1, w1, h1, rx-r, ry-r, 2*r, 2*r, hpaccu, vpaccu);
            break;
    }
    if (tmp>=r-Math.round(getHyp(hpaccu, vpaccu))&&tmp<=r) return res;
    else return "n";
}
function circCircHTest(rx1, ry1, r1, rx2, ry2, r2) {
    var rxdiff=rx2-rx1, rydiff=ry2-ry1, rd=getHyp(rxdiff, rydiff);
    var res="";
    if (rd<=r1+r2) {
        if (rydiff<0) res+="t";
        else if (rydiff>0) res+="b";
        if (rxdiff<0) res+="l";
        else if (rxdiff>0) res+="r";
        return res;
    }
    else return "n";
}
function rectOverlap(x1, y1, w1, h1, x2, y2, w2, h2) {
    var dy = y2 - y1, dx = x2 - x1;
    return (((dy <= 0 && -dy <= h2) || (dy >= 0 && dy <= h1)) && ((dx <= 0 && -dx <= w2) || (dx >=0 && dx <= w1)));
}
function getDist(x1, y1, x2, y2) {
    return getHyp(x2 - x1, y2 - y1);
}
function circRectOverlap(x, y, w, h, rx, ry, r) {
    var lp = rx <= x, rp = rx >= x + w, tp = ry <= y, bp = ry >= y + h;
    if (tp && lp) {
        return getDist(rx, ry, x, y) <= r;
    }
    if (tp && rp) {
        return getDist(rx, ry, x + w, y) <= r;
    }
    if (bp && lp) {
        return getDist(rx, ry, x, y + h) <= r;
    }
    if (bp && rp) {
        return getDist(rx, ry, x + w, y + h) <= r;
    }
    return rectOverlap(x, y, w, h, rx - r, ry - r, 2 * r, 2 * r);
}