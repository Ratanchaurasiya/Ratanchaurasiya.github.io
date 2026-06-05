// ========== DOM Elements ==========
const menuToggle = document.createElement('div');
menuToggle.className = 'menu-toggle';
menuToggle.innerHTML = '<i class="bx bx-menu"></i>';

const header = document.querySelector('.header');
if (header) {
  header.appendChild(menuToggle);
}

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const themeToggle = document.getElementById('theme-toggle');
const backToTop = document.querySelector('.top');
const sections = document.querySelectorAll('section');
const contactForm = document.querySelector('.contact-container form');

// ========== Mobile Menu Functions ==========
function toggleMobileMenu() {
  if (!navbar) return;
  navbar.classList.toggle('active');
  menuToggle.innerHTML = navbar.classList.contains('active') 
    ? '<i class="bx bx-x"></i>' 
    : '<i class="bx bx-menu"></i>';
}

function closeMobileMenu() {
  if (!navbar) return;
  navbar.classList.remove('active');
  menuToggle.innerHTML = '<i class="bx bx-menu"></i>';
}

// Event Listeners for Mobile Menu
menuToggle.addEventListener('click', toggleMobileMenu);

if (navLinks.length > 0) {
  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}

document.addEventListener('click', (e) => {
  if (navbar && !navbar.contains(e.target) && !menuToggle.contains(e.target)) {
    closeMobileMenu();
  }
});

// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navbar && navbar.classList.contains('active')) {
    closeMobileMenu();
  }
});

// ========== Theme Toggle ==========
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggle) themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
  } else {
    document.body.classList.remove('light-mode');
    if (themeToggle) themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
  }
}

function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  
  if (themeToggle) {
    themeToggle.innerHTML = isLight ? '<i class="bx bx-moon"></i>' : '<i class="bx bx-sun"></i>';
  }
  
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}
initTheme();

// ========== Header Scroll Glassmorphic Effect ==========
function updateHeaderScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateHeaderScroll);
updateHeaderScroll();

// ========== Typed.js Animation ==========
function initTypedAnimation() {
  if (document.querySelector('.text') && typeof Typed !== 'undefined') {
    new Typed('.text', {
      strings: ['Full Stack Developer', 'Data Analyst', 'Web Developer', 'Software Programmer'],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1500,
      loop: true,
      cursorChar: '|'
    });
  }
}

// ========== Active Navigation on Scroll ==========
function updateActiveNav() {
  if (sections.length === 0) return;
  
  const wrapper = document.querySelector('.portfolio-horizontal-wrapper');
  let current = '';
  
  if (wrapper && window.innerWidth >= 992) {
    const scrollPosition = wrapper.scrollLeft + (window.innerWidth / 2);
    sections.forEach(section => {
      const sectionLeft = section.offsetLeft;
      const sectionWidth = section.clientWidth;
      
      if (scrollPosition >= sectionLeft && scrollPosition < sectionLeft + sectionWidth) {
        current = section.getAttribute('id');
      }
    });
  } else {
    // Detect if user has scrolled to the bottom of the page (vertical scroll)
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10;
    
    if (isAtBottom) {
      current = 'contact';
    } else {
      const scrollPosition = window.scrollY + 150;
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
    }
  }
  
  if (!current) return;
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      link.classList.remove('active');
      if (href === `#${current}`) {
        link.classList.add('active');
      }
    }
  });
}

// Add scroll listener to both horizontal container and global window
const wrapperElement = document.querySelector('.portfolio-horizontal-wrapper');
if (wrapperElement) {
  wrapperElement.addEventListener('scroll', updateActiveNav);
}
window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// ========== Back to Top Button ==========
if (backToTop) {
  const handleBackToTopVisibility = () => {
    if (wrapperElement && window.innerWidth >= 992) {
      if (wrapperElement.scrollLeft > 500) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    } else {
      if (window.scrollY > 500) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    }
  };

  if (wrapperElement) {
    wrapperElement.addEventListener('scroll', handleBackToTopVisibility);
  }
  window.addEventListener('scroll', handleBackToTopVisibility);
  
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    if (wrapperElement && window.innerWidth >= 992) {
      wrapperElement.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
      
      // Select elements inside target section to animate from right to left
      const animatedElements = targetElement.querySelectorAll(
        '.home-content, .profile-container, .about-img, .about-text, .timeline, .container1, .portfolio-content, .achievements-grid, .contact-text, .contact-container'
      );
      
      // Apply stunning right-to-left slide animation with cascading delay
      animatedElements.forEach((el, index) => {
        el.classList.remove('section-slide-in');
        // Force reflow/repaint to restart CSS keyframe animation
        void el.offsetWidth;
        el.classList.add('section-slide-in');
        // Stagger elements inside the section for a premium flow
        el.style.animationDelay = `${index * 0.12}s`;
      });
      
      if (wrapperElement && window.innerWidth >= 992) {
        wrapperElement.scrollTo({
          left: targetElement.offsetLeft,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
      
      // Clean up classes after scroll and slide animations finish
      setTimeout(() => {
        animatedElements.forEach(el => {
          el.classList.remove('section-slide-in');
          el.style.animationDelay = '';
        });
      }, 1500);
    }
  });
});

// ========== Portfolio Filter ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio .row');
const projectSlicer = document.getElementById('project-slicer');

function filterProjects(filterValue) {
  filterButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filterValue);
  });

  if (projectSlicer) {
    projectSlicer.value = filterValue;
  }

  portfolioItems.forEach(item => {
    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
      item.style.display = '';
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

  // Reset the portfolio horizontal slider offset and dot indices after transitions complete
  setTimeout(() => {
    if (typeof window.resetPortfolioSlider === 'function') {
      window.resetPortfolioSlider();
    }
  }, 350);
}

if (filterButtons.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterProjects(button.getAttribute('data-filter'));
    });
  });
}

if (projectSlicer) {
  projectSlicer.addEventListener('change', () => {
    filterProjects(projectSlicer.value);
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
function initScrollReveal() {
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
    sr.reveal('.achievement-card', { interval: 200 });
    sr.reveal('.contact-text, .contact-container', { origin: 'bottom' });
  }
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

// ========== Project Case Study Database & Modal Handler ==========
const projectDetails = {
  attendance: {
    title: "Attendance Management System",
    category: "Android & Database",
    image: "Attendance.png",
    liveLink: "https://ratanchaurasiya.github.io/attendance-management-system/",
    githubLink: "https://github.com/Ratanchaurasiya",
    tech: ["HTML/CSS", "JavaScript", "Android OS", "SQL Database"],
    description: "A specialized attendance system designed for mobile and database tracking. Built with swipe gesture support for fast attendance logging and direct WhatsApp API communication for instant, scheduled reporting to parents or admins.",
    features: [
      "Intuitive swipe actions for real-time student check-ins",
      "Dynamic reports generation in Excel-compatible formats",
      "Direct integration with WhatsApp for immediate attendance alerts",
      "Robust relational database design optimizing data lookup speeds"
    ]
  },
  banking: {
    title: "Banking & Dashboard System",
    category: "Full Stack Web Application",
    image: "banking_dashboard.png",
    liveLink: "https://ratanchaurasiya.github.io/Banking-System/",
    githubLink: "https://github.com/Ratanchaurasiya/Banking-System",
    tech: ["HTML/CSS", "JavaScript", "Local Storage API", "Secure State Management"],
    description: "A complete client-side banking simulation dashboard. Enables users to register accounts, simulate deposits and secure peer-to-peer transfers, review chronological account statements, and toggle security options such as mock email alerts and OTPs.",
    features: [
      "Mock peer-to-peer transaction engine with balance checks",
      "Local Storage persistence to store account states across refreshes",
      "Dynamic statement viewer with filters and search tools",
      "Simulated security layer (two-factor authorization check simulation)"
    ]
  },
  blinkit: {
    title: "Blinkit Sales & Inventory Dashboard",
    category: "Power BI Business Intelligence",
    image: "bi_dashboard.png",
    liveLink: "https://app.powerbi.com/groups/me/reports/b30f7405-6d75-49a1-8016-132f460d9dd9/ecfc47970904230cde5a?experience=power-bi",
    tech: ["Power BI Desktop", "DAX Formulas", "Power Query", "Excel Modeling"],
    description: "A detailed analytics dashboard tracking sales, customer feedback ratings, and inventory flow for Blinkit retail outlets. Uses advanced filtering to compare metrics across different tier locations.",
    features: [
      "Interactive geo-location slicers and time-series charts",
      "Advanced DAX measures for real-time rating average calculation",
      "Power Query data pipeline for cleansing and transformation",
      "Optimized visuals to guide inventory restock decisions"
    ]
  },
  amazon: {
    title: "Amazon Sales Insights Dashboard",
    category: "Power BI Desktop Analytics",
    image: "amazoe_dashboard.png",
    liveLink: "https://app.powerbi.com/groups/me/reports/6b344754-52ae-4bc8-97f7-cef7c63e8024/60570ea83e4a18eb55d4?experience=power-bi",
    tech: ["Power BI Desktop", "Data Analysis", "KPI Optimization", "B2B Analytics"],
    description: "An advanced business intelligence dashboard analyzing Amazon sales metrics. Visualizes total revenue, sales categories, shipping delay latency, and regional outlet metrics with customized dashboards.",
    features: [
      "Dynamic KPI indicators for key financial achievements",
      "Fulfillment channel comparisons (FBA vs FBM performance)",
      "B2B vs B2C distributor performance slicing",
      "Product category contribution charts (sales vs margin)"
    ]
  },
  excel: {
    title: "Excel Data Analytics Dashboard",
    category: "Excel & Power Query",
    image: "excel_analytics.png",
    liveLink: "docs/excel-dashboard.pdf",
    tech: ["Microsoft Excel", "Pivot Tables & Slicers", "Power Query", "Advanced Formulas"],
    description: "A complex analytics dashboard implemented entirely in Excel. Models business growth patterns, regional performance ratios, and product profitability matrices with automated data refreshes.",
    features: [
      "Dynamic Pivot Tables with advanced multi-filter slicers",
      "VLOOKUP, INDEX-MATCH, and nested conditional formula models",
      "Power Query ETL pipeline for automated dataset merging",
      "Clean, executive-level dashboard presentation layout"
    ]
  }
};

const projectModal = document.getElementById('project-modal');
const modalBody = document.querySelector('.modal-body');
const closeModalBtn = document.querySelector('.close-modal');
const detailButtons = document.querySelectorAll('.btn-detail');

// ========== Sleek Toast Notifications Helper ==========
function showToast(message, type = 'info') {
  let toast = document.querySelector('.toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  
  let icon = 'bx-info-circle';
  let color = '#7c3aed';
  if (type === 'success') {
    icon = 'bx-check-circle';
    color = '#10b981';
  } else if (type === 'error') {
    icon = 'bx-error-circle';
    color = '#ef4444';
  }
  
  toast.innerHTML = `<i class="bx ${icon}" style="color: ${color}"></i><span>${message}</span>`;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Intercept clicks on missing Excel PDF links to show premium toast notification
document.addEventListener('click', (e) => {
  const excelLink = e.target.closest('a[href="docs/excel-dashboard.pdf"]');
  if (excelLink) {
    e.preventDefault();
    showToast('The Excel Analytics Case Study is currently being finalized. Please contact Ratan directly!', 'info');
  }
});

function openProjectModal(projectKey) {
  const data = projectDetails[projectKey];
  if (!data || !modalBody || !projectModal) return;

  // Generate Modal Content HTML
  let techBadges = data.tech.map(t => `<span class="modal-tech-badge">${t}</span>`).join('');
  let featureItems = data.features.map(f => `
    <div class="modal-feature-item">
      <i class="bx bx-check-circle"></i>
      <span>${f}</span>
    </div>
  `).join('');

  // Generate Dynamic CTA Button Action Group
  let ctaButtons = '';
  if (data.liveLink) {
    let linkLabel = data.category.includes("Power BI") || data.category.includes("Excel") ? "Open Live Dashboard" : "Launch Project Demo";
    let clickHandler = data.liveLink === "docs/excel-dashboard.pdf" ? `onclick="event.preventDefault(); showToast('The Excel Case Study PDF is currently being finalized. Please contact Ratan directly!', 'info');"` : "";
    ctaButtons += `<a href="${data.liveLink}" target="_blank" rel="noopener noreferrer" class="modal-btn modal-btn-primary" ${clickHandler}><i class="bx bx-link-external"></i> <span>${linkLabel}</span></a>`;
  }
  if (data.githubLink) {
    ctaButtons += `<a href="${data.githubLink}" target="_blank" rel="noopener noreferrer" class="modal-btn modal-btn-secondary"><i class="bx bxl-github"></i> <span>View Code Repository</span></a>`;
  }

  modalBody.innerHTML = `
    <div class="modal-project-header">
      <span class="modal-project-cat">${data.category}</span>
      <h2 class="modal-project-title">${data.title}</h2>
    </div>
    <img src="${data.image}" alt="${data.title} Cover" class="modal-project-img">
    
    <div class="modal-section-title">
      <i class="bx bx-file"></i>
      <span>Project Overview</span>
    </div>
    <p class="modal-project-desc">${data.description}</p>
    
    <div class="modal-section-title">
      <i class="bx bx-code-alt"></i>
      <span>Technologies Used</span>
    </div>
    <div class="modal-project-tech">
      ${techBadges}
    </div>
    
    <div class="modal-section-title">
      <i class="bx bx-list-check"></i>
      <span>Key Features & Deliverables</span>
    </div>
    <div class="modal-project-features">
      ${featureItems}
    </div>
    
    ${ctaButtons ? `<div class="modal-cta-group">${ctaButtons}</div>` : ''}
  `;

  projectModal.classList.add('active');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Disable background scrolling
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove('active');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Restore background scrolling
}

// Add event listeners to detail buttons
if (detailButtons.length > 0) {
  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projectKey = btn.getAttribute('data-project');
      openProjectModal(projectKey);
    });
  });
}

// Close events
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeProjectModal);
}

if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
    closeProjectModal();
  }
});

// ========== IntersectionObserver for Scroll-Triggered Progress Bars ==========
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate linear progress bars
      const progressSpans = entry.target.querySelectorAll('.progress-line span');
      progressSpans.forEach(span => {
        const targetPercent = span.getAttribute('data-percent');
        span.style.width = targetPercent;
      });
      
      // Animate radial progress bars dynamically by reading the percentage content
      const radialPaths = entry.target.querySelectorAll('.radial-bar .path');
      radialPaths.forEach(path => {
        const percentageDiv = path.closest('.radial-bar').querySelector('.percentage');
        if (percentageDiv) {
          const percent = parseInt(percentageDiv.textContent);
          const offset = 502 - (502 * percent) / 100;
          path.style.strokeDashoffset = offset;
        }
      });
      
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
  skillObserver.observe(skillsSection);
}

// ========== Achievements Slider ==========
function initAchievementsSlider() {
  const slider = document.querySelector('.achievements-slider');
  const track = document.querySelector('.achievements-grid');
  const cards = Array.from(document.querySelectorAll('.achievement-card'));
  const prevBtn = document.querySelector('.achievement-prev');
  const nextBtn = document.querySelector('.achievement-next');
  const dotsContainer = document.querySelector('.achievement-dots');

  if (!slider || !track || cards.length === 0 || !prevBtn || !nextBtn || !dotsContainer) return;

  let currentIndex = 0;
  let maxIndex = 0;
  let autoSlideTimer;

  function getVisibleCards() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1200) return 2;
    return 3;
  }

  function getStepSize() {
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return cards[0].getBoundingClientRect().width + gap;
  }

  function buildDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'achievement-dot';
      dot.setAttribute('aria-label', `Go to achievement slide ${i + 1}`);
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
        restartAutoSlide();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    maxIndex = Math.max(0, cards.length - getVisibleCards());
    currentIndex = Math.min(currentIndex, maxIndex);
    track.style.transform = `translateX(-${currentIndex * getStepSize()}px)`;

    const dots = dotsContainer.querySelectorAll('.achievement-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === maxIndex;
  }

  function goToNextSlide() {
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    updateSlider();
  }

  function goToPrevSlide() {
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    updateSlider();
  }

  function restartAutoSlide() {
    window.clearInterval(autoSlideTimer);
    autoSlideTimer = window.setInterval(goToNextSlide, 4500);
  }

  prevBtn.addEventListener('click', () => {
    goToPrevSlide();
    restartAutoSlide();
  });

  nextBtn.addEventListener('click', () => {
    goToNextSlide();
    restartAutoSlide();
  });

  slider.addEventListener('mouseenter', () => window.clearInterval(autoSlideTimer));
  slider.addEventListener('mouseleave', restartAutoSlide);

  window.addEventListener('resize', () => {
    const nextMaxIndex = Math.max(0, cards.length - getVisibleCards());
    if (nextMaxIndex !== maxIndex) {
      maxIndex = nextMaxIndex;
      currentIndex = Math.min(currentIndex, maxIndex);
      buildDots();
    }
    updateSlider();
  });

  maxIndex = Math.max(0, cards.length - getVisibleCards());
  buildDots();
  updateSlider();
  restartAutoSlide();
}

// ========== Interactive Particle Network Canvas ==========
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let particles = [];
  let mouse = { x: null, y: null, radius: 150 };
  let themeColors = { main: '#7c3aed', secondary: '#db2777' };
  
  function updateColors() {
    const style = getComputedStyle(document.documentElement);
    themeColors.main = style.getPropertyValue('--main-color').trim() || '#7c3aed';
    themeColors.secondary = style.getPropertyValue('--secondary-color').trim() || '#db2777';
  }
  updateColors();
  
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  }
  
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 2 + 1;
      this.vx = (Math.random() * 0.8) - 0.4;
      this.vy = (Math.random() * 0.8) - 0.4;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = themeColors.main;
      ctx.fill();
    }
    
    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      
      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          let directionX = dx / distance;
          let directionY = dy / distance;
          
          this.x += directionX * force * 1.5;
          this.y += directionY * force * 1.5;
        }
      }
    }
  }
  
  function createParticles() {
    particles = [];
    const quantity = Math.floor((canvas.width * canvas.height) / 22000);
    const particleCount = Math.min(quantity, 65);
    
    for (let i = 0; i < particleCount; i++) {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      particles.push(new Particle(x, y));
    }
  }
  
  function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 110) {
          opacityValue = 1 - (distance / 110);
          ctx.strokeStyle = `rgba(124, 58, 237, ${opacityValue * 0.15})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateColors();
    
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    
    connect();
    requestAnimationFrame(animate);
  }
  
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      setTimeout(updateColors, 50);
    });
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  animate();
}

// ========== Dynamic Copyright Year ==========
function initCopyrightYear() {
  const copyrightSpan = document.getElementById('copyright-year');
  if (copyrightSpan) {
    copyrightSpan.textContent = new Date().getFullYear();
  }
}

// ========== Premium Page Transitions ==========
function initPageTransitions() {
  const transitionLinks = document.querySelectorAll('.navbar a, .logo, .btn-box, .btn-group a, .about-text .btn-box');
  
  transitionLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      const target = this.getAttribute('target');
      
      if (
        href && 
        !href.startsWith('#') && 
        !href.startsWith('http') && 
        target !== '_blank' && 
        !href.includes('mailto') && 
        !href.includes('tel')
      ) {
        e.preventDefault();
        
        const contents = document.querySelectorAll('section, footer');
        contents.forEach(el => {
          el.classList.add('page-exit-slide');
        });
        
        setTimeout(() => {
          window.location.href = href;
        }, 400);
      }
    });
  });
}

// ========== Top Viewport Scroll Progress ==========
function updateScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress-bar');
  if (!progressBar) return;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (totalHeight === 0) return;
  const progress = (window.scrollY / totalHeight) * 100;
  progressBar.style.width = `${progress}%`;
}

// ========== Technical Skills Tabs Filter ==========
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillBars = document.querySelectorAll('.Technical-bars .bar');
  
  if (filterBtns.length === 0 || skillBars.length === 0) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      skillBars.forEach(bar => {
        const category = bar.getAttribute('data-skill-category');
        if (filterValue === 'all' || category === filterValue) {
          bar.style.display = '';
          // Force layout reflow
          void bar.offsetWidth;
          bar.style.opacity = '1';
          bar.style.transform = 'translateY(0) scale(1)';
        } else {
          bar.style.opacity = '0';
          bar.style.transform = 'translateY(10px) scale(0.95)';
          setTimeout(() => {
            if (bar.style.opacity === '0') {
              bar.style.display = 'none';
            }
          }, 300);
        }
      });
    });
  });
}

// ========== Projects Slider Carousel ==========
function initPortfolioSlider() {
  const slider = document.querySelector('.portfolio-slider');
  const track = document.querySelector('.portfolio-content');
  const prevBtn = document.querySelector('.portfolio-prev');
  const nextBtn = document.querySelector('.portfolio-next');
  const dotsContainer = document.querySelector('.portfolio-dots');

  if (!slider || !track || !prevBtn || !nextBtn || !dotsContainer) return;

  let currentIndex = 0;
  let maxIndex = 0;

  function getVisibleCards() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1200) return 2;
    return 3;
  }

  function getStepSize() {
    const cards = Array.from(track.querySelectorAll('.project-card')).filter(card => card.style.display !== 'none');
    if (cards.length === 0) return 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return cards[0].getBoundingClientRect().width + gap;
  }

  function buildDots() {
    dotsContainer.innerHTML = '';
    const cards = Array.from(track.querySelectorAll('.project-card')).filter(card => card.style.display !== 'none');
    maxIndex = Math.max(0, cards.length - getVisibleCards());
    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'portfolio-dot';
      dot.setAttribute('aria-label', `Go to project slide ${i + 1}`);
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    const cards = Array.from(track.querySelectorAll('.project-card')).filter(card => card.style.display !== 'none');
    maxIndex = Math.max(0, cards.length - getVisibleCards());
    currentIndex = Math.min(currentIndex, maxIndex);
    
    const dots = dotsContainer.querySelectorAll('.portfolio-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });

    track.style.transform = `translateX(-${currentIndex * getStepSize()}px)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === maxIndex;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(maxIndex, currentIndex + 1);
    updateSlider();
  });

  window.addEventListener('resize', () => {
    buildDots();
    updateSlider();
  });

  window.resetPortfolioSlider = function() {
    currentIndex = 0;
    buildDots();
    updateSlider();
  };

  window.resetPortfolioSlider();
}

window.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initCopyrightYear();
  initAchievementsSlider();
  initPortfolioSlider();
  initPageTransitions();
  initTypedAnimation();
  initScrollReveal();
  initSkillsFilter();
  
  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress();
  
  // ========== Dynamic Mouse-Wheel Horizontal Scroll Translation ==========
  const wrapper = document.querySelector('.portfolio-horizontal-wrapper');
  if (wrapper) {
    wrapper.addEventListener('wheel', (e) => {
      // Only translate scroll on desktop screens where horizontal view is active
      if (window.innerWidth >= 992) {
        e.preventDefault();
        wrapper.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  }
});
