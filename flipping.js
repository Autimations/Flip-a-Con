
let secretMode = null; 
let secretActivated = false;

function setOutcome(outcome){

    secretMode = outcome;
    secretActivated = true;
    flipCoin();
}


function flipCoin(){
    document.getElementById('coinResult').textContent = 'Determining result...';
    setTimeout(() => {

    if (secretActivated) {

        document.getElementById('coinResult').textContent = secretMode;

        if (secretMode == "Tails"){

            let img = document.querySelector("#coinImage");
            img.setAttribute("src", "Images/Tails.png");
    
    
        } else if (secretMode == "Heads"){
    
            let img = document.querySelector("#coinImage");
            img.setAttribute("src", "Images/Heads.png");
    
        }
        
        return;
    }

    secretActivated = false;

    const randomNum = Math.random();

    if (randomNum > 0.5){

        result = "Tails"

    } else if(randomNum < 0.5){


        result = "Heads"

    }

    document.getElementById('coinResult').textContent = result;

    if (result == "Tails"){

        let img = document.querySelector("#coinImage");
        img.setAttribute("src", "Images/Tails.png");


    } else if (result == "Heads"){

        let img = document.querySelector("#coinImage");
        img.setAttribute("src", "Images/Heads.png");

    }
}, 1000);
    
}

function resetFlipCoin(){

    secretActivated = false;
    secretMode = null;


}


