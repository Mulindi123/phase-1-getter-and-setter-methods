// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
        this.pi = Math.PI;
    }

    get diameter(){
        return this.radius *2;
    }
    get circumference(){
        return 2*this.radius* this.pi;
    }
    get area(){
        return this.radius*this.radius*this.pi;
    }
    set diameter(value){
        return this.radius =value/2;
    }
    
    set circumference(value){
     return this.radius = value/(2* this.pi);
        
    }

    set area(value){
        return this.radius =Math.sqrt(value/this.pi);
    }
}

let circle = new Circle(7)