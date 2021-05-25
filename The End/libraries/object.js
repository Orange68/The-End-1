class Object
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
		this.body=Bodies.rectangle(x, y, w, h, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var trexpos=this.body.position;		

			push()
			translate(trexpos.x, trexpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			rect(0,0,this.width,this.height);
			pop()
			
	}

}