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
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const today_2 = date.getDate();
    const day = date.toLocaleString('ru', { weekday: 'long' });
    document.getElementById("year").innerText = "Текущий год:  " + year;
    document.getElementById("month").innerText = "Текущий месяц:  " + month;
    document.getElementById("date").innerText = "Текущая дата: " + today;
    document.getElementById("day").innerText = "День недели: " + day;
}
function getDayOfWeek() {
    const inputDate = parseInt(document.getElementById('inputDate').value);
    const inputMonth = parseInt(document.getElementById('inputMonth').value) - 1; // месяцы в объекте Date начинаются с нуля
    const inputYear = parseInt(document.getElementById('inputYear').value);
    const selectedDate = new Date(inputYear, inputMonth, inputDate);
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayOfWeek = days[selectedDate.getDay()];
    document.getElementById('dayOfWeek').textContent = `Выбранная дата - ${dayOfWeek}`;
}
