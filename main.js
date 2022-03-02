const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let date = new Date();
let year = date.getYear();
let month = date.getMonth();
let cont = document.getElementById('container');

const url = 'https://raw.githubusercontent.com/Ozzymand/UPBCalendar/main/date.json';

fetch(url)
    .then(response => response.json())
    .then(inputData => {
      for(var i = 0; i < inputData.examens.length; i++){
        var data = inputData.examens[i].data.split('-');
        var materie = inputData.examens[i].materie;
        var ora = inputData.examens[i].ora;
        var sala = inputData.examens[i].sala;
        var color = inputData.examens[i].color;

        // search for the date in calendar
        var dateIn = document.getElementById(`${data[0]-1}-${data[1]-1}`);
        dateIn.style = `background-color: ${color}`;

      }
      for(var i = 0; i < inputData.teste.length; i++){
        var data = inputData.teste[i].data.split('-');
        var materie = inputData.teste[i].materie;
        var color = inputData.teste[i].color;

        // search for the date in calendar
        var dateIn = document.getElementById(`${data[0]-1}-${data[1]-1}`);
        dateIn.style = `background-color: ${color}`;
      }
    });

function makeMonth(monthNum) {
  var newMonth = document.createElement('div');
  newMonth.innerHTML = months[monthNum];
  newMonth.className = 'calendarMonth';
  newMonth.id = `${months[monthNum]}-${year}`;
  cont.appendChild(newMonth);
  var newDays = document.createElement('div');
  newDays.className = 'calendarDays';
  newDays.id = `${months[monthNum]}:${year}`;
  newMonth.appendChild(newDays);
  var uL = document.createElement('ul');
  uL.id = `${months[monthNum]}:${year}:UL`;
  newDays.appendChild(uL);
  var ul = document.getElementById(`${months[monthNum]}:${year}:UL`);
  let daysInMonth = new Date(year, monthNum+1, 0).getDate();
  for(var i = 0; i < daysInMonth; i++){
    var li = document.createElement('li');
    li.id = `${i}-${monthNum}`;
    li.appendChild(document.createTextNode(i+1));
    ul.appendChild(li);
  }

}

for(var i = 0; i < 12; i++){
  makeMonth(i);
}