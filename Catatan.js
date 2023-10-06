// untuk menambah catatan
const tmbl = document.querySelector('div#catatan div#nav img');
tmbl.addEventListener('click', function(){
  const cttBaru = document.createElement('textarea');
  const teksBaru = document.createTextNode('');
  cttBaru.appendChild(teksBaru);
  const newCtt = document.querySelector('div#catatan form');
  const itemCtt = newCtt.querySelector('textarea:nth-child(2)');
  newCtt.insertBefore(cttBaru,itemCtt)
});