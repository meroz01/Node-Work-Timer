var workLength = 2*60*60,
    percent,
    t,
    timeOffset = process.argv[2],
    time = workLength - (timeOffset*60),
    total = time;

process.stdout.write("So you've started this program after " + timeOffset + " minutes");

setInterval(() => {
    time--;
    
    t = time/workLength * 100;
    t = t.toFixed(2);
    
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(printProgressBar(t) + ' | ' + t + ' %' + ' | less than ' + Math.ceil(time/3600) + ' hours' + ' | ' + Math.floor(time/60) + ' minutes' + ' | ' + time + ' s');
}, 1000);

function printProgressBar(percentage) {
    var barLength = 10;
    var barUnfilled = '_';
    var barFilled = '#';
    var bar = '[';
    
    var barCurrentLength = percentage/barLength;
    for(var i = 1; i <= barLength; i++) {
        if(i < barCurrentLength + 1) {
            bar += '#';
        } else {
            bar += '_';
        }
    }
    
    bar += ']'; 
    
    return bar;
}