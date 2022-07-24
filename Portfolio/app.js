

//------------------------------------------------//
const active = () =>{
  const logo = document.querySelector('.logo');
  const resume = document.querySelector('.resume');
  const burger = document.querySelector('.burger');
  const links = document.querySelector('.links');

  document.onclick=(e)=>{
    if(e.target.id !== 'logo' && e.target.id !== 'logo')
    {
        resume.classList.remove('resume-active');
    }
  }
  logo.addEventListener('click', ()=>{
    resume.classList.toggle('resume-active');
  });

  burger.addEventListener('click', ()=>{
    links.classList.toggle('links-active');
    burger.classList.toggle('toggle');
  });
}
active();
//*********************************************//



