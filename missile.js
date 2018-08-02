class Missile{

  constructor(x){
     this.x=x
     this.y= height-100
     this.speed = -3

     missilesFired.push(this)
   }//constructor

   update(){
     this.y = this.y + this.speed*scl

   }//update

   show(){
     noStroke()
     fill(255)
     ellipse(this.x, this.y,10,20)
   }//show

   hits(object){
     let d = dist(this.x,this.y,object.x,object.y)
     if (d < 10 + scl){
       return true
     }else {
       return false
     }
   }
}
