const btn = document.querySelector('button')
const btnDiv = document.getElementById('btnDiv')
const share = document.getElementById('share')
const footer = document.getElementById('footer')





btn.addEventListener('click', () => {
  var shareCss = document.defaultView.getComputedStyle(share, null)

  if(parseInt(shareCss.left) > 1) {
    share.style.left = 0 + 'px';
    btnDiv.style.backgroundColor = 'hsl(214, 17%, 51%)';
    btn.setAttribute('class', 'btn-after');

  } else {
    share.style.left = 200 + '%';
    btnDiv.style.backgroundColor = 'hsl(210, 46%, 95%)';
    btn.setAttribute('class', 'btn-before')
  }
});

