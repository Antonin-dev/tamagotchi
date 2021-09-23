export class Listener {

    constructor(tamagochi) {
        this.Tamagochi = tamagochi
        this.statFood = document.querySelector(".stat-food");
        this.statSleep = document.querySelector(".stat-sleep");
        this.statPlay = document.querySelector(".stat-play");
        this.buttonSleep = document.querySelector(".sleep");
        this.buttonFood = document.querySelector(".food");
        this.buttonPlay = document.querySelector(".play");
        this.toggle = true;
        this.timer = null;
    }

    food() {
        this.buttonFood.addEventListener('click', e => {
            e.preventDefault();
            this.Tamagochi.feed();
            this.statFood.innerHTML = `${this.Tamagochi._food} %`;
        })
    }

    sleep() {
        this.buttonSleep.addEventListener('click', e => {
            e.preventDefault();
            clearInterval(this.timer);
            if (this.toggle) {
                this.buttonSleep.innerHTML = "Allumer la lumiere";
                this.timer = setInterval(() => {
                    this.Tamagochi.rest();
                }, 1000);
            }
            else {
                this.buttonSleep.innerHTML = "Eteindre la lumiere";
                this.buttonSleep.classList.add("night")
                this.timer = setInterval(() => {
                    this.Tamagochi.decreaseSleep();
                }, 1000)
            }
            this.toggle = !this.toggle;
            this.statSleep.innerHTML = `${this.Tamagochi._sleep} %`;
        })
    }

    play () {
        this.buttonPlay.addEventListener('click', e => {
            e.preventDefault();
            this.Tamagochi.playing();
            this.statPlay.innerHTML = `${this.Tamagochi._play} %`;
        })
    }
}
