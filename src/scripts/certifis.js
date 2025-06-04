import {BACKEND_URL} from './constants.js';

document.addEventListener('DOMContentLoaded', function() {
  const lang = window.location.pathname.split('/')[1];
        // const lang = event.currentTarget.value; // "es" o "en"
        const endpoint = lang === 'es' ? BACKEND_URL+'/certifications': BACKEND_URL+'/certifications/en';
        fetch(endpoint)
          .then(response => response.json())
          .then(data_original => {
            const contentElem = document.getElementById('certifications');
            console.log(data_original);
            if (contentElem) {
              const data = data_original.response
              const view_html = [];
                view_html.push(`
                <div class="row row-cols-1 row-cols-md-3 g-4" id="certifications">`);
              data.forEach(a => {
                const itemHtml = `
                 <div class="col">
                <div class="card">
                <img src="${BACKEND_URL}/${a.image}" class="card-img-top">
                <div class="card-body bg-light">
                    <h5 class="card-title bold">${a.title}</h5>
                    <p class="card-text">${a.place}</p>
                    <p class="card-text light">${a.extra}</p>
                </div>
                </div>
            </div>`;
                  view_html.push(itemHtml);
              });
              view_html.push(`</div>`);

              document.getElementById('certifications').innerHTML = view_html.join('');



            }
          })
          .catch(err => console.error('Error:', err));
});