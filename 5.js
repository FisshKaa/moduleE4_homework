// Родительская функция для приборов
class ElectricApp {
    constructor(name, power) {
    this.name = name;
    this.power = power;
    this.OnandOff = false;
}
    getOn() {
        this.isOn = true;
        console.log(`${this.name} включен в розетку`)
    }

    getOff() {
        this.isOn = true;
        console.log(`${this.name} включен в розетку`)
    }
}
//создание настольной лампы

class DescLamp extends ElectricApp {
    constructor(brightness) {
        super('Настольная лампа', 20)
    }
    changeBrightness(newbrightness) {
        this.brightness = newbrightness;
        console.log(`Яркость настольной лампы изменена на ${this.brightness}%.`);
    }
}


//создание компьютера
class Computer extends ElectricApp {
    constructor(settings) {
        super('Компьютер', 100);
        this.settings = settings;
    }
    start() {
        console.log(`Компьютер (${this.settings}) запущен`);
    }
}


const myLamp = new DescLamp(50);
const myComputer = new Computer('Intel Core i7, 16GB RAM');


//включение компьютера
myComputer.getOn();
myComputer.getOff();

//включение лампы
myLamp.getOn();
myLamp.getOff();


myLamp.changeBrightness(75);
myComputer.start();