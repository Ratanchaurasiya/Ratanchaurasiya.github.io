// ========== DOM Elements ==========
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
document.querySelector('.header').appendChild(menuToggle);

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const themeToggle = document.getElementById('theme-toggle');
const backToTop = document.querySelector('.top');
const sections = document.querySelectorAll('section');
const contactForm = document.querySelector('.contact-container form');

// ========== Mobile Menu Functions ==========
function toggleMobileMenu() {
  navbar.classList.toggle('active');
  menuToggle.innerHTML = navbar.classList.contains('active') 
    ? '<i class="bx bx-x"></i>' 
    : '<i class="bx bx-menu"></i>';
}

function closeMobileMenu() {
  navbar.classList.remove('active');
  menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
}

// Event Listeners for Mobile Menu
menuToggle.addEventListener('click', toggleMobileMenu);

navLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
    closeMobileMenu();
  }
});

// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navbar.classList.contains('active')) {
    closeMobileMenu();
  }
});

// ========== Theme Toggle ==========
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
  } else if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
    if (themeToggle) themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  
  if (themeToggle) {
    themeToggle.innerHTML = isDark ? '<i class="bx bx-sun"></i>' : '<i class="bx bx-moon"></i>';
  }
  
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}
initTheme();

// ========== Typed.js Animation ==========
if (document.querySelector('.text') && typeof Typed !== 'undefined') {
  new Typed('.text', {
    strings: ['Full Stack Developer', 'Data Analyst', 'Web Developer', 'Programmer'],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1500,
    loop: true,
    cursorChar: '|'
  });
}

// ========== Active Navigation on Scroll ==========
function updateActiveNav() {
  const scrollPosition = window.scrollY + 150;
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// ========== Back to Top Button ==========
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });
  
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========== Portfolio Filter ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio .row');

if (filterButtons.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// ========== Form Submission ==========
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
      const formData = new FormData(contactForm);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      const messageDiv = document.createElement('div');
      messageDiv.className = 'form-message';
      
      if (result.success) {
        messageDiv.classList.add('success');
        messageDiv.textContent = '✓ Message sent successfully! I will get back to you soon.';
        contactForm.reset();
      } else {
        throw new Error('Submission failed');
      }
      
      contactForm.appendChild(messageDiv);
      
      setTimeout(() => {
        messageDiv.remove();
      }, 5000);
      
    } catch (error) {
      console.error('Form error:', error);
      const errorDiv = document.createElement('div');
      errorDiv.className = 'form-message error';
      errorDiv.textContent = '✗ Failed to send message. Please try again or email me directly.';
      contactForm.appendChild(errorDiv);
      
      setTimeout(() => {
        errorDiv.remove();
      }, 5000);
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

// ========== Scroll Reveal Animations ==========
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
  });
  
  sr.reveal('.home-content, .profile-container', { origin: 'top' });
  sr.reveal('.about-img', { origin: 'left' });
  sr.reveal('.about-text', { origin: 'right' });
  sr.reveal('.container1', { interval: 200 });
  sr.reveal('.row', { interval: 200 });
  sr.reveal('.timeline-item', { interval: 200 });
  sr.reveal('.contact-text, .contact-container', { origin: 'bottom' });
}

// ========== Handle Image Loading Errors ==========
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    console.warn(`Image failed to load: ${this.src}`);
    this.style.opacity = '0.5';
    this.style.backgroundColor = 'var(--card-bg)';
  });
});

// ========== Page Load Animation ==========
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// ========== Resize Handler ==========
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth >= 992) {
      closeMobileMenu();
    }
  }, 250);
});