
console.log("welcome to spotify");

//initiallize the veriables

let songindex = 0;
let myprogessbar= document.getElementById('myprogessbar');
let audioelement = new Audio("songs/1.mp3");
let gif = document.getElementById("gif");
let masterPlay = document.getElementById('masterPlay');
//let songname =  arrey.form(document.getElementsByClassName('songname'));

let songs = [

    {songname : "future", songpath: ("songs/1.mp3") , coverpath: ("cover/1.jpg") },
    {songname : "cole", songpath: ("songs/2.mp3") , coverpath: ("cover/2.jpg") },
    {songname : "spacenight", songpath: ("songs/3.mp3") , coverpath: ("cover/3.jpg") },
    {songname : "velli", songpath: ("songs/4.mp3") , coverpath: ("cover/4.jpg") },
    {songname : "astra", songpath: ("songs/5.mp3") , coverpath: ("cover/5.jpg") },
    {songname : "astroworld", songpath: ("songs/6.mp3") , coverpath: ("cover/6.jpg") },
    {songname : "deja vu", songpath: ("songs/7.mp3") , coverpath: ("cover/7.jpg") },
    {songname : "antidode", songpath: ("songs/8.mp3") , coverpath: ("cover/8.jpg") },
    {songname : "damn", songpath: ("songs/9.mp3") , coverpath: ("cover/9.jpg") },
]
 //songsitems.forEach((element)=>{
   //  console.log(element,  i);
     //element.getElementsByTagName('img')[0].src= songs(i).coverpath;
     //element.getElementsByClassName('songname')[0].innerText =  songs(i).songname;
//})

  
//handle play/pause buttON

masterPlay.addEventListener('click', ()=>{

    if (audioelement.paused || audioelement.currentTime<=0){ 
        audioelement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = '1';

    }
    else{

        audioelement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = '0';

    }

    
} 
)

//listen to event
audioelement.addEventListener("timeupdate" ,()=>{
    //update seek bar
   progess = parseInt((audioelement.currentTime/audioelement.duration) * 100);
    myprogessbar.value = progess;
})

   myprogessbar.addEventListener('change',()=>{
    audioelement.currentTime = myprogessbar.value * audioelement.duration/100;


})
    


myprogessbar.addEventListener('change' ,()=>{
  audioelement.currentTime = myprogessbar.value ;

})
const  makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add("fa-play");
    
    })
}


    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        //makeAllPlays();
         index = parseInt(e.target.id);
         e.target.classList.remove('fa-play');
         e.target.classList.add('fa-pause');
         audioelement.src = "songs/.mp3";
         audioelement.currentTime = 0;
         audioelement.play();
         masterPlay.classList.remove('fa-pause');
         masterPlay.classList.add('fa-play');
          })

        })
