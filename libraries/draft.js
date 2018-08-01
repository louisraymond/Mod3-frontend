
function setup(){
  createCanvas(600,400)
  let ship = new Ship()
}

function draw(){
  background(51
  ship.show()

}

function keyPressed(){
  if (keyCode = RIGHT_ARROW) {
    ship.move(1);
  }else if (keyCode ===LEFT_ARROW){
    ship.move(-1);
  }

}












function Ship(){
  this.x = width/2

  this.show = function(){
    rectMode(CENTER)
    rectangle(this.x height-20,60,20)
  }

  this.move = function(){
    this.x +=dir+5
  }
}

function = Flower(){
  this.x = width/2

  this.show = function(){
    fill(255,0,200)
    ellipse(this.x, this.y,height-20,60,20)
  }

  this.move = function(){
    
  }
}
