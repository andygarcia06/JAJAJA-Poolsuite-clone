const wrapper = document.querySelector(".wrapper"),
header = wrapper.querySelector("header");
function onDrag({movementX, movementY}){
  let getStyle = window.getComputedStyle(wrapper);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  wrapper.style.left = `${leftVal + movementX}px`;
  wrapper.style.top = `${topVal + movementY}px`;
}
header.addEventListener("mousedown", ()=>{
  header.classList.add("active");
  header.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", ()=>{
  header.classList.remove("active");
  header.removeEventListener("mousemove", onDrag);
});


// MODAL

let closeModalBtn = document.querySelector('.close-btn');
let openModalBtn = document.querySelector('.open-modal-btn');
let modal = document.querySelector('.wrapper');

function openModal() {
    modal.style.visibility = 'visible';
};

function closeModal() {
    modal.style.visibility = 'hidden';
};

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click',closeModal);