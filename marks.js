function showNamePrompt() {
    var name = prompt("Please enter your name:");
    if (name) {
        showMarkPrompt(name);
    }
}

function showMarkPrompt(name) {
    var mark = prompt("Hi " + name + "! Please enter your mark:");
    if (mark !== null) {
        calculateResult(name, mark);
    }
}

function calculateResult(name, mark) {
    mark = parseFloat(mark);
    if (isNaN(mark)) {
        alert("Invalid mark entered. Please enter a valid number.");
        return;
    }

    var resultMessage = "Hello " + name + "! Your mark is: " + mark + "\n";

    if (mark < 0) {
        resultMessage += "Invalid mark entered. Please enter a valid number.";
    } else if (mark <= 49) {
        resultMessage += "Your grade is F. You have failed.";
    } else if (mark <= 60) {
        resultMessage += "Your grade is D.";
    } else if (mark <= 70) {
        resultMessage += "Your grade is C.";
    } else if (mark <= 80) {
        resultMessage += "Your grade is B.";
    } else if (mark <= 90) {
        resultMessage += "Your grade is A.";
    } else if (mark <= 100) {
        resultMessage += "Your grade is A+.";
    } else {
        resultMessage += "Invalid mark entered. Please enter a valid number.";
    }

    alert(resultMessage);
}

window.onload = function() {
    showNamePrompt();
};
