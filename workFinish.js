var workLength = 8*60*60,
    percent,
    t,
    timeOffset = process.argv[2],
    time = workLength - (timeOffset*60),
    total = time,
    blink;

process.stdout.write("So you've started this program after " + timeOffset + " minutes");

setInterval(() => {
    time--;
    
    t = time/workLength * 100;
    t = t.toFixed(2);
    
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    if(t >= 10) {
        process.stdout.write(printProgressBar(t) + ' | ' + t + ' %' + ' | less than ' + Math.ceil(time/3600) + ' hours' + ' | ' + Math.floor(time/60) + ' minutes' + ' | ' + time + ' s');
    } else {
        process.stdout.write(printLongProgressBar(t));
    }

}, 1000);

function printProgressBar(percentage) {
    var barLength = 10;
    var barUnfilled = '_';
    var barFilled = '#';
    var bar = '[';
    
    var blink
    
    var barCurrentLength = percentage/barLength;
    for(var i = 1; i <= barLength; i++) {
        if(i < barCurrentLength + 1) {
            bar += barFilled;
        } else {
            bar += barUnfilled;
        }
    }
    
    bar += ']'; 
    
    return bar;
}

function printLongProgressBar(percentage) {
    var p = percentage/10;
    var barLength = 60;
    var barUnfilled = '_';
    var barFilled = '#';
    var bar = '[';
    var s;
    
    blink === barUnfilled ? blink = barFilled : blink = barUnfilled;
    
    var barCurrentLength = p*barLength;
    for(var i = 1; i <= barLength; i++) {
        if(i < barCurrentLength + 1) {
            bar += barFilled;
        } else {
            if(!s) {
                bar += blink;
                s = !s;
            } else {
                bar += barUnfilled;
            }
        }
    }
    
    s = !s;
    
    bar += ']' + ' ' + Math.ceil(p*100) + '%'; 
    
    return bar;
}