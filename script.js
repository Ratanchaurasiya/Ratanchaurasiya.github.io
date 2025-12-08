// Mobile Menu Toggle
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
document.querySelector('.header').appendChild(menuToggle);

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.innerHTML = navbar.classList.contains('active') 
    ? '<i class="bx bx-x"></i>' 
    : '<i class="bx bx-menu"></i>';
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
    navbar.classList.remove('active');
    menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
  }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.innerHTML = document.body.classList.contains('dark-mode')
      ? '<i class="bx bx-sun"></i>'
      : '<i class="bx bx-moon"></i>';
    
    // Save theme preference
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
  }
}

// Typed.js Animation
if (document.querySelector('.text')) {
  const typed = new Typed('.text', {
    strings: ['Full Stack Developer', 'Data Analyst', 'Web Developer', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
}

// Skills Animation on Scroll
const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
  function animateSkillsOnScroll() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
      skillsSection.classList.add('in-view');
      
      // Trigger animation for each progress bar
      const progressBars = document.querySelectorAll('.progress-line span');
      progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 300);
      });
    }
  }

  window.addEventListener('scroll', animateSkillsOnScroll);
}

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-content .row');

if (filterButtons.length > 0 && portfolioItems.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 100);
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

// Active Navigation on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Form Submission
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
      const formData = new FormData(contactForm);
      
      // Send form data to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Create success message
        const successMsg = document.createElement('div');
        successMsg.className = 'form-message success';
        successMsg.textContent = 'Message sent successfully! I will get back to you soon.';
        contactForm.appendChild(successMsg);
        
        // Remove message after 5 seconds
        setTimeout(() => {
          successMsg.remove();
        }, 5000);
        
        contactForm.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Create error message
      const errorMsg = document.createElement('div');
      errorMsg.className = 'form-message error';
      errorMsg.textContent = 'Failed to send message. Please try again or contact me directly via email.';
      contactForm.appendChild(errorMsg);
      
      // Remove message after 5 seconds
      setTimeout(() => {
        errorMsg.remove();
      }, 5000);
    } finally {
      // Reset button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Smooth scroll for anchor links
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

// Back to top button
const backToTop = document.querySelector('.top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  // Scroll to top when clicked
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Scroll Reveal Animations
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal().reveal('.home-content, .profile-container', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 300
  });

  ScrollReveal().reveal('.about-img, .about-text', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 300,
    interval: 200
  });

  ScrollReveal().reveal('.container1', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 300,
    interval: 200
  });

  ScrollReveal().reveal('.row', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 300,
    interval: 200
  });

  ScrollReveal().reveal('.timeline-item', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 300,
    interval: 200
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Trigger initial skills animation check
  if (skillsSection) {
    animateSkillsOnScroll();
  }
  
  // Set image side based on viewport width
  const homeSection = document.querySelector('.home');
  if (homeSection && window.innerWidth >= 992) {
    homeSection.classList.add('image-right');
  } else if (homeSection) {
    homeSection.classList.remove('image-right', 'image-left');
  }
  
  // Set initial active nav link based on current scroll position
  const scrollPosition = window.scrollY + 100;
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

// Adjust layout on window resize
window.addEventListener('resize', () => {
  const homeSection = document.querySelector('.home');
  if (homeSection && window.innerWidth >= 992) {
    homeSection.classList.add('image-right');
  } else if (homeSection) {
    homeSection.classList.remove('image-right', 'image-left');
  }
  
  // Close mobile menu on resize to desktop
  if (window.innerWidth >= 992) {
    navbar.classList.remove('active');
    menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
  }
});

// Handle image loading errors
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    console.log('Image failed to load:', this.src);
    this.style.display = 'none';
  });
});

// Add loading class to body for initial load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Keyboard accessibility for mobile menu
menuToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    menuToggle.click();
  }
});

// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
  }
});