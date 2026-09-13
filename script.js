document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.size-btn');
  var selectedSize = document.getElementById('selected-size');
  var selectedPrice = document.getElementById('selected-price');
  var jarScaleGroup = document.getElementById('jar-scale-group');
  var jarLabel = document.getElementById('jar-label-size');

  var scaleBySize = { '4': 0.86, '6': 1, '8': 1.14 };

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');

      var size = btn.getAttribute('data-size');
      var price = btn.getAttribute('data-price');

      selectedSize.textContent = size + ' oz jar';
      selectedPrice.textContent = '$' + price;
      jarLabel.textContent = size + ' OZ';

      var scale = scaleBySize[size] || 1;
      jarScaleGroup.style.transformOrigin = '100px 210px';
      jarScaleGroup.style.transform = 'scale(' + scale + ')';
    });
  });
});
