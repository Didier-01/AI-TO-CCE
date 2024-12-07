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
  document.querySelector('#app').innerHTML = `<div class="welcome">
      <button class="close">X</button>
      <h1>🌟 Welcome to the MPC Class Chatbot! 🌟</h1>
      <p></P>
    </div>`;

  const p = document.querySelector('.welcome p');
  const typewriter = new Typewriter(p, {
    delay: 75,
    loop: false,
  });

  const p1 = `Hello and welcome! I'm here to share fun and interesting stories about
        our classmates in the <strong class="wrong">PCB</strong>`;

  const p2 = `Whether you want to learn more about
        your peers or share your own experiences, this is the perfect place to
        connect!`;

  const p3 = `Feel free to ask me about your classmates' stories, and let's
        celebrate our unique community together!`;

  typewriter
    .pauseFor(2500)
    .typeString(p1)
    .pauseFor(1000)
    .deleteChars(3)
    .pauseFor(1000)
    .typeString('<strong class="right">MPC</strong> class.')
    .pauseFor(1500)
    .typeString('<hr>')
    .pauseFor(1500)
    .typeString(p2)
    .pauseFor(1500)
    .typeString('<hr>')
    .pauseFor(1500)
    .typeString(p3)
    .start();
}
