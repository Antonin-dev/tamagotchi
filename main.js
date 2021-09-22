const Tamagotchi = new TamagotchiClass(50, 50, 50);

//Selector
const statFood = document.querySelector(".stat-food");
const statSleep = document.querySelector(".stat-sleep");
const statPlay = document.querySelector(".stat-play");
const buttonSleep = document.querySelector(".sleep");
const buttonFood = document.querySelector(".food");
const buttonPlay = document.querySelector(".play");
let toggle = true;
let timer;



//Display
const display = () => {
    statFood.innerHTML = `${Tamagotchi._food} %`;
    statSleep.innerHTML = `${Tamagotchi._sleep} %`;
    statPlay.innerHTML = `${Tamagotchi._play} %`;
}
display();


// Event listener
buttonSleep.addEventListener('click', e => {
    e.preventDefault();
    clearInterval(timer);
    if (toggle) {
        buttonSleep.innerHTML = "Allumer la lumiere";
        timer = setInterval(() => {
            Tamagotchi.rest();
        }, 1000);
    }
    else {
        buttonSleep.innerHTML = "Eteindre la lumiere";
        timer = setInterval(() => {
            Tamagotchi.decreaseSleep();
        }, 1000)
    }
    toggle = !toggle;
    statSleep.innerHTML = `${Tamagotchi._sleep} %`;
})

buttonFood.addEventListener('click', e => {
    e.preventDefault();
    Tamagotchi.feed();
    statFood.innerHTML = `${Tamagotchi._food} %`;
})

buttonPlay.addEventListener('click', e => {
    e.preventDefault();
    Tamagotchi.playing();
    statPlay.innerHTML = `${Tamagotchi._play} %`;
})


// Timeout

setInterval(() => {
    Tamagotchi.decrease();
    if (toggle) {
        Tamagotchi.decreaseSleep();
    }
    display();
    if (Tamagotchi._food <= 0) {
        statFood.innerHTML = "J'ai faim !!!";
    }
    if (Tamagotchi._sleep <= 0) {
        statSleep.innerHTML = "Je veux dormir !!!";
    }
    if (Tamagotchi._play <= 0) {
        statPlay.innerHTML = "Je veux jouer !!!"
    }

}, 1000)


// Function increase




