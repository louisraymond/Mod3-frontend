class Alien1{
  constructor(a){
    console.log(a/myWidth)
     this.x= a
     this.y= 50
     this.speed = 0


   }//constructor

   update(){
     this.y = this.y + this.speed*scl
     this.x = this.x + this.speed*scl
   }//update



   show(){

     fill(255)
     ellipse(this.x, this.y,20,20)
   }//show

}

class Alien2{
  constructor(a){
    console.log(a/myWidth)
     this.x= a
     this.y= 100
     this.speed = 0


   }//constructor

   update(){
     this.y = this.y + this.speed*scl
     this.x = this.x + this.speed*scl
   }//update



   show(){

     fill(100)
     ellipse(this.x, this.y,20,20)
   }//show

}

class Alien3{
  constructor(a){
    console.log(a/myWidth)
     this.x= a
     this.y= 150
     this.speed = 0


   }//constructor

   update(){
     this.y = this.y + this.speed*scl
     this.x = this.x + this.speed*scl
   }//update



   show(){

     fill(0,Math.floor(Math.random() * 255)+50,0)
     ellipse(this.x, this.y,20,20)
   }//show

}
