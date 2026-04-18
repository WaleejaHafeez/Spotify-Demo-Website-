console.log("Welcome to Spotify");
let audioElement= new Audio('songs/1.mp3')
let songindex=0
let masterplay=document.getElementById('masterplay')
let myProgressBar=document.getElementById('myProgressBar')
let mastersongname=document.getElementById('mastersongname')
let songitems= Array.from(document.querySelectorAll(".songitems"))
let songs=[
    {
        songName:"Jhol", filepath: "songs/1.mp3"
    },
    {
        songName:"Bhad-ma-Jaye", filepath: "songs/2.mp3"
    },
    {
        songName:"Kali-Kali", filepath: "songs/6.mp3"
    },
    {
        songName:"Kun-Faya-kun", filepath: "songs/3.mp3"
    },
    {
        songName:"Cheques", filepath: "songs/4.mp3"
    },
    {
        songName:"Zara-kabhi", filepath: "songs/5.mp3"
    }
]
songitems.forEach((element,i) =>{
    console.log(element,i);
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName
    
})

//audioElement.play()
masterplay.addEventListener('click', () => {
  if (audioElement.paused) {
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
  } else {
    audioElement.pause();
    masterplay.classList.remove('fa-pause');
    masterplay.classList.add('fa-play');
  }
});
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
    myProgressBar.value=progress
    
    
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime= myProgressBar.value* audioElement.duration/100
})

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songitemsplay')).forEach((element) => {
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
  });
};

const makeAllPauses = () => {
  Array.from(document.getElementsByClassName('songitemsplay')).forEach((element) => {
    element.classList.remove('fa-play');
    element.classList.add('fa-pause');
  });
};


Array.from(document.getElementsByClassName('songitemsplay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    songindex=parseInt(e.target.id)
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    audioElement.src= `songs/${songindex+1}.mp3`
    mastersongname.innerText=songs[songindex].songName
    audioElement.currentTime=0
    audioElement.play()
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
  });
});

document.getElementById('next').addEventListener('click', ()=>{
if(songindex>=5){
  songindex=0
}
else{
  songindex +=1
}
 audioElement.src= `songs/${songindex+1}.mp3`
 mastersongname.innerText=songs[songindex].songName
    audioElement.currentTime=0
    audioElement.play()
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
if(songindex<=0){
  songindex=0
}
else{
  songindex -=1
}
 audioElement.src= `songs/${songindex+1}.mp3`
 mastersongname.innerText=songs[songindex].songName
    audioElement.currentTime=0
    audioElement.play()
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})



