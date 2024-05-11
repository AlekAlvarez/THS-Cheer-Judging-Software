class student{
    constructor(number){
        this.contestantNumber=number;
        //variables for jumps
        this.toeTouch=0;
        this.secondJump=0;
        this.overallGameDayAppealJump=0;
        //variables for band chant
        this.bandChantMotions=0;
        this.knowledgeOfCadence=0;
        this.bandChantShowmanship=0;
        this.rythm=0;
        this.chantProjectionAndClarity=0;
        this.chantOverrallAppeal=0;
        //variables for situational sideline
        this.sidelineMotions=0;
        this.knowledgeOfChant=0;
        this.situationalShowmanship=0;
        this.sidelineVoice=0;
        this.sideLineOverrallAppeal=0;
        //variables for cheer
        this.cheerMotions=0;
        this.knowledgeOfCheer=0;
        this.cheerShowmanship=0;
        this.cheerVoice=0;
        this.skillJump=0;
        this.cheerOverrallAppeal=0;
        //Back Handspring
        this.backHandSpring=0;
    }
}
const studentMap=new Map();
const addStudent=document.querySelector("#addStudent");
const studentTabs=document.querySelector("#student-tabs");
const studentNumberInput=document.querySelector("#studentNumber");
const judgingForm=document.querySelector("#judging-form");
addStudent.addEventListener("click",()=>{
        if(Number.isInteger(studentNumberInput.value*1)){
            const newStudent=document.createElement("div");
            newStudent.className="student-tab";
            studentNumber=studentNumberInput.value*1;
            newStudent.innerText=studentNumberInput.value;
            studentTabs.appendChild(newStudent);
            const form=document.createElement("form");
            const mainLegend=document.createElement("legend");
            mainLegend.innerText="Contestant Number: "+studentNumber;
            form.appendChild(mainLegend);
            const JumpsLegends=document.createElement("legend");
            JumpsLegends.innerText="Jumps:";
            form.appendChild(JumpsLegends);
            const ToeTouchLabel=document.createElement("label");
            ToeTouchLabel.setAttribute("for","toe-touch");
            ToeTouchLabel.innerText="ToeTouch:";
            const ToeTouchSelect=document.createElement("select");
            ToeTouchSelect.setAttribute("name","toe-touch");
            for(let i=1;i<=5;i++){
                let option=document.createElement("option");
                option.setAttribute("value",""+i);
                option.innerText=i;
                ToeTouchSelect.appendChild(option);
            }
            form.appendChild(ToeTouchLabel); form.appendChild(ToeTouchSelect);
            const secondJumpLabel=document.createElement("label");
            secondJumpLabel.setAttribute("for","2nd-touch"); secondJumpLabel.innerText="2nd Jump:";
            form.appendChild(secondJumpLabel);const secondJumpSelect=document.createElement("select");
            for(let i=1;i<=5;i++){
                let option=document.createElement("option");option.setAttribute("value",""+i);
                option.innerText=i; secondJumpSelect.appendChild(option);
            }
            form.appendChild(secondJumpSelect);
            const overallGameDayAppealJumpLabel=document.createElement("label");
            overallGameDayAppealJumpLabel.setAttribute("for","jumpAppeal"); overallGameDayAppealJumpLabel.innerText="Overrall Game Day Jump Appeal: ";
            form.appendChild(overallGameDayAppealJumpLabel);const jumpAppealSelect=document.createElement("select");
            for(let i=1;i<=10;i++){
                let option=document.createElement("option");option.setAttribute("value",""+i);
                option.innerText=i; jumpAppealSelect.appendChild(option);
            }
            form.appendChild(jumpAppealSelect);
            studentMap.set(studentNumber, form);
            switchForm(studentNumber);
            newStudent.addEventListener("click",()=>{
                switchForm(newStudent.innerText*1);
            });
        }
    }
);
function switchForm(num){
    const oldForm=judgingForm.children;
    for(let i=0;i<oldForm.length;i++){
        judgingForm.removeChild(oldForm[i]);
    }
    judgingForm.appendChild(studentMap.get(num));
}