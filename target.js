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
      fill(50*((points%5)+2), 50*(points%5), 100*(points%5))
      rect(this.x, this.y,scl,scl)
    }
  }
