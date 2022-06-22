export function SmoothHorizoneScrolling(e,time,amount,start) {
    var eAmt = amount / 100;
    var curTime = 0;
    var scrollCounter = 0;
    const y = window.scrollY;
    while (curTime <= time) {
        window.setTimeout(SHS_B, curTime, e, scrollCounter, eAmt, start,y);
        curTime += time / 100;
        scrollCounter++;
    }
    window.scrollTo(0,y);
}

function SHS_B(e,sc ,eAmt, start,y) {
    e.scrollLeft = eAmt + sc + start
}


export function randomColor(opacity) {
    const R = Math.round(Math.random() * 256);
    const G = Math.round(Math.random() * 256);
    const A = Math.round(Math.random() * 256);
    const color = `rgba(${R},${G},${A},${opacity})`
    return color
}