(() => {
  'use strict';
  const data = window.IANA_MENU;
  const root = document.getElementById('menu-content');
  const week = document.getElementById('week');
  if (!data || !root) { if (root) root.textContent = 'Meniul nu poate fi incarcat momentan.'; return; }
  week.textContent = data.week;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const normalize = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  // Ora locala a bistroului (Romania), indiferent de fusul orar al clientului.
  const bucharestDay = new Intl.DateTimeFormat('en-US', {weekday:'short',timeZone:'Europe/Bucharest'}).format(new Date());
  const weekdayIndex = {Mon:0,Tue:1,Wed:2,Thu:3,Fri:4}[bucharestDay];
  const isWeekend = weekdayIndex === undefined;
  let dayIndex = isWeekend ? 0 : weekdayIndex, tab = 'food', search = '';
  const price = n => `<span class="price">${n} <small>RON</small></span>`;
  const allergens = item => Array.isArray(item.allergens)&&item.allergens.length ? `Alergeni: ${item.allergens.join(', ')}` : item.allergenStatus==='none' ? 'Alergeni: niciunul dintre cei 14 identificat' : 'Alergeni: consultati personalul';
  const mkDetails = item => {
    const ingredients = item.ingredients ? `<p><strong>Ingrediente:</strong> ${esc(item.ingredients)}</p>` : '<p>Lista completa a ingredientelor nu a fost furnizata in document.</p>';
    const traces = item.traces ? `<div class="traces"><strong>Posibile urme:</strong> ${esc(item.traces)}</div>` : '';
    const checks = item.check ? `<div class="verify"><strong>De verificat:</strong> ${esc(item.check)}</div>` : '';
    return `<div class="dish-detail" hidden>${ingredients}${traces}${checks}</div>`;
  };
  const dish = (item, id) => `<div class="dish">
    <button class="dish-button" aria-expanded="false" aria-controls="${id}" type="button" data-expand>
      <span class="dish-copy"><span class="dish-title">${esc(item.name)}</span><span class="dish-sub"><span>${esc(item.quantity||'Gramaj neprecizat')}</span><span aria-hidden="true">·</span><span class="allergen-text">${esc(allergens(item))}</span></span></span>
      <span class="expand-icon" aria-hidden="true">⌄</span>
    </button><div id="${id}" class="dish-detail" hidden>
       ${item.ingredients ? `<p><strong>Ingrediente:</strong> ${esc(item.ingredients)}</p>` : '<p>Ingredientele nu au fost furnizate.</p>'}
       ${item.traces ? `<div class="traces"><strong>Posibile urme:</strong> ${esc(item.traces)}</div>`:''}
       ${item.note ? `<p><strong>Nota:</strong> ${esc(item.note)}</p>`:''}
       ${item.check ? `<div class="verify"><strong>De verificat:</strong> ${esc(item.check)}</div>`:''}
    </div></div>`;
  function renderFood() {
    const day = data.days[dayIndex];
    return `${isWeekend ? '<p class="weekend-hint">Este weekend. Poti consulta meniul oricarei zile din saptamana.</p>' : ''}<div class="days" role="group" aria-label="Alege ziua">${data.days.map((d,i)=>`<button type="button" class="day-btn" data-day="${i}" aria-pressed="${i===dayIndex}">${esc(d.label)}</button>`).join('')}</div>
      <div class="section-head"><h1>${esc(day.label)}</h1><p>${esc(day.date)} · Meniul zilei</p></div>
      ${day.menus.map((m,j)=>`<section class="menu-card" aria-label="${esc(m.label)}">
        <div class="menu-card-head"><div class="left"><h3>${esc(m.label)}</h3>${m.vegetarian?'<span class="pill">Vegetarian</span>':''}</div>${price(m.price)}</div>
        ${m.dishes.map((d,k)=>dish(d,`dish-${day.key}-${j}-${k}`)).join('')}
        ${m.alternative ? `<div class="menu-alternative"><span>sau · alternativa la felul principal</span></div>${dish(m.alternative,`dish-${day.key}-${j}-alternative`)}` : ''}
      </section>`).join('')}
      <section class="dessert-card" aria-label="Desertul zilei"><div class="dessert-label"><h3>Desertul zilei</h3><span class="inclusive ${day.dessert.included===null?'uncertain':''}">${day.dessert.included===true?'Inclus in meniu':day.dessert.included===null?'Includere de confirmat':''}</span></div>
        ${dish(day.dessert,`dessert-${day.key}`)}</section>
      <p class="hint">Apasa pe un preparat pentru ingrediente</p>
      <div class="notice">Alergenii sunt indicati conform retetelor si compozitiilor transmise. Posibilele urme declarate de furnizori apar la detaliile preparatului. Pentru intrebari despre alergeni, consulta personalul.</div>`;
  }
  function productsList(items) {
    const filtered=items.filter(i=>normalize(i.name+' '+(i.note||'')).includes(normalize(search)));
    return filtered.map((p,i)=>{
      const details = !!p.check || !!p.ingredients || !!p.traces || !!p.allergens?.length;
      const meta = [p.note || '', p.allergens?.length ? allergens(p):'', p.check ? 'Alergeni de verificat' : ''].filter(Boolean).map(esc).join(' · ');
      if (!details) return `<div class="product-btn" style="cursor:default"><span><span class="product-name">${esc(p.name)}</span>${meta?`<div class="product-sub">${meta}</div>`:''}</span><span class="product-price">${p.price} <small>RON</small></span></div>`;
      const id=`item-${tab}-${i}-${Math.abs(p.name.split('').reduce((a,c)=>a+c.charCodeAt(0),0))}`;
      return `<div class="dish"><button class="product-btn" aria-controls="${id}" aria-expanded="false" data-expand type="button"><span><span class="product-name">${esc(p.name)}</span>${meta?`<div class="product-sub">${meta}</div>`:''}<div class="product-sub">Apasa pentru detalii</div></span><span class="product-price">${p.price} <small>RON</small> <span aria-hidden="true">⌄</span></span></button><div id="${id}" class="dish-detail" hidden>${p.ingredients?`<p><strong>Ingrediente:</strong> ${esc(p.ingredients)}</p>`:''}${p.traces?`<div class="traces"><strong>Posibile urme:</strong> ${esc(p.traces)}</div>`:''}${p.check?`<div class="verify"><strong>De verificat:</strong> ${esc(p.check)}</div>`:''}</div></div>`;
    }).join('');
  }
  function renderProducts() {
    const drinkTab=tab==='drinks';
    const groups = drinkTab?data.drinks:[{category:'Produse de patiserie',items:data.pastry}];
    const total=groups.reduce((n,g)=>n+g.items.filter(i=>normalize(i.name+' '+(i.note||'')).includes(normalize(search))).length,0);
    return `<div class="section-head"><h1>${drinkTab?'Cafea & bauturi':'Patiserie'}</h1><p>${drinkTab?'Un moment de rasfat':'Gustari proaspete'}</p></div>
      <label class="search"><span aria-hidden="true">⌕</span><input type="search" data-search placeholder="Cauta un produs..." aria-label="Cauta un produs" value="${esc(search)}"></label>
      ${groups.map(g=>{const html=productsList(g.items);return html?`<section><h2 class="listing-header">${esc(g.category)}</h2>${html}</section>`:''}).join('')}
      ${total ? '' : '<p class="empty">Nu am gasit produse pentru aceasta cautare.</p>'}
      <div class="notice">Pentru bauturile fara compozitie detaliata in meniu, informatiile despre alergeni pot fi solicitate personalului.</div>`;
  }
  function renderLegend(){return `<div class="section-head"><h1>Ghidul alergenilor</h1><p>Numerotarea europeana · 14 categorii</p></div><div class="legend-grid">${data.allergenLegend.map((a,i)=>`<div class="legend-item"><span class="legend-n">${i+1}</span><span>${esc(a)}</span></div>`).join('')}</div><p class="legend-note">Alergenii sunt identificati pe baza retetelor si a compozitiilor comunicate pentru ingredientele folosite. Preparatele fara alergeni identificati sunt marcate explicit. Pentru posibile urme mentionate pe etichetele furnizorilor, deschide detaliile produsului. Pentru clarificari, intreaba personalul.</p>`}
  function setTab(next){tab=next;search='';document.querySelectorAll('[data-tab]').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.tab===next)));render();}
  function render(){root.innerHTML=tab==='food'?renderFood():tab==='legend'?renderLegend():renderProducts();}
  document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab)));
  document.getElementById('allergen-link').addEventListener('click',()=>{setTab('legend');window.scrollTo({top:0,behavior:'smooth'});});
  root.addEventListener('click',ev=>{
    const day=ev.target.closest('[data-day]'); if(day){dayIndex=Number(day.dataset.day);render();return;}
    const btn=ev.target.closest('[data-expand]');if(!btn)return;
    const target=document.getElementById(btn.getAttribute('aria-controls'));if(!target)return;
    const expanding=btn.getAttribute('aria-expanded')!=='true';btn.setAttribute('aria-expanded',String(expanding));target.hidden=!expanding;
  });
  root.addEventListener('input',ev=>{if(!ev.target.matches('[data-search]'))return;search=ev.target.value;const cursor=ev.target.selectionStart;const active=true;render();const input=root.querySelector('[data-search]');if(active&&input){input.focus();input.setSelectionRange(cursor,cursor);}});
  render();
})();
