let btns = document.querySelectorAll(".btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetgame = document.querySelector("#reset-btn")
let newbtn= document.querySelector("#new-btn");
let turno= true;
let count=0;

//ways to win
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

//code to enable and disable boxes
const disableboxes = () => {
    btns.forEach((btn) => {
        btn.disabled =true;
    })
}

const enablebox = () =>{
    btns.forEach((btn) => {
        btn.disabled=false;
        btn.innerText="";

    })
}

//main logic
btns.forEach((btn) => {
    btn.addEventListener("click",() => {
        if (turno){
            btn.innerText="o";
            turno=false;
            btn.style.color="black";
        }
        else{
            btn.innerText="x";
            turno=true;
            btn.style.color="grey";
        }
        btn.disabled = true;
        count++;
        let winner = checkWinner();
       
        if (count===9 && !winner){
            gamedraw();
        }
    });

});

//code for gamedraw function

const gamedraw = () =>{
    msg.innerText="This was a draw game! please play again...";
    msgcontainer.classList.remove("hide");
    disableboxes();
}


//checks the win patterns
const checkWinner = () =>{
    for (let pattern of winPatterns){
        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;

        if (pos1val!="" && pos2val!="" && pos3val!=""){
            if (pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    }
}

//showwinner functions returns the value

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
  };

  //code for reset button
   const reset = () =>{
    enablebox();
    count=0;
    turno=true;
    msgcontainer.classList.add("hide");

   }


resetgame.addEventListener("click",reset);
newbtn.addEventListener("click",reset);