(() => {
  const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.primary-nav');
  function close(){if(!toggle||!nav)return;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');nav.classList.remove('is-open');document.body.classList.remove('menu-open')}
  if(toggle&&nav){toggle.addEventListener('click',()=>{let open=toggle.getAttribute('aria-expanded')==='true';if(open)close();else{toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Close navigation');nav.classList.add('is-open');document.body.classList.add('menu-open')}});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});window.addEventListener('resize',()=>{if(window.innerWidth>800)close()})}
  const y=document.querySelector('#year');if(y)y.textContent=String(new Date().getFullYear());
})();