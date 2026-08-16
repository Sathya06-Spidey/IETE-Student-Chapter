const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('#mainNav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open?'true':'false');});}
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav a').forEach(link=>{if(link.getAttribute('href')===current)link.classList.add('active');link.addEventListener('click',()=>nav?.classList.remove('open'));});
document.querySelectorAll('.js-register').forEach(button=>button.addEventListener('click',()=>alert('Registration details will be published here soon.')));
const contactForm=document.querySelector('#contactForm');
if(contactForm){contactForm.addEventListener('submit',event=>{event.preventDefault();const name=contactForm.querySelector('input')?.value||'there';alert(`Thank you, ${name}! Your message has been recorded on this demo form. Connect this form to your preferred email service before publishing.`);contactForm.reset();});}
