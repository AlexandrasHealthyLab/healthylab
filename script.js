const intro=document.getElementById('intro');
window.addEventListener('load',()=>setTimeout(()=>intro?.classList.add('hide'),850));

const progress=document.querySelector('.progress');
const backToTop=document.getElementById('backToTop');
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(scrollY/h*100)+'%';
  backToTop?.classList.toggle('show',scrollY>520);
});
backToTop?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

const rotatingPhrases=[
  'Εξατομικευμένη διατροφική φροντίδα.',
  'Επιστημονικά τεκμηριωμένη προσέγγιση.',
  'Χωρίς στερήσεις. Με διάρκεια.',
  'Μαζί χτίζουμε συνήθειες που διαρκούν.'
];
let phraseIndex=0;
const rotatingText=document.getElementById('rotatingText');
setInterval(()=>{
  if(!rotatingText) return;
  rotatingText.classList.add('swap');
  setTimeout(()=>{
    phraseIndex=(phraseIndex+1)%rotatingPhrases.length;
    rotatingText.textContent=rotatingPhrases[phraseIndex];
    rotatingText.classList.remove('swap');
  },350);
},2800);

const menuBtn=document.getElementById('menuBtn'),mobileMenu=document.getElementById('mobileMenu');
menuBtn?.addEventListener('click',()=>mobileMenu.classList.toggle('open'));
mobileMenu?.querySelectorAll('a,button').forEach(x=>x.addEventListener('click',()=>mobileMenu.classList.remove('open')));

const reveals=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
reveals.forEach(el=>io.observe(el));

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const f=btn.dataset.filter;
  document.querySelectorAll('.service-card').forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.category!==f));
}));

const reviews=[
  {name:'Iwanna S.',text:'Εξαιρετική επαγγελματίας και πολύ προσιτή, με έκανε να νιώσω άνετα από την πρώτη στιγμή. Το πρόγραμμα ήταν απόλυτα προσαρμοσμένο στις ανάγκες μου και εύκολο να το ακολουθήσω.'},
  {name:'Έλενα Γερ.',text:'Μου έκαναν εντύπωση οι πρωτότυπες ιδέες της που δεν έμοιαζαν με τα παλιά, βαρετά προγράμματα. Με βοήθησε όχι μόνο να χάσω κιλά, αλλά και να υιοθετήσω έναν πιο υγιεινό τρόπο ζωής.'},
  {name:'Giorgos L.',text:'Πολύ καλή καθοδήγηση, ανθρώπινη προσέγγιση και πρόγραμμα που προσαρμόζεται στην καθημερινότητα.'}
];
let r=0;
const reviewText=document.getElementById('reviewText'),reviewName=document.getElementById('reviewName'),reviewCard=document.getElementById('reviewCard');
function renderReview(){
  reviewCard?.classList.add('fade');
  setTimeout(()=>{
    reviewText.textContent=reviews[r].text;
    reviewName.textContent=reviews[r].name;
    reviewCard?.classList.remove('fade');
  },180);
}
document.getElementById('nextReview')?.addEventListener('click',()=>{r=(r+1)%reviews.length;renderReview()});
document.getElementById('prevReview')?.addEventListener('click',()=>{r=(r-1+reviews.length)%reviews.length;renderReview()});
setInterval(()=>{r=(r+1)%reviews.length;renderReview()},7000);

document.querySelectorAll('.faq-item').forEach(item=>item.addEventListener('click',()=>item.classList.toggle('open')));

const booking=document.getElementById('bookingModal');
document.querySelectorAll('[data-open-booking]').forEach(b=>b.addEventListener('click',()=>booking.showModal()));
document.getElementById('closeBooking')?.addEventListener('click',()=>booking.close());

const lightbox=document.getElementById('lightbox'),lightboxImg=document.getElementById('lightboxImg');
document.querySelectorAll('[data-lightbox]').forEach(b=>b.addEventListener('click',()=>{lightboxImg.src=b.dataset.lightbox;lightbox.showModal()}));
document.getElementById('closeLightbox')?.addEventListener('click',()=>lightbox.close());

const cookie=document.getElementById('cookieNotice');
if(localStorage.getItem('healthyLabCookies')==='ok') cookie?.classList.add('hide');
document.getElementById('acceptCookies')?.addEventListener('click',()=>{localStorage.setItem('healthyLabCookies','ok');cookie?.classList.add('hide')});
