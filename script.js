$(document).ready(function() {
    var yourScore = 0;
    var compScore = 0;

    var choices = ["Rock", "Paper", "Scissor"]

    $('#your-score').append(yourScore);
    $('#comp-score').append(compScore);

    function logic(o1, o2) {
        if (o1 === o2) {
            return "tie";
        }
        if ((o1 === "Rock") && (o2 === "Scissor")) {
            return "o1";
        }
        if ((o1 === "Rock") && (o2 === "Paper")) {
            return "o2";
        }
        if ((o1 === "Paper") && (o2 === "Scissor")) {
            return "o2";
        }
    }

    $("#rock-btn").on('click', () => {
        $("#your-choice").text('Rock');
        $("#comp-choice").text(compTurn());

        var winner = logic($("#your-choice").text(), $("#comp-choice").text());
        setScores(winner);
    })

    $("#paper-btn").on('click', () => {
        $("#your-choice").text('Paper');
        $("#comp-choice").text(compTurn());

        var winner = logic($("#your-choice").text(), $("#comp-choice").text());
        setScores(winner);
    })

    $("#scs-btn").on('click', () => {
        $("#your-choice").text('Scissor');
        $("#comp-choice").text(compTurn());

        var winner = logic($("#your-choice").text(), $("#comp-choice").text());
        setScores(winner);
    })

    $("#res-btn").on('click', () => {
        window.location.reload();
    })

    function compTurn() {
        // get random index value
        const randomIndex = Math.floor(Math.random() * choices.length);

        // get random item
        const choice = choices[randomIndex];

        return choice;

    }

    function setScores(winner) {
        if (winner === 'tie') {
            $('#your-score').text(yourScore);
            $('#comp-score').text(compScore);
        } else if (winner === 'o1') {
            yourScore += 1;
            $('#your-score').text(yourScore);
            $('#comp-score').text(compScore);
        } else if (winner === 'o2') {
            compScore += 1;
            $('#your-score').text(yourScore);
            $('#comp-score').text(compScore);
        }
    }
});
