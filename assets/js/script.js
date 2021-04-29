// use moment.js to get current date
var currentTime = moment();

function getCurrentDate () {
    var now = moment().format('MMM Do, YYYY, hh:mm:ss a');
    $("#currentDay").text(now);
}

getCurrentDate();
setInterval(getCurrentDate, 1000);

// for loop to create rows for timeblocks
for (i = 0; i < 9; i++) {
    var rowEl = $("<div>").addClass("row")
    var hourRowEl = $("<div>").addClass("hour col-md-2").text(moment("9:00 AM", "hh:mm A").add(i, "hours").format('hh:mmA'));
        hourRowEl.attr("data-time", moment("9:00 AM", "hh:mm A").add(i, "hours").format('hA'));
    var reminderInputEl = $("<textarea>").addClass("col-md-9");
    var saveBtnEl = $("<button>").addClass("saveBtn col-md-1").html('<i class="fas fa-save"></i>');

    // append rows to container
    $(".container").append(rowEl);
    $(rowEl).append(hourRowEl);
    $(hourRowEl).after(reminderInputEl);
    $(reminderInputEl).after(saveBtnEl);

    // determine if rows are past, present, future 
    if (currentTime.isSame(moment("9:00 AM", "hh:mm A").add(i, "hours"), "hours")) {
        $(reminderInputEl).addClass("present");
    } else if (currentTime.isBefore(moment("9:00 AM", "hh:mm A").add(i, "hours"), "hours")) {
        $(reminderInputEl).addClass("future");
    } else {
        $(reminderInputEl).addClass("past");
    }

}

// save button click to localstorage
$(".saveBtn").on("click", function() {
    localStorage.setItem($(this).siblings("div.hour").attr("data-time"), $(this).siblings("textarea").val())
});

