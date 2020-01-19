console.log("santa game loaded")

// counting correct answer vs wrong answer
var win = 0
var wrong = 0 
var noAnswer = 0

$("#stop").on("click", function() {
    $("input").each(function() {
        if(this.checked === true) {
            if($(this).hasClass("answer")) {
                win++;
            } else{
                wrong++;
            }
        }
    })
    noAnswer = 12-win-wrong;

    $(".correct").text("Correct answers: " + win);
    $(".wrong").text("Wrong answers: " + wrong);
    $(".unanswered").text("No Holiday Spirit?: " + noAnswer);
})