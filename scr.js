const linkMail = document.querySelector('.email')
const modal = document.querySelector('.modal')
const close = modal.querySelector('.close-button')

linkMail.addEventListener('click', function () {
  modal.style.display = 'block';
})

close.addEventListener('click', function () {
  modal.style.display = 'none';
})

window.onclick = function (e) {
  if (e.target.classList.contains('modal-body')) {
    modal.style.display = 'none';
  }
}