const studentMap=new Map();
const addStudent=document.querySelector("#addStudent");
const studentTabs=document.querySelector("#student-tabs");
const studentNumberInput=document.querySelector("#studentNumber");
const judgingForm=document.querySelector("#judging-form");
const dataMap=new Map();
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
            ToeTouchSelect.setAttribute("name","toe-touch"); ToeTouchSelect.setAttribute("class","data");
            for(let i=1;i<=5;i++){
                let option=document.createElement("option");
                option.setAttribute("value",""+i);
                option.innerText=i;
                ToeTouchSelect.appendChild(option);
            }
            form.appendChild(ToeTouchLabel); form.appendChild(ToeTouchSelect);
            const secondJumpLabel=document.createElement("label");
            secondJumpLabel.setAttribute("for","2nd-jump"); secondJumpLabel.innerText="2nd Jump:";
            form.appendChild(secondJumpLabel);const secondJumpSelect=document.createElement("select");
            secondJumpSelect.setAttribute('name',"2nd-jump");secondJumpSelect.setAttribute("class","data");
            for(let i=1;i<=5;i++){
                let option=document.createElement("option");option.setAttribute("value",""+i);
                option.innerText=i; secondJumpSelect.appendChild(option);
            }
            form.appendChild(secondJumpSelect);
            const overallGameDayAppealJumpLabel=document.createElement("label");
            overallGameDayAppealJumpLabel.setAttribute("for","jumpAppeal"); overallGameDayAppealJumpLabel.innerText="Overrall Game Day Jump Appeal: ";
            form.appendChild(overallGameDayAppealJumpLabel);const jumpAppealSelect=document.createElement("select");
            jumpAppealSelect.setAttribute("name","jumpAppeal");
            for(let i=1;i<=10;i++){
                let option=document.createElement("option");option.setAttribute("value",""+i);
                option.innerText=i; jumpAppealSelect.appendChild(option);
            }
            jumpAppealSelect.setAttribute("class","data");form.appendChild(jumpAppealSelect);
            const BandChantLegends=document.createElement("legend");
            BandChantLegends.innerText="Band Chant:";
            form.appendChild(BandChantLegends);
            const bandMotionLabel=document.createElement("label");
            bandMotionLabel.setAttribute("for","bandMotion");bandMotionLabel.innerText="Motions (Technique & Sharpness)";
            form.appendChild(bandMotionLabel);const bandAppealSelect=document.createElement("select");
            bandAppealSelect.setAttribute("name","bandMotion");
            for(let i=1;i<=10;i++){
                let option=document.createElement("option"); option.setAttribute("value",""+i);
                option.innerText=i;bandAppealSelect.appendChild(option);
            } bandAppealSelect.setAttribute("class","data");
            form.appendChild(bandAppealSelect);
            const bandCadenceLabel=document.createElement("label");
            bandCadenceLabel.innerText="Knowledge of Cadence";bandCadenceLabel.setAttribute("for","band-cadence");
            form.appendChild(bandCadenceLabel); const bandCadenceSelect=document.createElement("select");bandCadenceSelect.setAttribute("name","band-cadence");
            bandCadenceSelect.setAttribute("name","band-cadence"); bandCadenceSelect.setAttribute("name","data");
            addOptions(5,bandCadenceSelect); form.appendChild(bandCadenceSelect);
            const bandEnergyLabel=document.createElement("label");
            bandEnergyLabel.innerText="Showmanship/Energy";bandEnergyLabel.setAttribute("for","band-energy");
            form.appendChild(bandEnergyLabel);const bandEnergySelect=document.createElement("select");
            bandEnergySelect.setAttribute("name","band-energy");bandEnergySelect.setAttribute("class","data");
            addOptions(10,bandEnergySelect);form.appendChild(bandEnergySelect);
            const rhythm=document.createElement("label"); rhythm.innerText="Rhythm";
            rhythm.setAttribute("for","rhythm"); form.appendChild(rhythm);
            const rhythmSelect=document.createElement("select"); rhythmSelect.setAttribute("name","rhythm");
            rhythmSelect.setAttribute("class","data");
            addOptions(10,rhythmSelect);form.appendChild(rhythmSelect);
            const bandClarity=document.createElement("label");bandClarity.innerText="Voice Projection & Clarity:";
            bandClarity.setAttribute("for","band-clarity");form.appendChild(bandClarity);
            const bandClaritySelect=document.createElement("select");bandClaritySelect.setAttribute("name","band-clarity");
            bandClaritySelect.setAttribute('class','data');
            addOptions(5,bandClaritySelect);form.appendChild(bandClaritySelect);
            const bandAppeal=document.createElement("label");bandAppeal.innerText="Overall Game Day Appeal:";
            bandAppeal.setAttribute("for","band-appeal");form.appendChild(bandAppeal);
            const bandASelect=document.createElement("select");bandASelect.setAttribute("name","band-appeal");
            bandASelect.setAttribute('class','data');
            addOptions(10,bandASelect);form.appendChild(bandASelect);
            const sidelineLegends=document.createElement("legend"); 
            sidelineLegends.innerText="Situational Sideline"; form.appendChild(sidelineLegends);
            const situationalMotion=document.createElement("label");situationalMotion.innerText="Motions (Technique & Sharpness)";
            situationalMotion.setAttribute("for","situational-motion");form.appendChild(situationalMotion);
            const situationalMotionSelect=document.createElement("select");situationalMotionSelect.setAttribute("name","situational-motion");
            situationalMotionSelect.setAttribute('class','name');
            addOptions(5,situationalMotionSelect);form.appendChild(situationalMotionSelect);
            const sideChant=document.createElement("label");sideChant.innerText="Knowledge of Chant";
            sideChant.setAttribute("for","side-chant");form.appendChild(sideChant);
            const sideChantSelect=document.createElement("select"); sideChantSelect.setAttribute("name","side-chant");
            sideChantSelect.setAttribute('class','data');
            addOptions(5,sideChantSelect);form.appendChild(sideChantSelect);
            const sideEnergy=document.createElement("label");sideEnergy.innerText="Showmanship/Energy";
            sideEnergy.setAttribute("for","side-energy");form.appendChild(sideEnergy);
            const sideEnergySelect=document.createElement("select");sideEnergySelect.setAttribute("name","side-energy");
            sideEnergySelect.setAttribute("class","data");
            addOptions(5,sideEnergySelect);form.appendChild(sideEnergySelect);
            const sideClarity=document.createElement("label");sideClarity.innerText="Voice Projection & Clarity";
            sideClarity.setAttribute("for","side-clarity");form.appendChild(sideClarity);
            const sideClaritySelect=document.createElement("select");sideClaritySelect.setAttribute("name","side-clarity");
            sideClaritySelect.setAttribute("class","data");
            addOptions(5,sideClaritySelect);form.appendChild(sideClaritySelect);
            const sideAppeal=document.createElement("label");sideAppeal.innerText="Overall Game Day Appeal";
            sideAppeal.setAttribute("for","side-appeal");form.appendChild(sideAppeal);
            const sideAppealSelect=document.createElement("select");sideAppealSelect.setAttribute("name","side-appeal");
            sideAppealSelect.setAttribute('class','data');
            addOptions(10,sideAppealSelect);form.appendChild(sideAppealSelect);
            const cheerLegends=document.createElement("legend");cheerLegends.innerText="Cheer:";
            form.appendChild(cheerLegends);
            const cheerMotion=document.createElement("label");cheerMotion.innerText="Motions (Technique & Sharpness)";
            cheerMotion.setAttribute("for","cheer-motion");form.appendChild(cheerMotion);
            const cheerMotionSelect=document.createElement("select");cheerMotionSelect.setAttribute("name","cheer-motion");
            cheerMotionSelect.setAttribute('class','data');
            addOptions(10,cheerMotionSelect);form.appendChild(cheerMotionSelect);
            const cheerKnowledge=document.createElement("label");cheerKnowledge.innerText="Knowledge of Cheer";
            cheerKnowledge.setAttribute("for","cheer-knowledge");form.appendChild(cheerKnowledge);
            const cheerKnowledgeSelect=document.createElement("select");cheerKnowledgeSelect.setAttribute("name","cheer-knowledge");
            cheerKnowledgeSelect.setAttribute('class','data');
            addOptions(5,cheerKnowledgeSelect);form.appendChild(cheerKnowledgeSelect);
            const cheerEnergy=document.createElement("label");cheerEnergy.innerText="Showmanship/Energy";
            cheerEnergy.setAttribute("for","cheer-energy");form.appendChild(cheerEnergy);
            const cheerEnergySelect=document.createElement("select");cheerEnergySelect.setAttribute("name","cheer-energy");
            cheerEnergySelect.setAttribute('class','data');
            addOptions(10,cheerEnergySelect);form.appendChild(cheerEnergySelect);
            const cheerClarity=document.createElement("label");cheerClarity.innerText="Voice Projection & Clarity";
            cheerClarity.setAttribute("for","cheer-clarity");form.appendChild(cheerClarity);
            const cheerClaritySelect=document.createElement("select");cheerClaritySelect.setAttribute("name","cheer-clarity");
            cheerClaritySelect.setAttribute('class','data');
            addOptions(5,cheerClaritySelect);form.append(cheerClaritySelect);
            const cheerExecution=document.createElement("label");cheerExecution.innerText="Skill Execution Jump (1-3) BHS(1-10)";
            cheerExecution.setAttribute("for","cheer-execution");form.appendChild(cheerExecution);
            const cheerExecutionSelect=document.createElement("select");cheerExecutionSelect.setAttribute("name","cheer-execution");
            cheerExecutionSelect.setAttribute('class','data');
            addOptions(10,cheerExecutionSelect);form.append(cheerExecutionSelect);
            const cheerAppeal=document.createElement("label");cheerAppeal.innerText="Overall Game Day Appeal";
            cheerAppeal.setAttribute("for","cheer-appeal");form.appendChild(cheerAppeal);
            const cheerAppealSelect=document.createElement("select");cheerAppealSelect.setAttribute("name","cheer-aappeal");
            cheerAppealSelect.setAttribute('class','data');
            addOptions(10,cheerAppealSelect);form.appendChild(cheerAppealSelect);
            const backLegend=document.createElement("legend");
            backLegend.innerText="Back HandSpring:";form.appendChild(backLegend);
            const backLabel=document.createElement("label");backLabel.innerText="Back Handspring";
            backLabel.setAttribute("for","back-handspring");form.appendChild(backLabel);
            const backCheck=document.createElement("input");
            backCheck.setAttribute("type","checkbox");form.appendChild(backCheck);
            const submit=document.createElement("button");
            submit.innerText="submit";
            submit.setAttribute("type","button");
            submit.addEventListener("click",()=>{
                const data=form.getElementsByClassName("data");
                let s="";
                for(let i=0;i<data.length;i++){
                    s+=data[i].getAttribute("name")+" "+data[i].value+" ";
                }
                studentTabs.removeChild(newStudent);
                switchForm(0);
                // send(s);
            });
             form.appendChild(submit);
            studentMap.set(studentNumber, form);
            switchForm(studentNumber);
            newStudent.addEventListener("click",()=>{
                switchForm(newStudent.innerText*1);
            });
        }
    }
);
function getValue(collection){
    let s="";
    console.log(collection);
    for(let i=0;i<collection.length;i++){
        console.log(collection[i]);
        s+=collection[i];
    }
    return s;
}
function switchForm(num){
    const oldForm=judgingForm.children;
    for(let i=0;i<oldForm.length;i++){
        judgingForm.removeChild(oldForm[i]);
    }
    judgingForm.appendChild(studentMap.get(num));
}
function addOptions(optionNumbers,parentNode){
    for(let i=1;i<=optionNumbers;i++){
        let option=document.createElement("option"); option.setAttribute("value",""+i);
        option.innerText=i;parentNode.appendChild(option);       
    }
}