

function play(){
  main = document.getElementById("menu");
  main.classList.toggle("active");

  game = document.getElementById("game");
  game.classList.toggle("active");

  mainfoot = document.getElementById("menu-foot");
  mainfoot.classList.toggle("active");

  gamefoot = document.getElementById("game-foot");
  gamefoot.classList.toggle("active");
  
}
