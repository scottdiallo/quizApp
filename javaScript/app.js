'use strict'

$(document).ready(function () {


    // hide both quiz-section and result-section on page load
    $('.quiz-section').hide();
    $('.result-section').hide();

    //    //Global variables declarations

    //
    //    //populate questionnaires
    var questions = [
    //question_1
        {
            question: "What's the longest river in the U.S ?",
            choices: ['Mississipi River', 'Missouri River', 'Rio Grande', 'Yukon River'],
            answer: 0,
        },
    // question_2
        {
            question: 'Who among these famous people made the most impact in the world ?',
            choices: ['Steve Jobs', 'Nicholas Tesla', 'Scott Maserati', 'Elvis Paisley'],
            answer: 0,
    },
    //question_3
        {
            question: 'Which U.S President promise the Americans public that we will go to the moon?',
            choices: ['Franklin D Roosevelt', 'Abraham Lincoln', 'Jimmy Carter', 'John F Kennedy'],
            answer: 3,
    },
    //question_4
        {
            question: 'There was like a Uber like in the 1914, which was it?',
            choices: ['Jitney Bus', 'ouwBer', 'takeMethere', 'TaxiNow'],
            answer: 0,
        },
    //question_5
        {
            question: 'Is it true that about 100 acres of pizza are served in the U.S everyday?',
            choices: ['True', 'False'],
            answer: 0,
            detail: 'lorem ipsum'
        },
    //question_6
        {
            question: 'Which is the leading cause of death in the U.S',
            choices: ['Malaria', 'Cigarette', 'Car Accident', 'Heart Disease'],
            answer: 3,
            detail: 'lorem ipsum'
        },
    //question_7
        {
            question: 'Louisiana purchased from France in 18xx, which state was sold to U.S in 1867 from who?',
            choices: ['Alaska from Russia', 'New York from England', 'Maine from Canada', 'Texas from Mexico'],
            answer: 0,
        },
    //question_8
        {
            question: 'Which American company has more operating cash the the us treasury?',
            choices: ['Google', 'Tesla', 'Apple', 'Microsoft'],
            answer: 2,
    },

    //question_9
        {
            question: 'What is the most popular fruit in the US?',
            choices: ['Apple', 'Orange', 'Guava', 'Banana'],
            answer: 3,

        },

    //question_10
        {
            question: 'Who signed the declration of independence paper?',
            choices: ['John Hancock', 'James Madison', 'George Washington', 'Jimmy Carter'],
            answer: 0,
        },
];
    // variables
    var questionNum = 0;
    var questionTotal = questions.length;
    var correctAnswerTotal = 0;

    // hide quiz and results section on page load
    $('.quiz-section').hide();
    $('.result-section').hide();

    // On start Quiz
    $('#startQuiz').on('click', function () {
        $('.intro-section').hide();
        $('.result-section').hide();
        $('.quiz-section').show();
        displayQuestions();
    });


    $('#submit-answer').on('click', function () {
        var userAnswer = $('input[id="choices"]:checked').val();
        //        console.log(userAnswer);
        var correctAnswer = questions[questionNum].answer;

        //function to calculate total number of correct answer
        if (typeof userAnswer != 'undefined') {
            if (userAnswer == correctAnswer) {
                correctAnswerTotal++;
            }
            //function to check if last question is being attempted
            if ((questionNum + 1) == questionTotal) {
                $('.result-section').show();
                $('#show-score').text('Your Score is ' + correctAnswerTotal + ' out of ' + questionTotal + '.');
                $('#startQuiz').show();
                $('.quiz-section').hide();
                $('.intro-section').hide();
            } else {
                questionNum++;
                displayQuestions();
            }
        } else {
            alert('Please pick an option');
            return false;
        }
    });

    //function to display quiz questions
    function displayQuestions() {
        //        alert(questionNum);
        $('#questions-num').text('Question ' + (questionNum + 1) + ' of ' + questionTotal);
        $('#question').text(questions[questionNum].question);
        $('.quiz-options').empty();
        var optionsTotal = questions[questionNum].choices.length;
        for (var i = 0; i < optionsTotal; i++) {
            $('.quiz-options').append('<input type="radio" id="choices" class="choices" name="choices" value=' + i + '>' + questions[questionNum].choices[i] + '<br>');
        }
    }

    //function to navigate back from result screen to intro screen
    $('.result-section').on('click', '#startQuiz', function () {
        $('.intro-section').show();
        $('.quiz-section').hide();
        $('.result-section').hide();
        ('.detail-section').show();
        questionNum = 0;
        correctAnswerTotal = 0;
    });
});
//testing
