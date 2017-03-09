var control = 'record';
var dataControl = [];
var textControl = 'Record';
var counter = 0;


function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
    if (control == 'recording') dataControl.push({keyCode: event.keyCode, count: counter});
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function controller(event) {

    if (event.keyCode !== 32 && event.type !== 'click') return;
    if (control === 'record') {
        recording();
    } else if (control === 'recording') {
        stopRecording();
    } else if (control === 'stop') {
        playing();
    }

    document.querySelector('#controller').innerHTML = textControl;
}

function recording() {
    counter = 0;
    dataControl = [];
    document.querySelector('#controller').classList.add('recording');
    control = 'recording';
    textControl = 'Recording';
}

function stopRecording() {
    document.querySelector('#controller').classList.remove('recording');
    document.querySelector('#controller').classList.add('stop');
    control = 'stop';
    textControl = 'Play';
}

function playing() {
    document.querySelector('#controller').classList.remove('stop');
    document.querySelector('#controller').classList.add('playingSound')
    textControl = 'Playing';
    let last = dataControl[dataControl.length - 1];

    if(dataControl.length !== 0){
        window.setTimeout(() => {
            removePlaying();
        }, last.count * 10);

        dataControl.forEach(key => window.setTimeout(() => {
            playSound(key);
        }, key.count * 10));

    }else{
         removePlaying();
    }
    
}

function removePlaying(){
        document.querySelector('#controller').classList.remove('playingSound');
        control = 'record';
        textControl = 'Record';
        document.querySelector('#controller').innerHTML = textControl;
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
window.addEventListener('keydown', controller);
document.querySelector('#controller').addEventListener('click', controller);


setInterval(function(){ 
    counter++;
}, 10);