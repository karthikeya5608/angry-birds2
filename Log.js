class Log extends Base
{
    constructor(x, y, height,angle)
    {
     super(x,y,20,height,angle);
     this.image=loadImage("sprites/wood2.png");
     Matter.Body.setAngle(this.body,angle);
    }
    display()
    {
        if(this.body.speed<4)
        {
        super.display();
        }    
        else
        {
            World.remove(world,this.body);
        }
    }
    
}