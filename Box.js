class box{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            friction:6.3,
			density:6.2
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
      
    }

display(){
    push ();
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
};