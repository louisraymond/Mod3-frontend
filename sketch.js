let scl = 20
let aliens =  []
let aliens2=  []
let aliens3 = []
let missilesFired= []
let slot=Math.floor(Math.random() * 6) + 1
let tank
let target
let points
let highscore
let scoreElem
let myWidth
let newUser
let data={}


let username

function setup() {
   promptForName()
   createfrontendDatabase()
   getGames()

  points = 0

  scoreElem = createDiv(`${username} Score = ${points} Highscore = ${data.high_score}`);
  scoreElem.position(10,10);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');


  points = 0

  // let speedElem = createDiv('Speed = 0');
  // scoreElem.position(20, windowHeight - 30);
  // scoreElem.id = 'speed';
  // scoreElem.style('color', 'white');

  myWidth = windowWidth
	createCanvas(myWidth*0.80, windowHeight);
  scoreboard= document.createElement('div')
  scoreboard.id = "scoreboard"
  document.body.append(scoreboard)

  let targetPos = random(width)*((myWidth/10)+30)
   target = new Target(targetPos)
  tank = new Tank()

  for (let i = 0; i < 10; i++) {

    aliens[i]= new Alien1(i* (myWidth/10)+30)
    aliens2[i]= new Alien2(i* (myWidth/10)+30)
    aliens3[i]= new Alien3(i* (myWidth/10)+30)
  }


  frameRate(10)

}


function checkGameScore() {
    var scoreVal = points
    scoreElem.html( `${username} Score = ${points}, Highscore= ${data.high_score}`);
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
        if (points > data.high_score){
          data.high_score = points
          PostData(data)
          // noLoop()

        }
        // postData()
          PostGame({user_id: data.id,points: points})
          points=0
          tank.speed = 1

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

/////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////






//////////DOING STUFF TO THE BACK END//////////
