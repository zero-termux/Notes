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

// ganti background warna
const gWarna = document.querySelector('div#catatan div#warna img');
gWarna.addEventListener('click', function(){
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

function saveNote() {
  const noteContent = document.getElementById("note").value;
  localStorage.setItem("note", noteContent);
  alert("Catatan berhasil disimpan!");
}

function downloadNote() {
  let noteContent = localStorage.getItem("note");
  if (noteContent) {
    let blob = new Blob([noteContent], { type: "text/plain" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "catatan anda.txt";
    a.click();
    alert("Catatan berhasil diunduh!");
  } else {
    alert("Tidak ada catatan yang tersedia!");
  }
}