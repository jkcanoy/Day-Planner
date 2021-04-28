// Get current date
function getCurrentDate () {
    var now = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#currentDay").text(now);
}

getCurrentDate();
setInterval(getCurrentDate, 1000);

// for loop to create rows for timeblocks
for (i = 0;i < 9; i++) {
    var rowEl = $("<div>").addClass("row")
    var hourRowEl = $("<div>").addClass("hour col-md-2").text(moment("9:00 AM", "hh:mm A").add(i, "hours").format('hA'));
        hourRowEl.attr("date-time", moment("9:00 AM", "hh:mm A").add(i, "hours").format('hA'));
    var reminderInputEl = $("<textarea>").addClass("col-md-9");
    var saveBtnEl = $("<button>").addClass("saveBtn col-md-1").html('<i class="fas fa-save"></i>');

// append rows to container
$(".container").append(rowEl);
$(rowEl).append(hourRowEl);
$(hourRowEl).after(reminderInputEl);
$(reminderInputEl).after(saveBtnEl);

// determine if rows are past, present, future 

}

// save button click to localstorage

// retrieve reminder from local storage