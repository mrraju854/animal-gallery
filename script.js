let input = document.querySelector(".input");
let cards = document.querySelectorAll(".card");

input.addEventListener("input", function(dets){
    let inpVal = dets.target.value.toLowerCase().trim();
    cards.forEach(function(card){
        let name = card.querySelector(".name").textContent.toLowerCase();

        if(name.startsWith(inpVal)){
            card.style.display = "block";
        } else{
            card.style.display = "none";
        }
    })
})