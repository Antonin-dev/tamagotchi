const tamagotchi = new TamagotchiClass(50, 50, 50);

//Selector
const statFood = document.querySelector(".stat-food");
const statSleep = document.querySelector(".stat-sleep");
const statPlay = document.querySelector(".stat-play");
const buttonSleep = document.querySelector(".sleep");
const buttonFood = document.querySelector(".food");
const buttonPlay = document.querySelector(".play");
let toggle = true;


//Display
const display = () => {
    statFood.innerHTML = `${tamagotchi._food} %`;
    statSleep.innerHTML = `${tamagotchi._sleep} %`;
    statPlay.innerHTML = `${tamagotchi._play} %`;
}
display();

// Event listener
buttonSleep.addEventListener('click', e => {
    e.preventDefault()
    if (toggle){
        buttonSleep.innerHTML = "Eteindre la lumiere";
        toggle = !toggle
    }else{
        buttonSleep.innerHTML = "Allumer la lumiere";
        toggle = !toggle
        increaseSleep();
    }
    console.log(toggle);
    statSleep.innerHTML = tamagotchi._sleep;
})

buttonFood.addEventListener('click', e => {
    e.preventDefault();
    increaseFood();
    statFood.innerHTML = tamagotchi._food;
})

buttonPlay.addEventListener('click', e => {
    e.preventDefault();
    increasePlay();
    statPlay.innerHTML = tamagotchi._play;
})


// Timeout

setInterval(() => {
    tamagotchi.decrease();
    if (toggle){
        tamagotchi.decreaseSleep();
    }

    display();
    if (tamagotchi._food <= 0){
        statFood.innerHTML = "J'ai faim !!!";
    }
    if (tamagotchi._sleep <= 0){
        statSleep.innerHTML = "Je veux dormir !!!";
    }
    if (tamagotchi._play <= 0) {
        statPlay.innerHTML = "Je veux jouer !!!"
    }
}, 1000)


// Function increase

const increaseSleep = () => {
    setInterval(() => {
        tamagotchi.rest();
    }, 500)

}
const increaseFood = () => {
    tamagotchi.feed();
}
const increasePlay = () => {
    tamagotchi.playing();
}


