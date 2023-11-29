// Родительская функция для электроприборов
function ElectricAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

// Методы включения/выключения прибора
ElectricAppliance.prototype.switchOn = function() {
    this.pluggedIn = true;
    console.log(`${this.name} включен в розетку.`);
}

ElectricAppliance.prototype.switchOff = function() {
    this.pluggedIn = false;
    console.log(`${this.name} выключен из розетки.`);
}

// Создание экземпляра лампы
function DeskLamp(brightness) {
    ElectricAppliance.call(this, 'Настольная лампа', 20);
    this.brightness = brightness;
}

DeskLamp.prototype = Object.create(ElectricAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Метод включения лампы
DeskLamp.prototype.changeBrightness = function(newBrightness) {
    this.brightness = newBrightness;
    console.log(`Яркость настольной лампы изменена на ${this.brightness}%.`);
}

// Создание экземпляра компьютера
function Computer(specs) {
    ElectricAppliance.call(this, 'Компьютер', 100);
    this.specs = specs;
}

Computer.prototype = Object.create(ElectricAppliance.prototype);
Computer.prototype.constructor = Computer;

// Метод запуска компьютера
Computer.prototype.start = function() {
    console.log(`Компьютер (${this.specs}) запущен.`);
}


const myLamp = new DeskLamp(50);
const myComputer = new Computer('Intel Core i7, 16GB RAM');

myLamp.switchOn();
myComputer.switchOn();
myLamp.switchOff();
myComputer.switchOff();

// Изменение яркости лампы и запуск компьютера
myLamp.changeBrightness(75);
myComputer.start();