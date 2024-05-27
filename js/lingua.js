let traduzioni = {

    // index.html
    'hWarning': 'WARNING',
    'pWarning': 'The website has been partially altered censoring personal and identifying information due to it being public. As I\'m not able to attach a .zip file \
        on the unica platform, I opted for hosting a GitHub page to share as a simple link. While probably no one will find this repository, \
        I do not feel comfortable with sharing personal information of mine and other people online. If whoever is reading this message doesn\'t \
        even know what unica is, you can stop bothering, for all actual teachers, go ahead.',
    
    'title': 'Class',
    'hBenvenuto': 'Welcome to our class!',
    'pIntro':
        'Ours is an amazing class filled to the brim with the best students from our school, as any teacher \
         can confirm, allow me to let you look through the list of geniuses who study in this classroom:',

    'thNome': 'Name',
    'thCognome': 'Last name',
    'thNumero': 'Number',

    'aSito': 'Personal',
    'aPersonale': 'Site',

    'pImg': 'Now follows the great culture of the classroom:',
    'pTelefono': 'Constant abuse of school electricity because no one charges their phone before going to class',
    'pMuro': 'Walls full of beautiful artworks',


    // info.html
    'hNome': 'Name',
    'hCognome': 'Last name',
    'hCittà': 'Born at',

    'spanNome': 'Name',
    'spanCognome': 'Last name',
    'spanCittà': 'City',

    'hBio': 'Why did I choose this address?',
    'bio':
        'I\'ve always had a big interest for informatics since the time I found out how to pirate games as a kid on my Android, \
         it\'s fair to say that\'s where my love for discovery in the field of technology came from, and this is why I aim to expand my \
         horizons every time I have the chance, hoping I can one day turn this passion of mine into a career',

}

let elem = document.getElementsByClassName('traduzione')
let dropdown = document.getElementsByClassName('dropdownLingue')

// Imposta cookie per la lingua attuale
function setCookie(nome, valore, giorni) {
    let secondi = giorni * 86400
    let eta = 'max-age=' + secondi;
    document.cookie = nome + '=' + valore + ';' + eta + ';path=/';
}

// Prendi testo da tradurre dal JSON e applicalo
function cambiaLingua(lingua) {

    if (lingua == 'en') {
        for (let i = 0; i < elem.length; i++) elem[i].textContent = traduzioni[elem[i].classList[0]];
        setCookie('lingua', 'en', 10000)

    } else if (lingua == 'it') {
        for (let i = 0; i < elem.length; i++) {
            let testo = localStorage.getItem(elem[i].classList[0])
            elem[i].textContent = testo
        }

        setCookie('lingua', 'it', 10000)

    }

}

// Carica la lingua attualmente nei cookies al caricamento della pagina
window.addEventListener('load', function () {

    console.log(elem);

    // Metti l'Italiano nel local storage per l'eventuale cambio di lingua
    for (let i = 0; i < elem.length; i++) {
        localStorage.setItem(elem[i].classList[0], elem[i].textContent)
    }

    if (document.cookie == 'lingua=en') {
        cambiaLingua('en')
        dropdown[0].value = 'en'

    } else if (document.cookie == 'lingua=it') {
        cambiaLingua('it')
        dropdown[0].value = 'it'

    }

})