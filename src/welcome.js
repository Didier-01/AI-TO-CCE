import Typewriter from 'typewriter-effect/dist/core';

if (!localStorage.getItem('show-welcome')) {
  showWelcomeEl();

  const welcomeEl = document.querySelector('.welcome');
  const closeBtn = welcomeEl.querySelector('.close');

  closeBtn.addEventListener('click', () => {
    localStorage.setItem('show-welcome', 'no');
    welcomeEl.remove();
  });
}

function showWelcomeEl() {
  document.querySelector('#app').innerHTML += `
    <div>
      <div class="welcome">
        <button class="close">X</button>
        <h1>🌟 IMADE THIS TO THANK CCE🌟</h1>
        <p></P>
      </div>
    </div>`;

  const p = document.querySelector('.welcome p');
  const typewriter = new Typewriter(p, {
    delay: 75,
    loop: false,
  });

  const p1 = `ndashimira buriwese wamfashije ndwaje pet frer IMANA ibahe nukuri <strong class="wrong">ndabemer</strong>`;

  const mpc = '<strong class="right">ndabakunda</strong>.';
  

  typewriter
    .pauseFor(2500)
    .typeString(p1)
    .pauseFor(1000)
    .deleteChars(3)
    .pauseFor(1000)
    .typeString(mpc)
    .pauseFor(1500)
    .deleteAll(1)
    .pauseFor(1500)
    .typeString(buyMeAcoffee)
    .start();
}
