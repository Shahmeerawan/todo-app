function saver() {
    var saver = document.getElementById('text');
    var olist = document.getElementById('olist');
    var li = document.createElement('li');
    li.innerHTML = `${saver.value}`;
    olist.appendChild(li);
    console.log(olist);
    saver.value = '';
    saver.focus();
    // var div = document.querySelector("#saver ")
    // div.innerHTML = `${saver}`
  }
  function deletee() {
    var z = document.getElementById('olist');
    z.innerHTML = '';
  }