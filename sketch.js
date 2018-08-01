let scl = 20
let aliens =  []
let aliens2=  []
let aliens3 = []
let missilesFired= []
let slot=Math.floor(Math.random() * 6) + 1
let tank
let target
let points

let scoreElem
let myWidth

function setup() {
  points = 0

  scoreElem = createDiv(`Score = ${points}`);
  scoreElem.position(20, windowHeight - 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');


  points = 0

  // let speedElem = createDiv('Speed = 0');
  // scoreElem.position(20, windowHeight - 30);
  // scoreElem.id = 'speed';
  // scoreElem.style('color', 'white');

  myWidth = windowWidth
	createCanvas(myWidth, windowHeight);

  let targetPos = random(width)*((myWidth/10)+30)
   target = new Target(targetPos)
  tank = new Tank()

  for (let i = 0; i < 10; i++) {
    console.log(i)
    aliens[i]= new Alien1(i* (myWidth/10)+30)
    aliens2[i]= new Alien2(i* (myWidth/10)+30)
    aliens3[i]= new Alien3(i* (myWidth/10)+30)
    console.log(aliens[i])
  }


  frameRate(10)

}


function checkGameScore() {
    var scoreVal = points
    //parseInt(scoreElem.html().substring(8));
    scoreElem.html( "SCORE " + scoreVal );
  }

function draw() {

 checkGameScore()





  background(0)
  tank.update()
  tank.show()
  for (alien of aliens){
    alien.update()
    alien.show()
  }
  for (alien of aliens2){
    alien.update()
    alien.show()
  }
  for (alien of aliens3){
    alien.update()
    alien.show()

    for (missile of missilesFired){
      if (missile.hits(alien)){
        //missile.breakGameWithUndefinedFunction()
        alert(`GAME OVER, YOUR SCORE IS ${points}`)
        noLoop()

        //THIS IS WHERE THE POST REQUEST WILL GO
      }
    }
  }

  target.show()

  for (missile of missilesFired){
  missile.update()
  missile.show()
  if (missile.hits(target)){
      points++
      target.update()
      tank.speedUp()
      console.log(tank.speed)
  }
  }

}

function keyPressed(){
 if (keyIsDown(RIGHT_ARROW) && tank.speed < 0){
    tank.direction(-1)
  }
  else if (keyIsDown(LEFT_ARROW)&& tank.speed >0){
    tank.direction(-1)
  }
  if (key === ` `){
    tank.fire()
  }

}

/////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////


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

     fill(255)
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

     fill(255)
     ellipse(this.x, this.y,20,20)
   }//show

}

class Target{
  constructor(x){
      this.x = slot* (myWidth/10)+(myWidth/15)
      this.y= 10
    }

    update(){
      this.x = (Math.floor(Math.random() * 6) + 1)* (myWidth/10)+(myWidth/15)
      this.y= 10
    }

    show(){
      fill(255, 0 , 100)
      rect(this.x, this.y,scl,scl)
    }
  }
