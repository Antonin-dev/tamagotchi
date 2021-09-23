import {TamagotchiClass} from "./tamagotchiClass.js";
import {Listener} from "./listener/listener.js";


export class Game {
    constructor() {
        this.tamagotchi = new TamagotchiClass(50, 50, 50);
        this.listener = new Listener(this.tamagotchi);
        this.arrayBar = [
            {
                selector: "myBarFood",
                id: "food",
            },
            {
                selector: "myBarSleep",
                id: "sleep",
            },
            {
                selector: "myBarPlay",
                id: "play",
            }
        ]
    }

    start() {
        //listener
        this.listener.sleep();
        this.listener.food();
        this.listener.play();

        //Display
        const display = () => {
            this.listener.statFood.innerHTML = `${this.tamagotchi._food} %`;
            this.listener.statSleep.innerHTML = `${this.tamagotchi._sleep} %`;
            this.listener.statPlay.innerHTML = `${this.tamagotchi._play} %`;

            for (const barElement of this.arrayBar) {
                switch (barElement.id) {
                    case "food":
                        document.getElementById(barElement.selector).style.width = `${this.tamagotchi._food}%`;
                        break
                    case "sleep":
                        document.getElementById(barElement.selector).style.width = `${this.tamagotchi._sleep}%`;
                        break
                    case "play":
                        document.getElementById(barElement.selector).style.width = `${this.tamagotchi._play}%`;
                        break
                }
            }
        }
        display();

        setInterval(() => {
            this.tamagotchi.decrease();
            if (this.listener.toggle) {
                this.tamagotchi.decreaseSleep();
            }
            display();

            if (this.tamagotchi._play === 0 && this.tamagotchi._sleep === 0 && this.tamagotchi._food === 0) {
                document.querySelector(".img-tamagotchi").style.backgroundImage = "url('./img/svg/dead.svg')";
                this.listener.statFood.innerHTML = "💀";
                this.listener.statSleep.innerHTML = "💀";
                this.listener.statPlay.innerHTML = "💀";
            }
            else {
                if (this.tamagotchi._food <= 20) {
                    document.querySelector(".img-tamagotchi").style.backgroundImage = "url('./img/svg/neutral.svg')";
                    if (this.tamagotchi._food <= 0) {
                        document.querySelector(".img-tamagotchi").style.backgroundImage = "url('./img/svg/sad.svg')";
                        this.listener.statFood.innerHTML = "J'ai faim !!!";
                    }
                }
                if (this.tamagotchi._sleep <= 20) {
                    document.querySelector(".img-tamagotchi").style.backgroundImage = "url('./img/svg/neutral.svg')";
                    if (this.tamagotchi._sleep <= 0) {
                        document.querySelector(".img-tamagotchi").style.backgroundImage = "url('./img/svg/sad.svg')";
                        this.listener.statSleep.innerHTML = "Je veux dormir !!!";
                    }
                }
                if (this.tamagotchi._play <= 20) {
                    document.querySelector(".img-tamagotchi").style.backgroundImage = "url('./img/svg/neutral.svg')";
                    if (this.tamagotchi._play <= 0) {
                        document.querySelector(".img-tamagotchi").style.backgroundImage = "url('./img/svg/sad.svg')";
                        this.listener.statPlay.innerHTML = "Je veux jouer !!!";
                    }
                }
            }


        }, 1000)
    }
}
