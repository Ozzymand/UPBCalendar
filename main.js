const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let date = new Date();
let year = date.getYear();
let month = date.getMonth();
let cont = document.getElementById('container');


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
    li.appendChild(document.createTextNode(i+1));
    ul.appendChild(li);
  }

}

for(var i = 0; i < 12; i++){
  makeMonth(i);
}

console.log(JSON.stringify(dateUni));