let link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

//kräbätää osio
let sect = document.querySelector('section');

//luodaa p
let para = document.createElement('p');
para.textContent = 'tekstia xDDDD';

//lisätään p osioon
sect.appendChild(para);

//luodaan tekstinode
let teksti = document.createTextNode(' — the premier source for web development knowledge.');

//kräbää kappale
let linkPara = document.querySelector('p');
linkPara.appendChild(teksti);

//tyylitellään

/*para.addEventListener('click', function() {
    para.style.backgroundColor = 'blue';

}); */

para.setAttribute('class', 'highlight');
