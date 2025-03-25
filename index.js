// For devices with keyboard
function playSounds(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

   key.classList.remove('playing');
   if (!audio || !key) return;

   audio.currentTime = 0;
   audio.play();
   key.classList.add('playing');
}

window.addEventListener('keydown', playSounds);
window.removeEventListener('keyup', playSounds);

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
