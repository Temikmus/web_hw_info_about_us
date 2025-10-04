document.addEventListener('DOMContentLoaded', () => {

  const bgBtn = document.getElementById('bg-toggle-btn');
  const body = document.body;
  const footer = document.querySelector('.site-footer');

  const bgColors = [
    { body: '#cbffa1', footer: '#95c575' },
    { body: '#ffc0cb', footer: '#e699b8' },
    { body: '#a1d4ff', footer: '#7ab0e6' }  
  ];
  
  let index = 0;

  bgBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    index = (index + 1) % bgColors.length;
    body.style.backgroundColor = bgColors[index].body;
    footer.style.backgroundColor = bgColors[index].footer;
  });
});
