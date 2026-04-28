export function initContactForm() {
  const cleanups = [];
  const contactForm = document.querySelector('#contact-form');

  if (contactForm) {
    const handleSubmit = async (e) => {
      e.preventDefault();

      const nameInput = document.querySelector('#name');
      const emailInput = document.querySelector('#email');
      const serviceInput = document.querySelector('#service'); // Optional select field
      const messageInput = document.querySelector('#message');
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      // Basic Validation
      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert('Please fill in your name, email, and message.');
        return;
      }

      // WhatsApp redirection feedback
      submitBtn.textContent = 'REDIRECTING...';
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-70');

      // Format the WhatsApp message
      const phoneNumber = "6281919351555"; // GANTI DENGAN NOMOR WA KLIEN (format kode negara tanpa +, e.g: 62...)

      let waText = `Halo Alvin!\n\nNama saya ${nameInput.value}.\nEmail: ${emailInput.value}\n`;
      if (serviceInput && serviceInput.value) {
        waText += `Layanan yang diminati: ${serviceInput.value}\n`;
      }
      waText += `\nPesan:\n${messageInput.value}`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waText)}`;

      // Redirect after a short delay for UX
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');

        // Reset form
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-70');
      }, 500);
    };

    contactForm.addEventListener('submit', handleSubmit);
    cleanups.push(() => contactForm.removeEventListener('submit', handleSubmit));
  }

  return () => {
    cleanups.forEach(cleanup => cleanup());
  };
}
