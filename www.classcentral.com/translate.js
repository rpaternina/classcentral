const apiKey = "AIzaSyCUUZDWDrWahG-ZwdUoKkFK81AHp_RmTLQ"


export function translate (id){
    const textToTranslate = document.getElementById(id).innerText;
    const sourceLang = 'en';
    const targetLang = 'hi';
    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${textToTranslate}&source=${sourceLang}&target=${targetLang}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const translation = data.data.translations[0].translatedText;
      console.log(`La traducciÃ³n de "${textToTranslate}" es: "${translation}"`);
      document.getElementById(id).innerText = translation;
    })
    .catch(error => console.error(error));
}

