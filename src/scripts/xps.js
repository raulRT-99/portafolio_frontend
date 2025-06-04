import {BACKEND_URL} from './constants.js';

document.addEventListener('DOMContentLoaded', function() {
  const lang = window.location.pathname.split('/')[1];
        // const lang = event.currentTarget.value; // "es" o "en"
        const endpoint = lang === 'es' ? BACKEND_URL+'/experience': BACKEND_URL+'/experience/eng';
        fetch(endpoint)
          .then(response => response.json())
          .then(data_original => {
            const contentElem = document.getElementById('xp');
            console.log(data_original);
            if (contentElem) {
              const data = data_original.response.reverse();
              const view_html = [];
              data.forEach(a => {
                const techs = a.tech;
                const itemHtml = `
                 <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4 image-container">
                    <img src="${BACKEND_URL}/${a.logo}" class="img-fluid rounded-start">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title bold">${a.place}</h4>
                        <p class="card-text">${a.todo}</p>
                        <a href="${a.site}"><h5>${a.site}</h5></a>
                            <div class="row">
                            <div class="col-sm-5"><p class="card-text"><small class="text-body-secondary">${a.date}</small></p></div>
                            <div class="col-sm-7" style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 5px;">
                            ${techs.map(t => `<img src="${BACKEND_URL}/${t}" class="img-fluid rounded-start" style="width: 50px; height: auto;">`).join('')}
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>  
                </div>
                </div>`;
                  view_html.push(itemHtml);
              });

              document.getElementById('xp').innerHTML = view_html.join('');



            }
          })
          .catch(err => console.error('Error:', err));
});