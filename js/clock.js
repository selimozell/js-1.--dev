let userName = prompt("Lütfen Adınızı Giriniz")
console.log(userName)

let firstName = document.querySelector("#myName")
firstName.innerHTML = `${userName}`

function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById('myClock').innerHTML = date;
  }

  setInterval(tarihSaat, 1000);