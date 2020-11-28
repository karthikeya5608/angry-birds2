class Bird extends Base 
{
    constructor(x, y)
    {
      super(x,y,50,50);
      this.image=loadImage("sprites/bird.png");
      this.smokeimage=loadImage("sprites/smoke.png");
      this.trial=[];
    }
    display()
    {
      super.display();
      if(this.body.velocity.x>10&&this.body.position.x>200)
      {
      var position=[this.body.position.x,this.body.position.y];
      this.trial.push(position);
      }
      for(var i=10;i<this.trial.length;i++)
      {
        image(this.smokeimage,this.trial[i][0],this.trial[i][1])
      }
    }
}