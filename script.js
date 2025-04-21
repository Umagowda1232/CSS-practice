// // Function to toggle the "active" class on the navbar
// function toggleMenu() {
//     const nav = document.getElementById('navbar');
//     nav.classList.toggle('active');
//   }

//   // Auto close the menu when a nav link is clicked (on small screens)
//   document.querySelectorAll('#navbar ul li a').forEach(link => {
//     link.addEventListener('click', () => {
//       if (window.innerWidth <= 425) {
//         document.getElementById('navbar').classList.remove('active');
//       }
//     });
//   });

// function scrollToTop() {
// window.scrollTo({ top: 0, behavior: 'smooth' });
// }



const backDrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

toggleButton.addEventListener('click', ()=>{
  mobileNav.style.display = 'block';
  backDrop.style.display = 'block';
})

backDrop.addEventListener('click', ()=>{
  backDrop.style.display = 'none';
  mobileNav.style.display = 'none';
})