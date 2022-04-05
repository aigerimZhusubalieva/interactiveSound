// var audio = document.getElementById("sounds");
// var intro = document.querySelector(".intro");

// sounds.addEventListener("timeupdate", function(event){
//     console.log(audio.currentTime);
//     if(audio.currentTime<2.0){
//         document.body.style.backgroundColor = "lightsalmon";
//     }else{
//         document.body.style.backgroundColor = "lightseagreen";
//     }
// });

// audio.addEventListener("play", function(){
//     document.body.style.backgroundColor = "lightsalmon";
// });

// audio.addEventListener("ended", function(){
//     console.log("Done done!");
// });

// intro.addEventListener("click", function(){
//     intro.classList.add("hidden");
//     sounds.play();
    
// });

// const autoWah = new Tone.AutoWah(50, 5, -30).toDestination();
// autoWah.Q.value = 6;

// const synth = new Tone.Synth().connect(autoWah);

// document.body.addEventListener("keydown", function(event){
//     if(event.key == 'f'){
//         synth.triggerAttackRelease("C4", "8n");
//     }else if(event.key == 'g'){
//         synth.triggerAttackRelease("E4", "8n");
//     }else if(event.key == 'h'){
//         synth.triggerAttackRelease("G4", "8n");
//     }
// });

var saxSolo = document.getElementById("saxSolo");
var saxButton = document.getElementById("saxB");
var splaying = false;
saxButton.addEventListener("click", function(e){
    if(!splaying){
        saxSolo.play();
        splaying = true;
    }else{
        saxSolo.pause();
        splaying = false;
    }
});

var drums = document.getElementById("drums");
var drumsButton = document.getElementById("drumsB");
var dplaying = false;
drumsButton.addEventListener("click", function(e){
    if(!dplaying){
        drums.play();
        dplaying = true;
    }else{
        drums.pause();
        dplaying = false;
    }
});

var woman = document.getElementById("woman");
var womanButton = document.getElementById("womanB");
var wplaying = false;
womanButton.addEventListener("click", function(e){
    if(!wplaying){
        woman.play();
        wplaying = true;
    }else{
        woman.pause();
        wplaying = false;
    }
});



const synth = new Tone.Synth().toDestination();
//synth.oscillator.type = "sawtooth";

document.addEventListener("keydown", function(event){
    if(event.key == 'a'){
        synth.triggerAttackRelease("A1", "16n");
    }else if(event.key == 's'){
        synth.triggerAttackRelease("A#1", "16n");
    }else if(event.key == 'd'){
        synth.triggerAttackRelease("B1", "16n");
    }else if(event.key == 'f'){
        synth.triggerAttackRelease("B#1", "16n");
    }else if(event.key == 'g'){
        synth.triggerAttackRelease("C1", "16n");
    }else if(event.key == 'h'){
        synth.triggerAttackRelease("C#1", "16n");
    }else if(event.key == 'j'){
        synth.triggerAttackRelease("D1", "16n");
    }else if(event.key == 'k'){
        synth.triggerAttackRelease("D#1", "16n");
    }else if(event.key == 'l'){
        synth.triggerAttackRelease("E1", "16n");
    }
});