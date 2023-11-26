const activecellElement=document.getElementById("active-cell");
const textAlignElements =document.getElementsByClassName("text-align");
const boldButton =document.getElementById("bold");
const italicButton=document.getElementById("italic");
const underlineButton=document.getElementById("underlined");
let  activecell=null;
/*const intialOptionState={
    fontFamily:"",
    isBoldSelected:false,
    isItalicSelected:false,
    isUnderLineSelected:false,
    textAlign:'left',
    textcolor:"#000",
    backgroundcolor:"#fff",
    fontS
    */
let activeOptionState;
function toggleButtonsStyle(button,isSelected){
   if(isSelected){
        button.classList.add("active-option");
    }else{
        button.classList.remove("active-option");
    }
}
function highlightOptionButtonsOnFocus(){
    toggleButtonsStyle(boldButton,activeOptionState.isBoldSelected);
   /* if(activeOptionState.isBoldSelected ){
       boldButton.classList.add("active-option");
}else{
    boldButton.classList.remove("active-option");
}*/
toggleButtonsStyle(italicButton,activeOptionState.isItalicSelected);
/* if(activeOptionState.isItalicSelected ){
    italicButton.classList.add("active-button");
}else{
    italicButton.classList.remove("active-option");
}*/
toggleButtonsStyle(underlineButton,activeOptionState.isUnderLineSelected);
/*if(activeOptionState.isUnderLineSelected){
    underlineButton.classList.add("active-button");
}else{
    underlineButton.classList.remove("active-option");
}
*/
console.log(activeOptionState.textAlign);
highlightTextAlignButtons(activeOptionState.textAlign);
   
}
function onCellFocus(e){
if(activecell && activecell.id===e.target.id){
    return;
}
 activecell=e.target;
 activecellElement.innerText=e.target.id;
 const computedStyle=getComputedStyle(activecell);
  activeOptionState={
    fontFamily:computedStyle.fontFamily,
    isBoldSelected:computedStyle.fontWeight==="600",
    isItalicSelected:computedStyle.fontStyle==="italic",
    isUnderLineSelected:computedStyle.textDecoration=== "underlined",
    textAlign:computedStyle.textAlign,
    textcolor:computedStyle.color,
    backgroundcolor:computedStyle.backgroundColor,
    fontSize:computedStyle.fontSize,
};
highlightOptionButtonsOnFocus();
}
function onClickBoard(boldButton){
    boldButton.classList.toggle("active-option");
    if(activecell){
    if(activeOptionState.isBoldSelected===false){
       activecell.style.fontWeight="600";
    }else{
        activecell.style.fontWeight="400";
    }
    activeOptionState.isBoldSelected=!activeOptionState.isBoldSelected;
}
}
function onClickItalic(italicButton){
italicButton.classList.toggle("active-option");
if(activecell){
if(activeOptionState.isItalicSelected===false){
  activecell.style.fontStyle="normal";
 }else{
    activecell.style.fontStyle="italic";
 }
 activeOptionState.isItalicSelected=!activeOptionState.isItalicSelected;
}
}
function onClickUnderline(underlinebutton){
    underlinebutton.classList.toggle("active-option");
     if(activecell){
     if(activeOptionState.isUnderLineSelected){
        activecell.style.textDecoration="normal";
     }else{
        activecell.style.textDecoration="underline";
     }
     activeOptionState.isUnderLineSelected=!activeOptionState.isUnderLineSelected;
     }
    }
    function  highlightTextAlignButtons(textAlignValue){
       
        for(let i=0;i<textAlignElements.length;i++){
       if(textAlignElements[i].getAttribute("data-value")===textAlignValue){
           textAlignElements[i].classList.add("active-option");
       }else{
           textAlignElements[i].classList.remove("active-option");
       }
       }
       }
    
     function onClickTextAlign(textAlignButton){
     let Selectedvalue=textAlignButton.getAttribute("data-value");
     highlightTextAlignButtons (Selectedvalue);
     if(activecell){
        activecell.style.textAlign=Selectedvalue;
        activeOptionState.textAlign=Selectedvalue;
     }
    }
    function onChangeTextColor(textColorInput){
        let selectedcolor=textColorInput.value;
        if(activecell){
            activecell.style.color=selectedcolor;
            activeOptionState.color=selectedcolor;
        }
    }
    function onChangeBackgroundColor(textColorInput){
        let selectedcolor=textColorInput.value;
        if(activecell){
            activecell.style.backgroundcolor=selectedcolor;
            activeOptionState.backgroundcolor=selectedcolor;
        }
        
    }