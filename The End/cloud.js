class Cloud
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true

			
			}
		this.x=x;
		this.y=y;
		this.width=w;
		this.height=h;
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var cloudpos=this.body.position;		

			push()
			translate(cloudpos.x, cloudpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			rect(0,0,this.width,this.height);
			pop()
			
	}

}