export default function counter(): void {
 const button = document.querySelector<HTMLElement>('button#count');
 let count: number = 1;
 button?.addEventListener('click', () => {
  button.innerHTML = `Click ${count} times`;
  count += 1;
 });
}
