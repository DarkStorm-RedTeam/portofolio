// SCHEDULE DATA
const scheduleData = {
  sat:[
    {time:'06:00 ص',cls:'رفع الأثقال',trainer:'أحمد محمد',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-red'},
    {time:'07:30 ص',cls:'كارديو حرق',trainer:'منى خالد',dur:'45 دقيقة',lvl:'مبتدئ',badge:'badge-white'},
    {time:'09:00 ص',cls:'يوجا الصباح',trainer:'سارة علي',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
    {time:'11:00 ص',cls:'كروس فيت',trainer:'كريم حسن',dur:'75 دقيقة',lvl:'متقدم',badge:'badge-gold'},
    {time:'05:00 م',cls:'بوكسينج',trainer:'أحمد محمد',dur:'60 دقيقة',lvl:'متوسط',badge:'badge-red'},
    {time:'07:00 م',cls:'تدريب ليلي',trainer:'كريم حسن',dur:'90 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
  ],
  sun:[
    {time:'07:00 ص',cls:'كروس فيت الصباح',trainer:'كريم حسن',dur:'60 دقيقة',lvl:'متقدم',badge:'badge-gold'},
    {time:'09:00 ص',cls:'رفع أثقال',trainer:'أحمد محمد',dur:'75 دقيقة',lvl:'متوسط',badge:'badge-red'},
    {time:'11:00 ص',cls:'كارديو ونشاط',trainer:'منى خالد',dur:'45 دقيقة',lvl:'مبتدئ',badge:'badge-white'},
    {time:'06:00 م',cls:'يوجا المساء',trainer:'سارة علي',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
    {time:'08:00 م',cls:'بوكسينج ليلي',trainer:'أحمد محمد',dur:'60 دقيقة',lvl:'متوسط',badge:'badge-red'},
  ],
  mon:[
    {time:'06:30 ص',cls:'رفع الأثقال',trainer:'أحمد محمد',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-red'},
    {time:'10:00 ص',cls:'يوجا',trainer:'سارة علي',dur:'60 دقيقة',lvl:'مبتدئ',badge:'badge-white'},
    {time:'12:00 م',cls:'كارديو مكثف',trainer:'منى خالد',dur:'45 دقيقة',lvl:'متوسط',badge:'badge-white'},
    {time:'05:30 م',cls:'كروس فيت',trainer:'كريم حسن',dur:'75 دقيقة',lvl:'متقدم',badge:'badge-gold'},
  ],
  tue:[
    {time:'07:00 ص',cls:'بوكسينج',trainer:'أحمد محمد',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-red'},
    {time:'09:30 ص',cls:'كارديو',trainer:'منى خالد',dur:'45 دقيقة',lvl:'مبتدئ',badge:'badge-white'},
    {time:'06:00 م',cls:'رفع الأثقال',trainer:'أحمد محمد',dur:'75 دقيقة',lvl:'متقدم',badge:'badge-red'},
    {time:'08:00 م',cls:'يوجا المساء',trainer:'سارة علي',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
  ],
  wed:[
    {time:'06:00 ص',cls:'كروس فيت مبكر',trainer:'كريم حسن',dur:'60 دقيقة',lvl:'متقدم',badge:'badge-gold'},
    {time:'08:00 ص',cls:'يوجا الصباح',trainer:'سارة علي',dur:'60 دقيقة',lvl:'مبتدئ',badge:'badge-white'},
    {time:'05:00 م',cls:'رفع الأثقال',trainer:'أحمد محمد',dur:'75 دقيقة',lvl:'متوسط',badge:'badge-red'},
    {time:'07:30 م',cls:'كارديو ليلي',trainer:'منى خالد',dur:'45 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
  ],
  thu:[
    {time:'07:00 ص',cls:'رفع الأثقال',trainer:'أحمد محمد',dur:'90 دقيقة',lvl:'جميع المستويات',badge:'badge-red'},
    {time:'10:00 ص',cls:'كروس فيت',trainer:'كريم حسن',dur:'75 دقيقة',lvl:'متوسط',badge:'badge-gold'},
    {time:'04:30 م',cls:'بوكسينج',trainer:'أحمد محمد',dur:'60 دقيقة',lvl:'متقدم',badge:'badge-red'},
    {time:'07:00 م',cls:'يوجا الاسترخاء',trainer:'سارة علي',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
  ],
  fri:[
    {time:'08:00 ص',cls:'يوجا وتأمل',trainer:'سارة علي',dur:'75 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
    {time:'10:30 ص',cls:'كارديو حر',trainer:'منى خالد',dur:'60 دقيقة',lvl:'مبتدئ',badge:'badge-white'},
    {time:'06:00 م',cls:'رفع الأثقال',trainer:'أحمد محمد',dur:'90 دقيقة',lvl:'جميع المستويات',badge:'badge-red'},
  ]
};

function renderSchedule(day){
  const tbody=document.getElementById('scheduleBody');
  tbody.innerHTML=scheduleData[day].map(r=>`
    <tr>
      <td><strong>${r.time}</strong></td>
      <td><span class="class-badge ${r.badge}">${r.cls}</span></td>
      <td>${r.trainer}</td>
      <td>${r.dur}</td>
      <td><span class="level">${r.lvl}</span></td>
      <td><a href="#contact" class="btn-outline" style="padding:8px 18px;font-size:11px;white-space:nowrap">احجز</a></td>
    </tr>
  `).join('');
}

function switchTab(btn,day){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderSchedule(day);
}
renderSchedule('sat');

// NAVBAR SCROLL
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  if(window.scrollY>80) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
  const scrollBtn=document.getElementById('scrollTop');
  if(window.scrollY>400) scrollBtn.classList.add('visible');
  else scrollBtn.classList.remove('visible');
});

// HAMBURGER
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');
hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow=mobileMenu.classList.contains('open')?'hidden':'';
});
function closeMenu(){
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow='';
}

// REVEAL ANIMATIONS
const revealEls=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=>e.target.classList.add('visible'),i*80);
    }
  });
},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
revealEls.forEach(el=>observer.observe(el));

// FORM SUBMIT
document.querySelector('.form-submit').addEventListener('click',function(){
  this.textContent='تم الإرسال ✓';
  this.style.background='#1a8a4a';
  setTimeout(()=>{this.textContent='إرسال الطلب ←';this.style.background=''},3000);
});