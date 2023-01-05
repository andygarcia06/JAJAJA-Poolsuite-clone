const colorArray = new Array('rgb(1, 235, 238)', 'rgb(255, 224, 0)', 'rgb(232, 78, 27)', 'rgb(235, 170, 201)', 'rgb(183, 222, 247)', 'rgb(230, 51, 41)');
const colorTxtArray = new Array('rgb(213, 38, 68)','rgb(0, 139, 70)','rgb(255, 224, 0)','rgb(183, 222, 247)','rgb(204, 33, 28)','rgb(235, 170, 201)');
const mainBackground = document.querySelector('.JAJAJA-main');
const changingColorTxt = document.querySelector('.changing-color-txt')

let index = 0;
let index1 = 0;
 
function changecolor() {
   mainBackground.style.backgroundColor =  colorArray[index];
   changingColorTxt.style.color = colorTxtArray[index1];
    index = (index+1)%colorArray.length;
    index1 = (index1+1)%colorTxtArray.length
    setTimeout(changecolor, 3000);
}

changecolor()

