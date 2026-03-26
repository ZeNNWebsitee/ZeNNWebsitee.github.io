// ===== SMOOTH SCROLL FUNCTIONS =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== CONTACT FUNCTIONS =====
function openWhatsApp() {
    const phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp Anda
    const message = encodeURIComponent('Halo Admin, saya ingin informasi lebih lanjut tentang AllGame Pro.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

function openTelegram() {
    const telegramId = 'AllGamePro'; // Ganti dengan username Telegram Anda
    window.open(`https://t.me/${telegramId}`, '_blank');
}

function openEmail() {
    const email = 'support@allgamepro.com'; // Ganti dengan email Anda
    const subject = encodeURIComponent('Pertanyaan AllGame Pro');
    const body = encodeURIComponent('Halo, saya ingin menanyakan tentang produk Anda.');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

// ===== PRODUCT INTERACTION =====
function buyProduct(productName) {
    alert(`Terima kasih! Anda memilih ${productName}.\n\nSilakan hubungi admin melalui:\n✓ WhatsApp\n✓ Telegram\n✓ Email`);
    openWhatsApp();
}

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    // Set target time (24 hours from now)
    const targetTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = targetTime - now;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }, 1000);
}

// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .feature-box, .testimonial-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

// ===== ACTIVE NAV LINK =====
const navLinksElements = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-light)';
        }
    });
});

// ===== FORM VALIDATION (Optional) =====
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== ANIMATIONS ON PAGE LOAD =====
window.addEventListener('load', () => {
    updateCountdown();
    
    // Add entrance animations
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// ===== MOBILE MENU CLOSE ON LINK CLICK =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.display = 'none';
        hamburger.classList.remove('active');
    });
});

// ===== BACK TO TOP BUTTON =====
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 500) {
        // Could add a back-to-top button here
    }
});

// ===== DYNAMIC CONTENT LOADER =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 AllGame Pro Website Loaded Successfully!');
    console.log('Support: WhatsApp, Telegram, Email');
});