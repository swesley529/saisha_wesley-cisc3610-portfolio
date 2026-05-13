// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.registerRegister('pwaserviceworker.js')
    .then(() => console.log('Service Worker registered'))
    .catch((err) => console.log('Service Worker error:', err));
}

// Install button
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installBtn = document.getElementById('installBtn');
  if (installBtn) {
    installBtn.style.display = 'block';
    installBtn.addEventListener('click', () => {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((result) => {
        console.log('User choice:', result.outcome);
        deferredPrompt = null;
      });
    });
  }
});

// Load topics from JSON and build cards + nav dynamically
fetch('pwadata.json')
  .then(response => response.json())
  .then(data => {
    const topics = data.wellness;
    const container = document.getElementById('cards-container');
    const navList = document.getElementById('nav-links');

    topics.forEach(topic => {
      const id = topic.title.toLowerCase().replace(/\s+/g, '');

      // Build nav link
      const li = document.createElement('li');
      li.innerHTML = `<a href="#${id}" style="text-decoration: none; color: rgb(255, 255, 255);">${topic.title}</a>`;
      navList.appendChild(li);

      // Build card
      const card = document.createElement('div');
      card.id = id;
      card.style = `
        background-color: white;
        border-radius: 20px;
        padding: 2rem;
        max-width: 350px;
        margin: 0 auto 2rem auto;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        text-align: center;
      `;
      card.innerHTML = `
        <img src="${topic.image}" alt="${topic.title}" style="width: 100%; border-radius: 12px; margin-bottom: 1rem;">
        <h2 style="color: rgb(35, 111, 33); font-weight: 700;">${topic.title}</h2>
        <p style="color: rgb(80, 80, 80); font-size: 0.95rem; line-height: 1.6;">${topic.description}</p>
        <audio controls style="margin-top: 1rem; width: 100%;">
          <source src="${topic.audio}" type="audio/mpeg">
        </audio>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.log('Error loading JSON:', err));
