var player1 = "default"
var player2 = "default"

function Gotonext(){
     player1 = document.getElementById("play1").value;
     player2 = document.getElementById("play2").value;

    localStorage.setItem("play1", player1);
    localStorage.setItem("play2", player2);

    window.location.replace("game_page.html");
}