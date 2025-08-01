const celinput=document.getElementById('cel');
const farinput=document.getElementById('far');
const conbutton=document.getElementById('convert');

conbutton.addEventListener('click',()=>{
    const celval=celinput.value;
    const farval=farinput.value;
 
if(celval!=''){
    const faren=(parseFloat(celval)*9/5)+32;
    farinput.value=faren.toFixed(2);
}else if(farval!=''){
    const celci=(parseFloat(farval)-32)*5/9;
    celinput.value=celci.toFixed(2);
}
else{
    alert("Enter Temperature To convert");
}

})