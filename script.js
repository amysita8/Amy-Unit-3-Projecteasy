
let title = document.querySelector(".title");
let storyopening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let storypart2yes = document.querySelector(".option-one-screen");
let storypart2no = document.querySelector(".option-two-screen");
let storypart3yesend = document.querySelector(".option-one-end");
let storypart3noend = document.querySelector(".option-two-end");
let ParachuteButton = document.querySelector(".option-one");
let FaceItButton = document.querySelector(".option-two");
let Option1Hint = document.querySelector(".hintOp1");
let Option2Hint = document.querySelector(".hintOp2");
let ChangeText = document.querySelector(".change");
let answerDiv = document.querySelector(".title");
let body = document.querySelector("body");
let WrongParachute = document.querySelector(".WrongWay");




// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
ParachuteButton.onclick = function() {
    storypart2yes.style.display = "block";
    storypart2no.style.display = "none";
storypart3noend.style.display = "none";
    storypart3yesend.style.display = "none";
    
  
};

Option1Hint.onclick = function() {
    storypart3yesend.style.display = "block";
   
    
    

};


FaceItButton.onclick = function() {
    storypart2no.style.display = "block";
    storypart2yes.style.display = "none";
    storypart3noend.style.display = "none";
    storypart3yesend.style.display = "none";
    
};


Option2Hint.onclick = function() {
    storypart3noend.style.display = "block";
   
};

title.onclick=function(){
    answerDiv.innerHTML="Not everything is as simple as it seems..";
};

WrongParachute.onclick=function(){
    WrongParachute.innerHTML="k";
};




setTimeout(() => {
    ChangeText.innerHTML = "Unfortunately we have a problem... on the plane there is a person with a gun, what do we do?";
}, 5000);







//