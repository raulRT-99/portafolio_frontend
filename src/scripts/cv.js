import {BACKEND_URL} from './constants.js';

      const lang = window.location.pathname.split('/')[1];
      // const lang = event.currentTarget.value; // "es" o "en"
      const endpoint = lang === 'es' ? BACKEND_URL+'/cv' : BACKEND_URL+'/cv/eng';
      fetch(endpoint)
        .then(response => response.json())
        .then(data_original => {
          const contentElem = document.getElementById('degree');
          if (contentElem) {
            const data = data_original.response
            const degree = data.degree
            const location = data.location
            const cel = data.cel
            const email = data.email
            const aptitudes = data.aptitudes
            const speaks = data.speaks
            const knowledge = data.knowledge
            const experience = data.experience.reverse();
            const studies = data.studies
            const additional = data.additional

            document.getElementById('degree').innerHTML = degree
            document.getElementById('location').innerHTML = '<i class="fas fa-location-dot"></i>&nbsp;&nbsp;&nbsp;'+location;
            document.getElementById('cel').innerHTML = '<i class="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;'+cel;
            document.getElementById('email').innerHTML = '<i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;'+email;

            document.getElementById('langs').innerHTML = lang === 'es' ? 'IDIOMAS' : 'LANGUAGES';
            document.getElementById('knows').innerHTML = lang === 'es' ? 'CONOCIMIENTO' : 'KNOWLEDGE';
            document.getElementById('exps').innerHTML = lang === 'es' ? 'EXPERIENCIA' : 'EXPERIENCE';
            document.getElementById('study').innerHTML = lang === 'es' ? 'ESTUDIOS' : 'STUDIES';
            document.getElementById('adds').innerHTML = lang === 'es' ? 'ADICIONAL' : 'ADDITIONAL';

        document.getElementById('aptitudes').innerHTML = '<ul>' + aptitudes.map(a => `<li>${a}</li>`).join('') + '</ul>';
        document.getElementById('speaks').innerHTML = '<ul>' + speaks.map(s => `<li>
          <div style="height: 10px; width:70%" class="progress" role="progressbar"  aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar text_bar color_bar" style="width: ${s.level}%">${s.language}</div>
          </div></li>`).join('') + '</ul>';
        document.getElementById('knowledge').innerHTML = '<ul>' + knowledge.map(k => `<li>
          <div style="height: 10px; width:80%" class="progress" role="progressbar"  aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar text_bar color_bar" style="width: ${k.level}%">${k.skill}</div>
          </div></li>`).join('') + '</ul>';
        document.getElementById('experience').innerHTML = '<ul>' + experience.map(e => `<li>
          <h5>${e.place}</h5>
          <h6 class="light">${e.location}, ${e.date}</h6>
          <h5 class="gray">${e.todo}</h5></li>`).join('') + '</ul>';
        document.getElementById('studies').innerHTML = '<ul>' + studies.map(s => `<li>
          <h5>${s.school}</h5>
          <h6 class="light">${s.date}</h6>
          <h5 class="gray">${s.degree}</h5></li>`).join('') + '</ul>';
        document.getElementById('additional').innerHTML = '<ul>' + additional.map(a => `<li>
          <h5>${a.title}</h5>
          <h6 class="light">${a.place}, ${a.date}</h6>
          </li>`).join('') + '</ul>';

          }
        })
        .catch(err => console.error('Error:', err));
   