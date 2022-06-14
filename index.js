//Declare any variable we use var
//Variables are not strictly tight

/*var fullName="Amrit Kharbanda";
console.log(fullName);
//typeof
console.log(typeof fullName);
var age=25;
console.log(age);
console.log(typeof age);
var xyz=25.34
console.log(typeof xyz);
var isAdmin=true;
console.log(isAdmin);
console.log(typeof isAdmin);
isAdmin=xyz;
console.log(typeof isAdmin);
//Operators
var x=5;
var y=x;
console.log(x+y);
// ** power operator;
console.log(y**x);
var x="abc";
var y="def";
console.log(x+y);
var x=2;
var y="abc";
console.log(x+y);
// == compare value or type
// === compare value and type
// operator precedence 
// */
// var hour=new Date().getHours();

// if(hour>=19){
// console.log("Good Evening");
// }
// else{
//     console.log("Good Morning");
// }
// var month=new Date().getMonth();
// console.log(month+1);
// var x="abc";
// if(x){
//     console.log("Truthy");
// }
// var getBackgroundColor=function(){
// var letters='0123456789ABCDEF';
// var color='#';
// var getRandomColor=function(){
//     for(var i=0;i<6;i++){
//         color+=letters[Math.floor(Math.random()*16)];
//     }
//     return color;
// }
// return getRandomColor;
// }
// document.getElementById("grid").style.backgroundColor=getBackgroundColor()();

//Arrow Functions

// var incrementByOne =val=> val+1;
// console.log(incrementByOne(5));
var increaseTime=time=>time+1;
var timer;
var timer_on=0;
var increaseTimer=()=>{
    var currentTime=document.getElementById("timer-time").innerHTML;
    console.log(currentTime);
    var minutes=parseInt(currentTime.split(':')[0]);
    var seconds=parseInt(currentTime.split(':')[1]);
    console.log(minutes,seconds);
    currentTime=minutes*60+seconds;
    currentTime=increaseTime(currentTime);
    minutes=Math.floor(currentTime/60);
    seconds=currentTime%60;
    currentTime=minutes.toString().padStart(2,'0').concat(':').concat(seconds.toString().padStart(2,'0'));
    document.getElementById("timer-time").innerHTML=currentTime;
    timer=setTimeout(increaseTimer,1000);
}
var startTimer=()=>{
    if(!timer_on){
        increaseTimer();
        timer_on=1;
    }

}
var pauseTimer=()=>{
    clearTimeout(timer);
    timer_on=0;
}
var resetTimer=()=>{
    if(timer_on){
        clearTimeout(timer);
        timer_on=0;
        document.getElementById("timer-time").innerHTML="00:00";
    }
    else{
        document.getElementById("timer-time").innerHTML="00:00";
    }
}
document.getElementById("timer-button").addEventListener('click',startTimer);
document.getElementById("pause-timer").addEventListener('click',pauseTimer);
document.getElementById("reset-timer").addEventListener('click',resetTimer);