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

for (let btn of buttons) {
  btn.addEventListener("click", function() {
    // find the parent card of this button
    let card = btn.closest(".card");

    // get the title & description text
    let name  = card.querySelector(".title").innerText;
    let number = card.querySelector(".desc").innerText;

    coinCounter.innerText = Number(coinCounter.innerText) - 20;

    let newCard=document.createElement('div')

    newCard.innerHTML=`<div class="bg-gray-100 shadow-sm w-auto mt-4">
                          <div>
                           <p>${name}</p>
                           <p>${number}</p>
                          </div>
                        </div>`  

    history.append(newCard) 

    if(Number(coinCounter.innerText)<20){
      alert(`insufficient coin`)
    }

    // show alert message
    else{
      alert(`You clicked on: ${name}\n${number}`);
    } 
  });
}

//call history
