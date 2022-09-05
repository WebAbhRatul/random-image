let cat = document.getElementById('cat')
let dog = document.getElementById('dog')
let catBtn = document.querySelector('.getcat')
let dogBtn = document.querySelector('.getdog')


catBtn.addEventListener('click',randomCat)
dogBtn.addEventListener('click',randomDog)


function randomCat(){
  fetch("https://randomfox.ca/floof")
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      cat.innerHTML=`<img src="${data.image}">`
    })
}
function randomDog(){
  fetch("https://random.dog/woof.json")
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      if(data.url.includes('.mp4')){
        randomDog()
      }else{
      dog.innerHTML=`<img src="${data.url}">`
      }
    })
}
