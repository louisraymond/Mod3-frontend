class Tank{
 constructor(){
    this.x= width/2
    this.y= height-100
    this.speed = 1
  }//constructor

  update(){

    this.x = this.x + this.speed*scl
    this.x = constrain(this.x, 0 ,width -(scl+10))
  }//update

  direction (x) {
  this.speed = (this.speed)*x
}//dir

  show(){
    fill(255)
    rect(this.x, this.y,scl,scl+30)
  }//show

  fire(){
    let missile = new Missile(this.x)
  }

  speedUp(){
    if (this.speed>0){
    this.speed= this.speed + 0.1
  }
    else {
      this.speed = this.speed -0.1
    }

  }

}
