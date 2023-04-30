
el = document.getElementById('navigbutton');

hiddenDiv = document.getElementById('navigmenu');

el.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv.style.display = 'block';
});

el.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv.style.display = 'none';
});
const targetDiv = document.getElementById("navigmenu");
const btn = document.getElementById("navigclose");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
const photos = [document.getElementById('photo1'),
document.getElementById('photo2'),
document.getElementById('photo3'),
document.getElementById('photo4'),
document.getElementById('photo5')];
const rphotos = [
  document.getElementById('rphoto1'),
  document.getElementById('rphoto2'),
  document.getElementById('rphoto3'),
  document.getElementById('rphoto4'),
  document.getElementById('rphoto5')
];
for(let i=0; i<5; i++){
    photos[i].addEventListener('mouseover', function handleMouseOver() {
      rphotos[i].style.display = 'block';
    });
    
    photos[i].addEventListener('mouseout', function handleMouseOut() {
      rphotos[i].style.display = 'none';
    });
};
function toggleText(id) {
  var text = document.getElementById(id);
  if (text.style.display == "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
const textbtns = [
  document.getElementById('buttext1'),
  document.getElementById('buttext2'),
  document.getElementById('buttext3'),
  document.getElementById('buttext4'),
  document.getElementById('buttext5'),
];

const texts = [
  'text1',
  'text2',
  'text3',
  'text4',
  'text5'
];
for(let i=0; i<5; i++){
  textbtns[i].onclick = function() {
    toggleText(texts[i]);
  }
}




