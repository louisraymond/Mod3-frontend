let DB = `http://localhost:3000/api/v1/users`
let GAMEDB = `http://localhost:3000/api/v1/games`

function createfrontendDatabase(){
  fetch(DB)
    .then(string => string.json())
    .then(array => {
      console.table(array)
      userObject(array)
      })

}

  function userObject(array){
    let newArr = []
    let names = array.map(i => i.name)
    if (names.indexOf(username) === -1) {
        data.name =  username
        data.high_score= 0
        return createUser()
    }
    for (object of array){
      if (object.name === username){
          newArr.push(object)
         data=object
         newUser= false
      }
      if (newArr.length == 0){
        newUser = true
        highscore = 0
      } else {
        highscore = object.high_score
      }
      }

    }

function createUser(){
  fetch(DB,{
    method: "POST",
    headers:{
           "Accept": "application/json",
           "Content-type": "application/json"
         },
         body: JSON.stringify(data)
       }
     ).then(r => r.json())
     .then(json => {
       data = json
     }).then(()=> createfrontendDatabase())
}



    // function PostRequestWhenGameEnds(){
    //   if newUser === true{
    //     fetch(DB,{
    //       ,mehsajdoasijdsaiojdosaijd
    //     })
    //   }else{
    //     if score>high_score
    //     fetch(asdkasjdnaskjdnsajknd
    //   }
    //   //check to see if newUser is true, if so post the username and highscore to a new object
    //   //ELSE check to see if score is > highscore, if so, post it to user
    // }


  function promptForName() {
    var person = prompt("Please enter your name", "Name Goez here");
    if (person != null) {
        alert("Hello " + person + "! GET READY TO PLAY!!!!!!!!!111oneoneone!!!!")
        username = person
        console.log(username)
    }
}






function PostData(x){
fetch(DB + `/${data.id}`,{
  method: "PATCH",
  headers:{
            "Accept": "application/json",
            "Content-type": "application/json"
          },
          body: JSON.stringify(x)
        }).then(x => x.json())
        .then(x => data = x )
 }



 function PostGame(gameInfo){
   fetch(GAMEDB,{
  method: "POST",
  headers:{
            "Accept": "application/json",
            "Content-type": "application/json"
          },
          body: JSON.stringify(gameInfo)
        }).then(getGames)
 }

 function getGames(){
   fetch(GAMEDB)
     .then(x => x.json())
     .then(array => {
       displayGameHistory(array)

     })
       }



function  displayGameHistory(games){
  document.getElementById('scoreboard').innerHTML= ' '
  for (let index in games){
    gameSpan = document.createElement('span')
    gameSpan.innerHTML = `Game ${index }: ${games[index].points}  <br>`
    targ = document.getElementById('scoreboard')
    targ.append(gameSpan)
  }


}
