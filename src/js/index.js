const button = document.querySelector('button#count');
let count = 1;
button.addEventListener('click', () => {
 button.innerHTML = `Click ${count} times`;
 count += 1;
});
