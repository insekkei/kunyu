function initElement() {
  var image = document.getElementsByClassName("image");
  for(var i = 0; i < image.length; i++) {
      image[i].onclick = showPreview;
  }

  var preview = document.getElementById('preview');
  var previewImage = document.getElementById('previewImage');
  previewImage.onclick = hidePreview;
  preview.onclick = hidePreview;

  calcDays()
};

function showPreview(event) {
  var preview = document.getElementById('preview');
  preview.className = 'active';

  var src = event.target.getAttribute('src');
  var previewImage = document.getElementById('previewImage');
  previewImage.setAttribute('src', src);
  previewImage.animate([
      { transform: 'scale(.8)', }, 
      { transform: 'scale(1)' }
    ], { 
      duration: 100,
    });
}

function hidePreview() {
  var preview = document.getElementById('preview');
  preview.className = '';

  var previewImage = document.getElementById('previewImage');
  previewImage.setAttribute('src', '');
}

function calcDays () {
  var now = Date.now();
  var bornTime = new Date('2019-04-02').getTime();
  var bornDays = Math.floor((now - bornTime) / 1000 / 60 / 60 / 24);
  document.getElementById('born').innerHTML = bornDays;

  var examinationTime = new Date('2037-06-07').getTime();
  var examinationDays = Math.floor((examinationTime - now) / 1000 / 60 / 60 / 24);
  document.getElementById('examination').innerHTML = String(examinationDays);
}

initElement()
