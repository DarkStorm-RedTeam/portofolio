// ============================================================
//  SCHEDULE RENDER — uses bilingual data from lang.js
// ============================================================
function renderSchedule(day) {
  const lang = window.currentLang ? window.currentLang() : 'ar';
  const data = window.scheduleData[lang][day];
  const t = window.translations[lang];
  const tbody = document.getElementById('scheduleBody');
 
  tbody.innerHTML = data.map(r => `
    <tr>
      <td><strong>${r.time}</strong></td>
      <td><span class="class-badge ${r.badge}">${r.cls}</span></td>
      <td>${r.trainer}</td>
      <td>${r.dur}</td>
      <td><span class="level">${r.lvl}</span></td>
      <td><a href="#contact" class="btn-outline" style="padding:8px 18px;font-size:11px;white-space:nowrap">${t.book}</a></td>
    </tr>
  `).join('');
}
 
function switchTab(btn, day) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderSchedule(day);
}
 
// ============================================================
//  NAVBAR SCROLL
// ============================================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
 
  const scrollBtn = document.getElementById('scrollTop');
  if (window.scrollY > 400) scrollBtn.classList.add('visible');
  else scrollBtn.classList.remove('visible');
});
 
// ============================================================
//  HAMBURGER MENU
// ============================================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
 
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
 
function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}
 
// ============================================================
//  REVEAL ANIMATIONS
// ============================================================
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(el => observer.observe(el));
 
// ============================================================
//  CONTACT FORM SUBMIT
// ============================================================
document.querySelector('.form-submit').addEventListener('click', function () {
  const lang = window.currentLang ? window.currentLang() : 'ar';
  const t = window.translations[lang];
  this.textContent = t.form_success;
  this.style.background = '#1a8a4a';
  setTimeout(() => {
    this.textContent = t.form_submit;
    this.style.background = '';
  }, 3000);
});
 
// ============================================================
//  INIT — apply saved language on page load
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('ironforge_lang') || 'ar';
  window.applyLanguage(savedLang);
});
