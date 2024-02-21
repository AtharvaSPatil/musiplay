let songIndex=0;
let audioElement=new Audio('music/1.mp3');
let play=document.getElementById('play');
let bar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs= [
    {songName:"Cat",filePath:"music/cat.mp3",cover:"/assets/cover1.png"},
    {songName:"Clark",filePath:"music/Clark.mp3",cover:"/assets/cover1.png"},
    {songName:"Danny",filePath:"music/Danny.mp3",cover:"/assets/cover1.png"},
    {songName:"Door",filePath:"music/Door.mp3",cover:"/assets/cover1.png"},
    {songName:"Living Mice",filePath:"music/Living Mice.mp3",cover:"/assets/cover1.png"},
    {songName:"Mice on Venus",filePath:"music/Mice on Venus.mp3",cover:"/assets/cover1.png"},
    {songName:"Minecraft",filePath:"music/Minecraft.mp3",cover:"/assets/cover1.png"},
    {songName:"Moog City",filePath:"music/Moog City.mp3",cover:"/assets/cover1.png"},
    {songName:"Sweden",filePath:"music/Sweden.mp3",cover:"/assets/cover1.png"}
]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].cover;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    bar.value=progress;
});
bar.addEventListener('change',()=>{
    audioElement.currentTime=(bar.value*audioElement.duration)/100;  
})
const allPlay =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        allPlay();
        songIndex=parseInt(e.target.id); 
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`music/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause'); 
    })

})
document.getElementById('next').addEventListener('click',(e)=>{
    if(songIndex>=8)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
    }
    allPlay();
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    audioElement.src=`music/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause'); 
})
document.getElementById('previous').addEventListener('click',(e)=>{
    if(songIndex<=0)
    {
        songIndex=8;
    }
    else
    {
        songIndex-=1;
    }
    allPlay();
    // e.target.classList.remove('fa-play');
    // e.target.classList.add('fa-pause');
    audioElement.src=`music/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause'); 
})