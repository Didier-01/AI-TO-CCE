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
  document.querySelector('#app').innerHTML = `
    <div class="welcome">
      <button class="close">X</button>
      <h1>🌟 Welcome to the MPC Class Chatbot! 🌟</h1>
      <p>
        Hello and welcome! I'm here to share fun and interesting stories about
        our classmates in the MPC class. Whether you want to learn more about
        your peers or share your own experiences, this is the perfect place to
        connect!
      </p>
      <p>
        Feel free to ask me about your classmates' stories, and let's
        celebrate our unique community together!
      </p>
    </div>`;
}
