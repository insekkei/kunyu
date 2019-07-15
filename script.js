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
  const bornTime = new Date('2019/04/02 19:53:00');
  setInterval(
    function(){
      var now = Date.now();
      var bornDiff = countdown(bornTime, Date.now(), countdown.YEARS | countdown.MONTHS | countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
      console.log(bornDiff)
      var bornYears = bornDiff.years ? ` ${bornDiff.years} 年` : '';
      var bornMonths = bornDiff.months ? ` ${bornDiff.months} 个月` : '';
      var bornDays = bornDiff.days ? ` ${bornDiff.days} 天` : '';
      var bornHours = bornDiff.hours ? ` ${bornDiff.hours} 时` : '';
      var bornMinites = bornDiff.minutes ? ` ${bornDiff.minutes} 分` : '';
      var bornSeconds = bornDiff.seconds ? ` ${bornDiff.seconds} 秒` : '';

      var bornString = bornYears + bornMonths + bornDays + bornHours + bornMinites + bornSeconds;
      document.getElementById('born').innerHTML = bornString;
    },
  1000);
  


  var examinationTime = new Date('2037-06-07').getTime();
  var examinationDays = Math.floor((examinationTime - Date.now()) / 1000 / 60 / 60 / 24);
  document.getElementById('examination').innerHTML = String(examinationDays);
}

initElement()
