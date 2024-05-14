const numberSumbit=document.querySelector("#number-submit");
const contestantNumber=document.querySelector("#contestantNumber");
numberSumbit.addEventListener("click",()=>{
    stompClient.send('app/getScoreSheet',{},JSON.stringify({'name':s}));
});
var stompClient=null;
connect();
function connect(){
    var socket=new SockJS('stomp-endpoint');
    stompClient=Stomp.over(socket);
    stompClient.connect({},function(frame){
        console.log("Connected: "+frame);
        stompClient.subscribe("topic/greetings", function(greeting){
            console.log("RECIEVED FROM judge");
        });
    })
}