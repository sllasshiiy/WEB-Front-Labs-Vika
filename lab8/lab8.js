function showDate(){
    let out = document.getElementById('current-date');
    let today = new Date();
    const locales = ['ru-RU', 'ar-QA', 'bs-BA', 'el-GR', 'fr-FR', 'it-IT'];
    locales.forEach(locale => {
        let dateStr = today.toLocaleString(locale);
        let country = locale.split('-')[1];
        let dateDiv = document.createElement('div');
        dateDiv.textContent = country + '/' + locale + ': ' + dateStr;
        dateDiv.style.margin='8px 0px 0px 25px';
        out.appendChild(dateDiv);
    });
}