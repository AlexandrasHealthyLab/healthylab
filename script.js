const CAL_URL='https://cal.com/%CE%B1%CE%BB%CE%B5%CE%BE%CE%B1%CE%BD%CE%B4%CF%81%CE%B1-%CE%BC%CE%B7%CE%BB%CE%B9%CE%BF%CF%85-fb84uq';
const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+'%'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const menuBtn=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const booking=document.querySelector('.booking-modal');
function openModal(m){m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(m){m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('.open-booking').forEach(b=>b.addEventListener('click',()=>openModal(booking)));
document.querySelector('.open-cv')?.addEventListener('click',()=>openModal(document.querySelector('.cv-modal')));
document.querySelectorAll('.modal').forEach(m=>{m.querySelector('.modal-backdrop')?.addEventListener('click',()=>closeModal(m));m.querySelector('.modal-close')?.addEventListener('click',()=>closeModal(m))});
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal.open,.lightbox.open').forEach(closeModal)});
const chips=document.querySelectorAll('.chip'), cards=document.querySelectorAll('.service-card');
chips.forEach(chip=>chip.addEventListener('click',()=>{chips.forEach(c=>c.classList.remove('active'));chip.classList.add('active');const f=chip.dataset.filter;cards.forEach(card=>card.classList.toggle('hidden',!(f==='all'||card.dataset.category===f||card.dataset.category==='all'&&f==='all')))}));
let idx=0;const reviews=[...document.querySelectorAll('.review-card')];function showReview(i){reviews.forEach(r=>r.classList.remove('active'));idx=(i+reviews.length)%reviews.length;reviews[idx].classList.add('active')}document.querySelector('.next')?.addEventListener('click',()=>showReview(idx+1));document.querySelector('.prev')?.addEventListener('click',()=>showReview(idx-1));setInterval(()=>showReview(idx+1),6500);
const lb=document.querySelector('.lightbox'), lbImg=lb.querySelector('img');document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',()=>{lbImg.src=el.dataset.lightbox;lb.classList.add('open');lb.setAttribute('aria-hidden','false')}));document.querySelector('.lightbox-close').addEventListener('click',()=>{lb.classList.remove('open');lb.setAttribute('aria-hidden','true');lbImg.src='' });lb.addEventListener('click',e=>{if(e.target===lb){lb.classList.remove('open');lbImg.src=''}});
