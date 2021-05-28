class Drops{
constructor(x,y)
{
    var options = {
        isStatic: true
    }
 this.rain=Bodies.circle(x,y,5,options);
 World.add(world,this.rain)
 this.radius=5
}
updateY(){
    if(this.rain.position.y  > height){

        Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
    }
 showDrops(){
    Fill("blue") 
 ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
 }
}