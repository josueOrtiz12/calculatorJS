const screen = document.getElementById("valor_numero");
const buttons = document.querySelectorAll(".btn");

// console.log(buttons);


for(button of buttons){
    button.addEventListener("click" , function(){
        const buttonSelection = this.textContent;
        // console.log(valorContent);
        if(screen.value == 0){
            screen.value = buttonSelection
        }else{
            screen.value += buttonSelection;
        }
       
    })
}

