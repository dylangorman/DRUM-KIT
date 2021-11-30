// DRUM SOUNDS 

let kick = document.getElementById("kick");
let snare = document.getElementById("snare");
let closedHats = document.getElementById("closedHats");
let openHats = document.getElementById("openHats");
let floorTom = document.getElementById("floorTom");
let ride = document.getElementById("ride");



let count = 0

// KEYPRESS 
document.addEventListener('keypress', (keyValue) => {

    if (keyValue.keyCode == 51){
    kd.style.animation = "kickDrum"
    kick.pause()
    kick.currentTime = 0
    kick.play();
}else if (keyValue.keyCode == 50){
    tomDrum.style.animation = "tomBody"
    floorTom.pause()
    floorTom.currentTime = 0
    floorTom.play();
} else if (keyValue.keyCode == 52){
    snareDrum.style.animation = "snareBody"
    snare.pause()
    snare.currentTime = 0
    snare.play();
}  else if (keyValue.keyCode == 49){
    rideCymbal.style.animation = "ride"
    ride.pause()
    ride.currentTime = 0
    ride.play();
}  else if (keyValue.keyCode == 53){
    hiHatCymbal.style.animation = "hiHatTop"
    closedHats.pause()
    closedHats.currentTime = 0
    closedHats.play();
} else if (keyValue.keyCode == 54){
    hiHatCymbal.style.animation = "hiHatBottom"
    openHats.pause()
    openHats.currentTime = 0
    Hats.play();
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


hiHatCymbal.addEventListener("click", () => {
    count++
if(count%2 == 0){
    hiHatCymbal.style.animation = "hats"
        openHats.pause()
        openHats.currentTime = 0
        openHats.play();
} else{
    hiHatCymbal.style.animation = "hats"
       
        closedHats.pause()
        closedHats.currentTime = 0
        closedHats.play();
}
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


