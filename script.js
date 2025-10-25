// shows date and time on top

function dateClock() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  document.getElementById("todayDate").textContent = date + " — " + time;
  setTimeout(dateClock, 1000);
}
window.onload = dateClock;

// saves file 
const saveBtn = document.getElementById('submitBtn');

saveBtn.addEventListener('click', function(){
let tempLink = document.createElement("a");
  let textArea = document.querySelector("textarea");
  var taBlob = new Blob([textArea.value], {type: 'text/plain'});
  tempLink.setAttribute('href', URL.createObjectURL(taBlob));
  tempLink.setAttribute('download', `${name.toLowerCase()}.txt`);
  tempLink.click();
  
  URL.revokeObjectURL(tempLink.href);
});

// linking the calender

document.addEventListener('DOMContentLoaded', function() {
        const calendarEl = document.getElementById('calendar')
        const calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        })
        calendar.render()
      })

      // Auth Stuff
// Signup
