class Mango{
    constructor(x,y,radius){
        var options={
            isStatic : true,
            restitution: 0,
            friction : 1,
        }
        this.body = Bodies.circle(x,y,radius/2,options);
    World.add(world,this.body);
    this.radius = radius;
    this.image = loadImage("PM/mango.png");
    }
    display(){
        push();
var pos = this.body.position;

translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,0,0,this.radius*2,this.radius*2);
pop();



}
}