function Question(questions,answers,correct){
    this.questions=questions;
    this.answers=answers;
    this.correct=correct;
}

Question.prototype.questiondisplay= function()
{
    console.log(this.questions);
    for(var i=0; i<this.answers.length; i++){
        console.log(i+' '+this.answers[i]);
        
    }
}

Question.prototype.checkanswer= function(ans, callback){
    var sc;
    if(ans===this.correct){
       console.log('the anwser is right');
       sc=callback(true);
       } else{
           console.log('the answer is wrong');
           sc= callback(false);
       }
       this.displayScore(sc);
}
 Question.prototype.displayScore=function(score){
  console.log('your current score is : '+score);
  console.log('-------------------------------------------------');
 }
var q1=new Question("what is the name of teacher? ", ['john','Michael','Jonas'],2);
var q2=new Question("is javascript cool? ", ['yes','No'],0);
var q3=new Question("what is your opinion in js ", ['boring','fun','bad','good'],1);


 var arrayquestions=[q1,q2,q3];

function score (){
   var sc=0;
   return function(correct){
       if(correct){
           sc++;
   } return sc;
}
var keepScore= score();


function nextQuestion(){
var n = Math.floor(Math.random() * arrayquestions.length) ;
arrayquestions[n].questiondisplay();

var p= prompt('please select the right answer !');

    
    if(p !== "exit"){
           
          arrayquestions[n].checkanswer(parseInt(p), keepScore);  
          nextQuestion();
                   }
}

nextQuestion(); }
