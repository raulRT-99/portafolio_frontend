import {BACKEND_URL} from './constants.js';

document.addEventListener('DOMContentLoaded', function() {
  const lang = window.location.pathname.split('/')[1];
        // const lang = event.currentTarget.value; // "es" o "en"
        const endpoint = lang === 'es' ? BACKEND_URL+'/constancias': BACKEND_URL+'/constancias/en';
        fetch(endpoint)
          .then(response => response.json())
          .then(data_original => {
            const contentElem = document.getElementById('certifications');
            console.log(data_original);
            if (contentElem) {
              const data = data_original.response
              const view_html = [];

              data.forEach((a, i) => {
              if (i % 2 === 0) {
                const itemHtml = `<div class="card mb-3 border-0 bg-transparent" style="max-width: 850px;">
                <div class="row g-0">
      <div class="col-md-5">
        <img src="${BACKEND_URL}${a.image}" class="img-fluid rounded-start">
      </div>
      <div class="col-md-7">
        <div class="card-body">
          <h4 class="card-title bold">${a.title}</h4>
          <p class="card-text">${a.place} - ${a.date}</p>
          <p class="card-text"><small class="text-body-secondary">${a.extra}</small></p>
        </div>
      </div>
      </div>
    </div>`;
                  view_html.push(itemHtml);
              } else {
                const itemHtml = `<div class="d-flex">
                <div class="card mb-3 border-0 bg-transparent ms-auto" style="max-width: 850px;">
                <div class="row g-0">
      <div class="col-md-7 right_align">
        <div class="card-body">
         <h4 class="card-title bold">${a.title}</h4>
          <p class="card-text">${a.place} - ${a.date}</p>
          <p class="card-text"><small class="text-body-secondary">${a.extra}</small></p>
        </div>
      </div>
      <div class="col-md-5">
        <img src="${BACKEND_URL}${a.image}" class="img-fluid rounded-start">
      </div>
      </div>
  </div>
    </div>`;
                  view_html.push(itemHtml); 
              }
              });


              document.getElementById('certifications').innerHTML = view_html.join('');



            }
          })
          .catch(err => console.error('Error:', err));
});