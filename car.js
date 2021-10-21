class Car {
     constructor(brand, speed) {
          this.brand = brand 
          this.speed = speed
        }
        
    accelerate(number) {
        this.speed += number
        console.log(this.speed);
    }
    brake(number) {
        this.speed -= number
        console.log(this.speed);
    }
    describe() {
        console.log(`${this.brand} running at ${this.speed} km/h`);
    }
}

const ford = new Car("Ford", 0)
ford.accelerate(50)
ford.brake(25)
ford.describe()
const renault = new Car("renault", 0)
renault.accelerate(80)
renault.brake(45)
renault.describe()

//TV// 

class TV {
    constructor(brand){
        this.brand = brand
        this.channel = 1
        this.volume = 50 
        }
    lower(number){
        this.volume -= number
        if(this.volume<0){
             this.volume = 0
        }}
    turnUp(number){
        this.volume += number
        if(this.volume>100){
        this.volume = 100 
    }}
    channelTV(number){
    this.channel += number
    if(this.channel>50){
        this.channel = 50 
    }
    else if(this.channel<1){
        this.channel = 1 
    }}
    reset(){
        this.channel = 1
        this.volume = 50 
    }
    describe(){
        console.log(`this channel is ${this.channel} is ${this.volume}`); 
    }}

const samsung = new TV("samsung")
samsung.channelTV(15)
samsung.lower(5)
samsung.turnUp(14)
samsung.describe()