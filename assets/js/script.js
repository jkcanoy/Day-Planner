// Get current date
function getCurrentDate () {
    var now = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#currentDay").text(now);
}

getCurrentDate();
setInterval(getCurrentDate, 1000);

// for loop to create rows for timeblocks
for (i = 0;i < 9; i++);

