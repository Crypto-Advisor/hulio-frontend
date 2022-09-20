//**Config
const config = {
    production: {
        baseURL: 'https://hulio-backend.herokuapp.com/api'
    }
}

//**Begin file

//Constants
let step = 0;

let popup = document.createElement("div");

let tutorial_steps = {};


function incrementStep(){
    step++;
    checkStep();
}

async function getTutorial(){
    console.log(`${config.production.baseURL}/tutorial/get/${url}`)
    const rawResponse = await fetch(`${config.production.baseURL}/tutorial/get/${url}`, {
        crossDomain: true,
        method: 'GET'
    });
    const response = await rawResponse.json()

    console.log(response)

    tutorial_steps = response.result.rows[0].tutorial_steps

    console.log(tutorial_steps);
    checkStep()
} 

function checkStep(){
    if(tutorial_steps.html_steps[step] != null){
        popup.innerHTML = tutorial_steps.html_steps[step]
        document.body.prepend(popup);
        document.getElementById("button-1").onclick = incrementStep
    }
    else{
        document.getElementById('48093343-34243242').remove();
    }
}

getTutorial()

