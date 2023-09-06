var player_name_one = "";
var player_name_two = "";
answer_turn = "player_name11"
question_turn = "player_name22"
player_score_1 = 0;
player_score_2 = 0;
function gapn(){
    player_name_one = localStorage.getItem("play1");
    player_name_two = localStorage.getItem("play2");

    document.getElementById("player_name1").innerHTML = player_name_one;
    document.getElementById("player_name2").innerHTML = player_name_two;

    document.getElementById("player_name11").innerHTML = player_name_one;
    document.getElementById("player_name22").innerHTML = player_name_two;
}

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase is " + word)

    charAt1 = word.charAt(1);
    console.log(charAt1)

    LD2 = Math.floor(word.length/2)
    charAt2 = word.charAt(LD2)
    console.log(charAt2)

    LM1 = word.length - 1
    charAt3 = word.charAt(LM1)
    console.log(charAt3)

    R1 = word.replace(charAt1, "_")
    R2 = R1.replace(charAt2,"_")
    R3 = R2.replace(charAt3, "_")
    console.log(R3)
    
    QW = "<h4 id='word_display'> Q: " + R3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'";
    check_button = "<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
    row = QW + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check(){
   get_word1 = document.getElementById("input_check_box").value;
   answer = get_word1.toLowerCase();
   console.log("answer in lower case is- " + answer);
   if(answer == word){

    if(answer_turn == "player_name11"){
      player_score_1 = player_score_1 + 1;
      document.getElementById("Score").innerHTML = player_score_1;
    }

    else{
       player_score_2 = player_score_2 + 1;
       document.getElementById("Score1").innerHTML = player_score_2;
    }

    if(question_turn == "player_name22"){
        question_turn = "player_name11";
        document.getElementById("player_question").innerHTML = "question turn - " + player_name2;
      }

      else{
        question_turn = "player_name22";
        document.getElementById("player_question").innerHTML = "question turn - " + player_name1;
      }
   }
}