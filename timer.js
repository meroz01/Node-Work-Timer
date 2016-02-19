var s = 0,
    m = 0,
    h = 0,
    time = 0;
    
    
setInterval(() => {
    s++;
    
    if(s >= 60) {
        m++;
        s = 0;
    }
    
    if(m >= 60) {
        h++;
        m = 0;
    }
    
    if(h >= 2) {
        finisheHandler();
    }
    
    printOut(h, m, s);

}, 1000);

function finisheHandler() {
    console.log('FINISHED!!!')
}

function printOut(h, m, s) {
    
    h = addZero(h);
    m = addZero(m);
    s = addZero(s);
    
    time = h + ' : ' + m + ' : '  + s;

    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(String(time));
}

function addZero(x) {
    x = String(x);
    
    return x.length === 2 ? +x : '0' + x;
}