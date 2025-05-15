const buttons = document.querySelectorAll('.menu-btn');
const sections = document.querySelectorAll('main section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
  
    buttons.forEach(b => b.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    btn.classList.add('active');
    const targetId = btn.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});
