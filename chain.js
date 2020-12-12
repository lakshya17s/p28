class Chain{
    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            length:1,
            stiffness:0.004,
            
        }
        this.chain=Constraint.create(options);
        this.a = a;
        World.add(world,this.chain); 
      

    }
   
    fly(){
        this.chain.bodyA=null;
    }
    attach(){
        this.chain.bodyA =this.a;
    }
    
    
    display(){
        if(this.chain.bodyA){
        push();
        var PosA = this.chain.bodyA.position;
        var PosB = this.chain.pointB;
        line(PosA.x,PosA.y,PosB.x,PosB.y);
        pop();
        }
    }
}
