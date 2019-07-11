function initElement() {
  var image = document.getElementsByClassName("image");
  for(var i = 0; i < image.length; i++) {
      image[i].onclick = showPreview;
  }

  var preview = document.getElementById('preview');
  var previewImage = document.getElementById('previewImage');
  previewImage.onclick = hidePreview;
  preview.onclick = hidePreview;
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

initElement()
