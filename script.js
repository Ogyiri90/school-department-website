function toggleMenu() {
      document.getElementById('navMenu').classList.toggle('open');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    
    function handleSubmit(e) {
      e.preventDefault();

      document.getElementById('nameError').style.display = 'none';
      document.getElementById('emailError').style.display = 'none';
      document.getElementById('messageError').style.display = 'none';

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      let isValid = true;

      if (!name) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
      }

      if (!message) {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
      }

      if (isValid) {
        document.getElementById('successMsg').classList.add('show');
        document.getElementById('contactForm').reset();

        setTimeout(() => {
          document.getElementById('successMsg').classList.remove('show');
        }, 5000);
      }
    }
 
function injectStyles() {
    const s = document.createElement("style");
    s.id = "focis-styles";
    s.textContent = `

    /* ── HERO: FULLY TRANSPARENT ── */
        .hero{background:transparent !important}
        .hero-overlay{background:linear-gradient(to bottom,rgba(248,250,255,0.15) 0%,rgba(248,250,255,0.45) 100%) !important}
        .hero-content{background:rgba(255,255,255,0.18) !important;backdrop-filter:blur(28px) !important;-webkit-backdrop-filter:blur(28px) !important;border:1px solid rgba(255,255,255,0.55) !important;border-radius:22px !important;box-shadow:0 8px 40px rgba(14,165,233,0.18),inset 0 1px 0 rgba(255,255,255,0.7) !important;padding:3rem 2.5rem !important;animation:heroReveal 1.1s var(--ease) both !important}
        .hero-sub{color:var(--cyan) !important;font-size:.82rem !important;letter-spacing:.14em !important;text-transform:uppercase !important;font-weight:700 !important}
        .hero-content h2{color:#0f172a !important;font-size:clamp(1.8rem,4.5vw,3.2rem) !important;font-weight:900 !important;line-height:1.15 !important;background:linear-gradient(135deg,#0f172a 20%,var(--blue) 80%) !important;-webkit-background-clip:text !important;-webkit-text-fill-color:transparent !important;background-clip:text !important}
        .hero-content p{color:#334155 !important}
        .hero-video{will-change:transform}
    `;
    document.head.appendChild(s);
}