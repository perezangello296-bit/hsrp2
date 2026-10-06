const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
// Barra de progreso de lectura
addEventListener('scroll',()=>{const h=document.documentElement;$('#bar').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'});
// Aparición al hacer scroll + contadores
const io=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;x.target.classList.add('show');
  x.target.querySelectorAll('[data-n]').forEach(c=>{const n=+c.dataset.n;let v=0;const t=setInterval(()=>{v+=Math.ceil(n/30);if(v>=n){v=n;clearInterval(t)}c.textContent=v},40)});
  io.unobserve(x.target)}),{threshold:.15});
$$('.rev,.stats').forEach(x=>io.observe(x));
// Inclinación 3D de tarjetas con el mouse
$$('.flip').forEach(c=>{
  c.onclick=()=>c.classList.toggle('on');
  c.onmousemove=e=>{const r=c.getBoundingClientRect();c.style.transform=`rotateX(${-((e.clientY-r.top)/r.height-.5)*10}deg) rotateY(${((e.clientX-r.left)/r.width-.5)*10}deg)`};
  c.onmouseleave=()=>c.style.transform='';
});