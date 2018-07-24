let fetch = require('node-fetch');
/* ***** variables for quizGet function: ***** */
//amount = integer between 5-50; 
//category = integer between 0-??; 
//difficulty = "easy", "medium", or "hard"; 
//answerType = "boolean" or "multiple"
function quizGet(amount, category, difficulty, answerType) {
    fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${answerType}`, {mode: 'no-cors'}).then(function(res) {
        return res.json();
    });
}
//api site: https://opentdb.com/api_config.php

//quizGet("10", "21", "easy", "multiple");
export default quizGet;