/* ============================================
   SOLVESPHERE — GOD LEVEL ENGINE
   ============================================ */

const CONFIG = {
    images: {
        logo: 'assets/logo.png',
        favicon: 'assets/favicon.png',
        heroBook: 'assets/hero-book.png',
        bookCover: 'assets/book-cover.png',
        chapterPlaceholder: 'assets/chapter-placeholder.png',
        ogImage: 'assets/og-image.png'
    },
    products: [
        { chapter: 'Chapter 1', title: 'Electric Charges and Fields', desc: "Coulomb's law, electric field, dipole and flux numericals fully solved.", price: '₹50', link: 'https://adnanmerchant.gumroad.com/l/mptrou' },
        { chapter: 'Chapter 2', title: 'Electrostatic Potential and Capacitance', desc: 'Potential, equipotential surfaces, capacitors and energy problems solved.', price: '₹50', link: 'https://adnanmerchant.gumroad.com/l/wkbeva' },
        { chapter: 'Chapter 3', title: 'Current Electricity', desc: "Ohm's law, Kirchhoff's rules, Wheatstone bridge and meter bridge solutions.", price: '₹50', link: 'https://adnanmerchant.gumroad.com/l/ipivp' }
    ]
};

/* ─── Ambient Canvas Background ─── */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H;
let blobs = [
    { x: 0.2, y: 0.3, r: 0.45, vx: 0.0002, vy: 0.0003, color: 'rgba(59, 130, 246, 0.18)' },
    { x: 0.8, y: 0.6, r: 0.40, vx: -0.0003, vy: 0.0002, color: 'rgba(139, 92, 246, 0.14)' },
    { x: 0.5, y: 0.8, r: 0.35, vx: 0.0002, vy: -0.00025, color: 'rgba(16, 185, 129, 0.10)' }
];

function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}

function drawCanvas() {
    ctx.clearRect(0, 0, W, H);
    blobs.forEach(b => {
        b.x += b.vx; b.y += b.vy;
        if (b.x < -0.2 || b.x > 1.2) b.vx *= -1;
        if (b.y < -0.2 || b.y > 1.2) b.vy *= -1;
        const g = ctx.createRadialGradient(b.x * W, b.y * H, 0, b.x * W, b.y * H, b.r * Math.max(W, H));
        g.addColorStop(0, b.color);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
    });
    requestAnimationFrame(drawCanvas);
}

/* ─── Render Chapter Cards ─── */
function renderCards() {
    const grid = document.getElementById('cards-grid');
    if (!grid) return;
    grid.innerHTML = CONFIG.products.map(p => `
        <article class="pdf-card reveal">
            <div class="pdf-cover pdf-cover-placeholder">
                <span class="pdf-cover-chapter">${p.chapter}</span>
            </div>
            <h3 class="pdf-chapter">${p.title}</h3>
            <p class="pdf-desc">${p.desc}</p>
            <div class="pdf-price">${p.price}</div>
            <a href="${p.link}" class="btn btn-primary btn-buy" target="_blank" rel="noopener noreferrer">Buy Now</a>
        </article>
    `).join('');
}

/* ─── Scroll Reveal ─── */
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), index * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ─── Header Scroll Effect ─── */
function initHeader() {
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });
}

/* ─── Mobile Menu ─── */
function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        nav.classList.toggle('active');
    });
    nav.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
    }));
}

/* ─── Smooth Scroll ─── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            if (id === '#') return;
            const el = document.querySelector(id);
            if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
}

/* ─── Year ─── */
function setYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
}

/* ─── Boot ─── */
document.addEventListener('DOMContentLoaded', () => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawCanvas();
    renderCards();
    initReveal();
    initHeader();
    initMobileMenu();
    initSmoothScroll();
    setYear();
});
