import {cards} from './cards.js'
const flipCards = document.querySelectorAll('.card-inner');
const cardImages = document.querySelectorAll('.card2-img-front');
const cardImagesBack = document.querySelectorAll('.card2-img-back');
const cardTextFront = document.querySelectorAll('.card2-text-front');
const cardTextBack = document.querySelectorAll('.card2-text-back');
const containerCards = document.querySelectorAll('.card2')
const toggle = document.querySelector('.toggle');
const toggleButton = document.querySelector('.toggle-button');
const innerCards = document.querySelectorAll('.card-inner');
//burger menu
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))
//section1
if(!location.hash) {
    location.hash = "#home";
  }

  window.addEventListener("hashchange", function() {
    location.reload();
   console.log(location.hash);
    if(body.querySelector('.layout') !== null){
    document.getElementById('body').removeChild(layout);
    }
    body.style.overflowY = "scroll";
    if(location.hash == '#actions-a'){
     locationActionsA();
    }else if(this.location.hash == '#home'){
        locationHome();
    }else if(this.location.hash == "#animals-a"){
        locationAnimalsA();
    }else if(this.location.hash == '#emotions'){
        emotions();
    }else if(this.location.hash == '#clothes'){
        clothes();
    }else if(this.location.hash == '#colors'){
        locationColors();
    }else if(this.location.hash == '#actions-b'){
        locationActionsB();
    }else if(this.location.hash == '#animals-b'){
        locationAnimalsB();
    }else if(this.location.hash == '#fruit'){
        fruit();
    }else if(this.location.hash == "#statistics"){
        statistics();
    }
});
function checkLocation(){
    if(location.hash == '#home'){
        document.querySelector('.section2').style.display = 'none';
        document.querySelector('.section3').style.display = 'none';
        document.querySelector('.section1').style.display = 'block';
    }else if(location.hash == "#statistics"){
        document.querySelector('.section2').style.display = 'none';
        document.querySelector('.section3').style.display = 'block';
        document.querySelector('.section1').style.display = 'none';
    }else{
        document.querySelector('.section2').style.display = 'block';
        document.querySelector('.section3').style.display = 'none';
        document.querySelector('.section1').style.display = 'none';
    }
}

function locationHome(){
    checkLocation();
}
function locationActionsA(){
  checkLocation();
  setCards(1);
  setAudio(1);
}

function locationAnimalsA(){
    checkLocation();
    setCards(3);
    setAudio(3);
}

function emotions(){
    checkLocation();
    setCards(6);
    setAudio(6);
}
function clothes(){
   checkLocation();
   setCards(5);
   setAudio(5);
}
function locationColors(){
    checkLocation();
    setCards(7);
    setAudio(7);
}
function locationActionsB(){
    checkLocation;
    setCards(2);
    setAudio(2);
}
function locationAnimalsB(){
    checkLocation();
    setCards(4);
    setAudio(4);
}
function fruit(){
    checkLocation();
    setCards(8);
    setAudio(8);
}
function statistics(){
    checkLocation();
}
checkLocation();
//makind cards flip onclick
flipCards.forEach((flipCard)=>{
    flipCard.addEventListener('click', function (){
        flipCard.classList.add('is-flipped');
    })
})


flipCards.forEach((flipCard) => {
    flipCard.addEventListener('mouseleave', function(){
        flipCard.classList.remove('is-flipped');
    })
})
let a;
if(location.hash == '#actions-a'){
    locationActionsA();
    a=1;
}
if(location.hash == "#home"){
    locationHome();
}
if(location.hash == "#animals-a"){
    locationAnimalsA();
    a=3;
}
if(location.hash == "#emotions"){
    emotions();
    a=6;
}
if(location.hash == "#clothes"){
    clothes();
    a=5;
}
if(location.hash == "#animals-b"){
    locationAnimalsB();
    a=4;
}
if(location.hash == "#actions-b"){
    locationActionsB();
    a=2;
}
/*if(location.hash == "#actions-b"){
    locationActionsB();
    i=6;
}*/
if(location.hash == "#colors"){
    locationColors();
    a=7;
}
if(location.hash == "#fruit"){
    fruit();
    a=8;
}
function setCards(num){
    for(let i=0; i<cards[num].length; i++){
        cardImages[i].setAttribute('src', `${cards[num][i]['image']}`)
      }
      for(let i=0; i<cards[num].length; i++){
        cardImagesBack[i].setAttribute('src', `${cards[num][i]['image']}`)
      }
      for(let i=0; i<cards[num].length; i++){
        cardTextFront[i].innerText =`${cards[num][i]['word']}`
      }
      for(let i=0; i<cards[num].length; i++){
        cardTextBack[i].innerText =`${cards[num][i]['translation']}`
      }
}
function setAudio(num){
    for(let j=0; j<8; j++){
        containerCards[j].addEventListener('click', function(){
            let audio = new Audio();
            audio.src = (`${cards[num][j]['audioSrc']}`);
            if(toggle.classList.contains('active-toggle')){
                audio.muted = true;
            }else{
            audio.play();
            }
        })
    }
    
}


//create table 
const tableBody = document.getElementById('table-body');

makeTable(1);
makeTable(2);
makeTable(3);
makeTable(4);
makeTable(5);
makeTable(6);
makeTable(7);
makeTable(8);
function makeTable(num){
    for(let i=0; i<8; i++){
        let tableBodyElem = document.createElement('tr')
        tableBody.appendChild(tableBodyElem);
        tableBodyElem.innerHTML = `
        <td data-label="Words">${cards[num][i]['word']}</td>
        <td data-label="Asked">0</td>
        <td data-label="Hit">0</td>
        <td data-label="Miss">0</td>
        <td data-label="Wrong">0 %</td>
        <td data-label="Train">0</td>
        `
    }
}

function playTrain(num){
    let elementClicked = false;
    let arr = [];
    for(let i=0; i<8; i++){
        arr.push(cards[num][i]['audioSrc'])
    }
    shuffle(arr);
    let audio1 = new Audio(`${arr[arr.length-1]}`);
    audio1.play();
    
    flipCards[num].addEventListener('click', function(){
        elementClicked = true;
        console.log(flipCards[num]);
    })
}
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
//toggle button
toggleButton.addEventListener('click', function(){
    if(location.hash == '#home'){
        alert('Please Choose A Category')
    }else{
    toggle.classList.toggle('active-toggle');
    document.querySelector('.cards-container2').classList.toggle('change-color');
    }
    if(toggle.classList.contains('active-toggle')){
        document.querySelector('.text').innerText = "Play"
        document.querySelector('.text').style.color = 'darkred';
        innerCards.forEach((innerCard)=>{
            innerCard.classList.toggle('playMode');
           })
        cardImages.forEach((cardImage)=>{
            cardImage.classList.toggle('playMode');
        })
        playTrain(a);
    }else {
        document.querySelector('.text').innerText = "Train";
        document.querySelector('.text').style.color = "darkblue";
        innerCards.forEach((innerCard)=>{
            innerCard.classList.remove('playMode');
       })
       cardImages.forEach((cardImage)=>{
        cardImage.classList.remove('playMode');
    })
    }
})
