//heart counter
let hearts = document.querySelectorAll(".heart");
let heartcounter = document.getElementById("heart-counter");

for (let heart of hearts) {
  heart.addEventListener("click", function() {
    heartcounter.innerText = Number(heartcounter.innerText) + 1;
  });
}


//alert system
let buttons = document.getElementsByClassName("call-button");
let coinCounter = document.getElementById("coin-counter");
let history= document.getElementById("history")
let now = new Date();
let time = now.toLocaleTimeString();
//console.log(time); 
// Example: "5:22:05 PM"


for (let btn of buttons) {
  btn.addEventListener("click", function() {
    // find the parent card of this button
    let card = btn.closest(".card");

    // get the title & description text
    let name  = card.querySelector(".title").innerText;
    let number = card.querySelector(".desc").innerText;

    

    let newCard=document.createElement('div')

    newCard.innerHTML=`<div class="bg-gray-100 shadow-sm w-auto mt-4 flex items-center justify-between">
                          <div class="flex flex-col justify-between">
                           <p class="font-bold">${name}</p>
                           <p>${number}</p>
                          </div>
                          <div>
                            <p class="whitespace-nowrap">${time}</p>
                          </div>
                        </div>`  

    history.append(newCard) 

    if(Number(coinCounter.innerText)<20){
      alert(`insufficient coin`)
    }

    // show alert message
    else{
      coinCounter.innerText = Number(coinCounter.innerText) - 20;
      alert(`📞calling ${name}\n${number}`);
    } 
  });
}




// clear button
let clearBtn = document.getElementById("clear-button");

clearBtn.addEventListener("click", function () {
  history.innerHTML = ""; // clears everything inside history
});


//copy counter and clipoard
let copy=document.querySelectorAll(".copy-button")
let copyCounter=document.getElementById("copy-counter")

for(let copyBtn of copy){
  copyBtn.addEventListener("click",function(){
    let cpy=copyBtn.closest(".card")
    let cpyitem = cpy.querySelector(".desc").innerText;
     navigator.clipboard.writeText(cpyitem)
    alert('Text copied to clipboard: ' + cpyitem);
    copyCounter.innerText = Number(copyCounter.innerText) + 1;            

  });
}

