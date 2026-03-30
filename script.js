// =============================================
//   PANAMA 4x4 SOLUTIONS — SCRIPTS
// =============================================

// --- Mobile Menu Toggle ---
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMenu();
  }
});

// --- Navbar scroll effect ---
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.borderBottomColor = 'rgba(224, 123, 0, 0.2)';
  } else {
    navbar.style.borderBottomColor = 'var(--color-border)';
  }
});

// --- Smooth active link on scroll ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar__links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--color-primary)';
    }
  });
});

// --- Contact Form ---
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const successMsg = document.getElementById('formSuccess');

  // Simulate sending (replace with real backend/form service)
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;

  setTimeout(() => {
    form.reset();
    successMsg.style.display = 'block';
    submitBtn.textContent = 'Enviar Mensaje';
    submitBtn.disabled = false;

    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 5000);
  }, 800);
}

// --- Intersection Observer: fade-in on scroll ---
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .gallery__item, .contact__item, .about__content, .stat').forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
