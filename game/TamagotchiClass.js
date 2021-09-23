export class TamagotchiClass {

    constructor(food, sleep, play) {

        this._food = food;
        this._sleep = sleep;
        this._play = play;
    }

    feed () {
        if (this._food >= 100 || this._food + 20 > 100){
            this._food = 100
        }else{
            this._food = this._food + 20;
        }
    }

    rest () {
        if (this._sleep >= 100 || this._sleep + 3 > 100){
            this._sleep = 100
        }else{
            this._sleep = this._sleep + 3;
        }
    }

    playing () {
        if (this._play >= 100 || this._play + 20 > 100){
            this._play = 100
        }else{
            this._play = this._play + 20;
        }
    }

    decrease() {
        if (this._play <= 0){
            this._play = 0;
        }else{
            this._play -= 6;
        }
        if (this._food <= 0){
            this._food = 0;
        }else{
            this._food -= 5;
        }

    }

    decreaseSleep() {
        if (this._sleep <= 0){
            this._sleep = 0;
        }else{
            this._sleep -= 4;
        }

    }
}
