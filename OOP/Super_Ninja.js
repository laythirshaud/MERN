class Ninja{
    constructor(name, health){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength =3;
    }
    sayName(){
        console.log(`the ninja name is ${this.name}`)
    }
    showStats(){
        console.log(this)
    }
    drinkSake(){
        this.health+=10;
        console.log(`the ninja new health ${this.health}`)
    }
}
const ninja1 = new Ninja("layth",50);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months .")
    }
}
    const wisdom = new Sensei("Master Splinter");
    wisdom.speakWisdom();
    wisdom.showStats();

