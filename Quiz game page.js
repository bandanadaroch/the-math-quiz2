var ply1=localStorage.getItem("ply1");
var ply2=localStorage.getItem("ply2");


var player1_score=0;
var player2_score=0;

document.getElementById("player1_name").innerHTML=ply1+" : ";
document.getElementById("player2_name").innerHTML=ply2+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn-"+ply1;
document.getElementById("player_ans").innerHTML="Answer turn-"+ply2;

function Send(){

Number1=document.getElementById("number1").value;
Number2=document.getElementById("number2").value;
    Actual_answer=parseInt(Number1)*parseInt(Number2);


    Question_number="<h4>"+Number1+" X "+Number2+"</h4>";


var Input_box="<br> Ans: <input type='text' id='input_check_box'>";
var Check_button="<br><br> <button class='btn btn-info' onclick='check()'> Check</button>";
row=Question_number+Input_box+Check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}
Question_turn="player_1";
Answer_turn="player_2";

function check(){
var Entered=document.getElementById("input_check_box").value;

if (Entered==Actual_answer){
    if(Answer_turn=="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else {
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }

    }

}

if (Question_turn=="ply_1"){
    Question_turn=="ply_2";
    document.getElementById("player_question").innerHTML="Question_turn="+ply_2
}
else {
    Answer_turn=="ply_2";
    document.getElementById("player_answer").innerHTML="Answer_turn="+ply_2
}
document.getElementById("output").innerHTML=''
}
