// ---------- menu mobile ----------
const toggle = document.getElementById('nav-toggle');
const header = document.querySelector('header.site');
if (toggle && header) {
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.querySelectorAll('#mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      header.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- formulaire de contact ----------
// IMPORTANT : ce site est statique (hébergé sur GitHub Pages), il n'a donc pas
// de serveur pour traiter le formulaire. On utilise Formspree (gratuit) :
// 1. Créez un compte sur https://formspree.io
// 2. Créez un formulaire, copiez son ID (ex: "abcduvwx")
// 3. Remplacez FORMSPREE_ENDPOINT ci-dessous par votre URL de formulaire
const FORMSPREE_ENDPOINT = "https://formspree.io/f/VOTRE_ID_FORMSPREE";

const form = document.getElementById('carmelys-form');
const msg = document.getElementById('form-msg');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    msg.textContent = "Envoi en cours...";
    msg.className = "form-msg";

    if (FORMSPREE_ENDPOINT.includes("VOTRE_ID_FORMSPREE")) {
      // Le formulaire n'est pas encore relié à un service d'envoi :
      // on propose un envoi par email en secours.
      const data = new FormData(form);
      const body = [
        `Nom: ${data.get('nom')}`,
        `Téléphone: ${data.get('telephone')}`,
        `Email: ${data.get('email')}`,
        `Type de projet: ${data.get('projet')}`,
        `Message: ${data.get('message')}`
      ].join('\n');
      window.location.href = `mailto:contactcarmelys@gmail.com?subject=${encodeURIComponent('Demande de devis - site web')}&body=${encodeURIComponent(body)}`;
      msg.textContent = "Le formulaire n'est pas encore configuré : votre messagerie va s'ouvrir pour envoyer la demande par email.";
      msg.className = "form-msg";
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (response.ok) {
        form.reset();
        msg.textContent = "Merci, votre demande a bien été envoyée. Nous revenons vers vous sous 24h ouvrées.";
        msg.className = "form-msg ok";
      } else {
        msg.textContent = "Une erreur est survenue. Merci de nous contacter directement par téléphone ou email.";
        msg.className = "form-msg err";
      }
    } catch (err) {
      msg.textContent = "Une erreur est survenue. Merci de nous contacter directement par téléphone ou email.";
      msg.className = "form-msg err";
    }
  });
}
