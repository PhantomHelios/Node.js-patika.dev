let myName = prompt('Please enter your name:');

let item = document.getElementById('myName');
item.innerHTML = myName;


function showTime() {
    var weekday = ['Pazar', 'Pazartesi', 'Sali', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    var date = new Date();
    var content = `${date.toLocaleTimeString()} ${weekday[date.getDay()]}`;

    var clock = document.querySelector('div#myClock');
    clock.innerHTML = content;
    setTimeout(showTime,1000);
}

showTime();