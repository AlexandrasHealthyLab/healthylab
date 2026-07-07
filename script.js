window.addEventListener('load',()=>{setTimeout(()=>document.getElementById('loader')?.classList.add('hide'),750)});
const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const h=document.documentElement; const p=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100; progress.style.width=p+'%'; document.getElementById('topBtn').classList.toggle('show',scrollY>500)});
document.getElementById('topBtn')?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
document.getElementById('menuToggle')?.addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const reviews=[...document.querySelectorAll('.review-card')]; let idx=0;
function showReview(n){reviews[idx].classList.remove('active'); idx=(n+reviews.length)%reviews.length; reviews[idx].classList.add('active')}
document.getElementById('nextReview')?.addEventListener('click',()=>showReview(idx+1));
document.getElementById('prevReview')?.addEventListener('click',()=>showReview(idx-1));
setInterval(()=>{if(reviews.length)showReview(idx+1)},6500);
const lb=document.getElementById('lightbox'), lbImg=document.getElementById('lightboxImg');
document.querySelectorAll('.zoomable').forEach(img=>img.addEventListener('click',()=>{lbImg.src=img.src; lbImg.alt=img.alt; lb.classList.add('open')}));
document.getElementById('closeLightbox')?.addEventListener('click',()=>lb.classList.remove('open'));
lb?.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open')});
