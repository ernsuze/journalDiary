function dateClock() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  document.getElementById("todayDate").textContent = date + " — " + time;
  setTimeout(dateClock, 1000);
}
window.onload = dateClock;

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