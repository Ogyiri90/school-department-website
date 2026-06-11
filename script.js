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
 
 