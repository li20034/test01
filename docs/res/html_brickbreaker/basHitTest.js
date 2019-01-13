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
                    return "eORi";
                }
            }
        }
    }
}
function getHyp(a, b) {
    return Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2));
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
function circHTest(x1, y1, w1, h1, rx, ry, r_, hpaccu, vpaccu) {
    var tmp, res=getRelPos(x1, y1, w1, h1, rx, ry), r=Math.round(r_);
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
        case "eORi":
            return rectHTest(x1, y1, w1, h1, rx-r, ry-r, 2*r, 2*r, hpaccu, vpaccu);
            break;
    }
    if (tmp>=r-Math.round(getHyp(hpaccu, vpaccu))&&tmp<=r) {return res;}
    else {return "n";}
}