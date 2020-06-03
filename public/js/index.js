const nombre = document.getElementsByClassName('nombre');

for (i = 0; i < nombre.length; i++) {
  if (nombre[i].innerText == '') {
    nombre[i].parentElement.style.display = 'none'
  };
};


$(function() {

  $('#timer').countdown({
    date: '06/10/2020 23:59:59',
    hours:'Heures',
    day: 'Jour',
    days: 'Jours',
    hour: 'Heure',
    hours: 'Heures',
    seconds: 'Secondes'
  });

})


