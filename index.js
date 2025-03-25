// For devices with keyboard
function playSounds(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

   if (!audio || !key) return;

   audio.currentTime = 0;
   audio.play();
   key.classList.add('playing');
}

window.addEventListener('keydown', playSounds);


window.addEventListener('keyup', function(e) {
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if (!key) return;
   key.classList.remove('playing');
});

// For mobile onclick function

function playSound(e) {
   const key = e.currentTarget;
   const keyCode = key.getAttribute("data-key");
   const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

   if (!audio) return;

   audio.currentTime = 0;
   audio.play();
   key.classList.add('playing');
}

function removeEffect(e) {
   e.currentTarget.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
   key.addEventListener('click', playSound);
   key.addEventListener('transitionend', removeEffect);
});
