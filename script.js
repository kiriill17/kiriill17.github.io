const modal = document.getElementById('modal');
const btnHeader = document.getElementById('headerBTN');

function openModal(){
    modal.className += ' active';
}

function closeModal(){
    modal.className = 'modal';
}

btnHeader.onclick = openModal;