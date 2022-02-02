let button = document.querySelectorAll('button');
for (let i = 0; i < 3; i++) {
    button[i].addEventListener('click', function() {
        let text = this.innerHTML;
        audioPlayer(text);
        playmation(text);
    });
};

function audioPlayer(sound) {
    switch (sound) {
        case 'a':
            var audio = new Audio('sound/clap.wav')
            audio.play();
            break;
        case 'b':
            var audio = new Audio('sound/hihat.wav')
            audio.play();
            break;
        case 'c':
            var audio = new Audio('sound/kick.wav')
            audio.play();
            break;
    };
};

function playmation(animation) {
    let ani = document.querySelector('.' + animation);
    ani.classList.add('anim');
    setTimeout(function() {
        ani.classList.remove('anim')
    }, 500);
};
document.addEventListener('keypress', function(event) {
    let text = event.key;
    audioPlayer(text);
    playmation(text);
})