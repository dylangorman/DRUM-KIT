// DRUM SOUNDS 

let kick = document.getElementById("kick");
let snare = document.getElementById("snare");
let floorTom = document.getElementById("floorTom");
let closedHats = document.getElementById("closedHats"); //top//
let openHats = document.getElementById("openHats"); //bottom//

let ride = document.getElementById("ride");


// ANIMATION 
let kd = document.getElementById("kd");
let snareDrum = document.getElementById("snareDrum");
let tomDrum = document.getElementById("tomDrum");
let rideCymbal = document.getElementById("rideCymbal");
let hiHatTop = document.getElementById("hiHatTop");
let hiHatBottom = document.getElementById("hiHatBottom");

let count = 0

// KEYPRESS 
document.addEventListener('keypress', (keyValue) => {

    if (keyValue.keyCode == 51){
    kd.style.animation = "kickDrum 0.2s linear" 
    setTimeout(() => {
        kd.style.removeProperty('animation')
    }, 200)
    kick.pause()
    kick.currentTime = 0
    kick.play();
}else if (keyValue.keyCode == 50){
    tomDrum.style.animation = "tomBody 0.2s ease"
    setTimeout(() => {
        tomDrum.style.removeProperty('animation')
    }, 200)
    floorTom.pause()
    floorTom.currentTime = 0
    floorTom.play();
} else if (keyValue.keyCode == 52){
    snareDrum.style.animation = "snareBody 0.2s ease"
    setTimeout(() => {
        snareDrum.style.removeProperty('animation')
    }, 200)
    snare.pause()
    snare.currentTime = 0
    snare.play();
}  else if (keyValue.keyCode == 49){
    rideCymbal.style.animation = "ride 0.1s linear"
    setTimeout(() => {
        rideCymbal.style.removeProperty('animation')
    }, 100)
    ride.pause()
    ride.currentTime = 0
    ride.play();
}  else if (keyValue.keyCode == 53){
    hiHatTop.style.animation = "top 0.1s ease"
    setTimeout(() => {
        hiHatTop.style.removeProperty('animation')
    }, 100)
    closedHats.pause()
    closedHats.currentTime = 0
    closedHats.play();
} else if (keyValue.keyCode == 54){
    hiHatBottom.style.animation = "bottom 0.1s ease"
    setTimeout(() => {
        hiHatBottom.style.removeProperty('animation')
    }, 100)
    openHats.pause()
    openHats.currentTime = 0
    openHats.play();
}
})



// INTERACTIVE DRUM 
kd.addEventListener("click", () => {
    kd.style.animation = "kickDrum"
    kick.pause()
        kick.currentTime = 0
        kick.play();
})

tomDrum.addEventListener("click", () => {
    tomDrum.style.animation = "tomBody"
        floorTom.pause()
        floorTom.currentTime = 0
        floorTom.play();
})
snareDrum.addEventListener("click", () => {
    snareDrum.style.animation = "snareBody"
        snare.pause()
        snare.currentTime = 0
        snare.play();
})
rideCymbal.addEventListener("click", () => {
    rideCymbal.style.animation = "ride"
        ride.pause()
        ride.currentTime = 0
        ride.play();
})
hiHatTop.addEventListener("click", () => {
    hiHatTop.style.animation = "top"
    closedHats.pause()
    closedHats.currentTime = 0
    closedHats.play();
})

hiHatBottom.addEventListener("click", () =>{
    hiHatBottom.style.animation = "bottom"
        openHats.pause()
        openHats.currentTime = 0
        openHats.play();
})


// INTERACTIVE INSTRUCTIONS
ride1.addEventListener("click", () => {
    ride1.style.animation = "drum1"
    ride.pause()
        ride.currentTime = 0
        ride.play();
})
floor1.addEventListener("click", () => {
    floor1.style.animation = "drum2"
    floorTom.pause()
        floorTom.currentTime = 0
        floorTom.play();
})
kick1.addEventListener("click", () => {
    kick1.style.animation = "drum3"
    kick.pause()
        kick.currentTime = 0
        kick.play();
})
snare1.addEventListener("click", () => {
    snare1.style.animation = "drum4"
    snare.pause()
        snare.currentTime = 0
        snare.play();
})
closedHats1.addEventListener("click", () => {
    closedHats1.style.animation = "drum5"
    closedHats.pause()
        closedHats.currentTime = 0
        closedHats.play();
})
openHats1.addEventListener("click", () => {
    openHats1.style.animation = "drum6"
    openHats.pause()
        openHats.currentTime = 0
        openHats.play();
})


