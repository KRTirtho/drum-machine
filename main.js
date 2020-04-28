//Selecing All Button Element
var snare = document.getElementById("snare");
var kick= document.getElementById("kick")
var hat= document.getElementById("hat")
var hiHat= document.getElementById("hiHat")
var crymbal= document.getElementById("crymbal")
var tom= document.getElementById("tom")
var percussion= document.getElementById("percussion")
var lowKick= document.getElementById("lowKick")
var pianoC= document.getElementById("fxBell")
var display = document.getElementById("display"); //Display Element

//Selecting All Audio Element
var Q= document.getElementById("Q");
var W= document.getElementById("W");
var E= document.getElementById("E");
var A= document.getElementById("A");
var S= document.getElementById("S");
var D= document.getElementById("D");
var Z= document.getElementById("Z");
var X= document.getElementById("X");
var C= document.getElementById("C");

//EvebtListener Function For Keypress
function selectKey(clipper, keyNum){
    document.addEventListener('keyup', playClip);
        function playClip(e){
        if (e.keyCode == keyNum) {
            if(clipper.paused){
                clipper.play()
                display.innerHTML = `<p class="displayText">${clipper.parentNode.id}</p>`;
                }
                else{
                    clipper.currentTime = 0;
                }
           }
        }
}

//EventListener Function For Buttons Clicks
function selectElem(elem, clipper){
    elem.addEventListener("click", (e)=>{
        if(clipper.paused){
        clipper.play()
        display.innerHTML = `<p class="displayText">${elem.id}</p>`;
        }
        else{
            clipper.currentTime = 0;
        }
    }
  )
}

//Calling All Function For All Buttons 
selectElem(snare, Q);
selectElem(kick, W)
selectElem(hat, E)
selectElem(hiHat, A)
selectElem(crymbal, S)
selectElem(tom, D)
selectElem(percussion, Z)
selectElem(lowKick, X)
selectElem(pianoC, C)

//Calling All function for Keyboard Keypress
selectKey(Q, 81)
selectKey(W, 87)
selectKey(E, 69)
selectKey(A, 65)
selectKey(S, 83)
selectKey(D, 68)
selectKey(Z, 90)
selectKey(X, 88)
selectKey(C,67)


