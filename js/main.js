const screen = document.getElementById("valor_numero");
const buttons = document.querySelectorAll(".btn");

// console.log(buttons);

for(button of buttons){
    button.addEventListener("click" , function(){
        const buttonSelection = this.textContent;
        console.log(buttonSelection);

        if(this.id === "keyC"){
            screen.value = 0;
            return;
        };

        if(this.id === "delete"){
            if(screen.value.length === 1 || screen.value === "!Error" ){
                screen.value = "0"
            }else{
                const actualValue = screen.value;
                const newValue = actualValue.slice(0 , -1);
                screen.value = newValue;
            }
           return
        };
        if(this.id === "equal"){
            try {
                screen.value = eval(screen.value); 
            } catch {
                    screen.value = "!Error";
            }
       
            return;
        }

        if(screen.value === "0" || screen.value === "!Error"){
            screen.value = buttonSelection
        }else{
            screen.value += buttonSelection;
        } ;   
    });
}

