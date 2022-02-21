const correctAnswers = ['C', 'A', 'B', 'C', 'A'];
const form = document.querySelector('form');
const displayScore = document.querySelector(".display-score");
const hiddenElement = document.querySelector('.score');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let score = 0;
    const answersIn = [ form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    answersIn.forEach( (answer, index)=>{
        if( correctAnswers[ index ] === answer){
            score += 20;
        }
    });
    
    hiddenElement.classList.remove('score');
    
    let outPut = 0;
    const interval = setInterval(()=>{
        displayScore.textContent = `Your score is ${outPut}% right`;
        if( outPut === score){
            clearInterval( interval )
        }else{
            outPut++
        }
    }, 10)
})