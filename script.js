function openModal() {
  const modal = document.querySelector('.modal-wrapper');
  const excluir = document.querySelector('.delete')

  function handleClick() {
    modal.classList.add('active')
  }

  excluir.addEventListener('click', handleClick);

}

openModal();