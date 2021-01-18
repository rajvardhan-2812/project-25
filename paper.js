class paper
{
    constructor(x,y,rad)
    {
        this.body = Bodies.circle(x,y,rad)
        this.radius = rad
        World.add(world,this.body)
     
        this.image = loadImage("paper.png")
    }
    display()
    {

        var pos = this.body.position
        var angle = this.body.angle;
      //  pos.y = mouseY
       // pos.x = mouseX
       push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.radius*2);
        pop();
    }
}