(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    let card = $("card"),
      openB = $("open"),
      closeB = $("close"),
      timer = null;
    console.log("wat", card);
    openB.addEventListener("click", function() {
      card.setAttribute("class", "open-half");
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() {
        card.setAttribute("class", "open-fully");
        timer = null;
      }, 1000);
    });
  
    closeB.addEventListener("click", function() {
      card.setAttribute("class", "close-half");
      if (timer) clearTimerout(timer);
      timer = setTimeout(function() {
        card.setAttribute("class", "");
        timer = null;
      }, 1000);
    });
  })();
  

// script boton id open
document.getElementById("open").onclick = function() {
  let cardFronts = document.getElementsByClassName("card-front");
  let cardInsides = document.getElementsByClassName("card-inside");
  
  if (cardFronts.length > 0) {
    cardFronts[0].style.left = "40%";
  }
  
  if (cardInsides.length > 0) {
    cardInsides[0].style.left = "40%";
  }
}

document.getElementById("close").onclick = function() {
  let cardFronts = document.getElementsByClassName("card-front");
  let cardInsides = document.getElementsByClassName("card-inside");
  
  if (cardFronts.length > 0) {
    cardFronts[0].style.left = "28%";
  }
  
  if (cardInsides.length > 0) {
    cardInsides[0].style.left = "28%";
  }
}