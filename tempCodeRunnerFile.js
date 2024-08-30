const disableBoxes = () => {
     for(let box of boxes){
        box.disabled=true;
     }
}

const enableBoxes = () => {
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";
    }
}

const showWinner=(winner)=> {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
  for(let pattern of winPatterns){
    
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != "")
    {
        if(pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
        }
    }
  }
};