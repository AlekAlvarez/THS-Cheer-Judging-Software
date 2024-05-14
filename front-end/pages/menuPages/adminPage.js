let approved=true;
const adminSubmitButton=document.querySelector("#admin-password-button");
const password=document.querySelector("#admin-password");
const coachSubmit=document.querySelector("#coach-score-submit");
const contestantNumber=document.querySelector("#contestant-number");
const contestantScore=doucment.querySelector("#constestant-score");
var stompClient=null;
connect();
function connect(){
    var socket=new SockJS('stomp-endpoint');
    stompClient=Stomp.over(client);
    stompClient.connect({},function(frame){
        console.log("Connected: "+frame);
        stompClient.suscribe('topic/greetings');
        console.log('RECIEVED FROM judge');
    });
}
adminSubmitButton.addEventListener("click",()=>{
    let s=password.value;
    if(approved(s)){
        approved=true;
    }
});
coachSubmit.addEventListener("click",()=>{
    let s=""+contestantNumber.value+contestantScore;
    send(s);
});
function send(s){
    stompClient.send('app/coachScore',{},JSON.stringify({'name':s}));
}
function approved(s){
    return true;
}
