// // Theme toggle functionality
//         const themeToggle = document.getElementById('themeToggle');
//         const themeIcon = themeToggle.querySelector('i');
//         const body = document.body;

//         // Check for saved theme preference
//         const savedTheme = localStorage.getItem('theme');
//         if (savedTheme === 'dark') {
//             body.classList.add('dark-mode');
//             themeIcon.classList.remove('fa-moon');
//             themeIcon.classList.add('fa-sun');
//         }

//         themeToggle.addEventListener('click', () => {
//             body.classList.toggle('dark-mode');
            
//             if (body.classList.contains('dark-mode')) {
//                 themeIcon.classList.remove('fa-moon');
//                 themeIcon.classList.add('fa-sun');
//                 localStorage.setItem('theme', 'dark');
//             } else {
//                 themeIcon.classList.remove('fa-sun');
//                 themeIcon.classList.add('fa-moon');
//                 localStorage.setItem('theme', 'light');
//             }
//         });

//         // Simple smooth scrolling for navigation links
//         document.querySelectorAll('nav a').forEach(anchor => {
//             anchor.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 const targetId = this.getAttribute('href');
//                 const targetElement = document.querySelector(targetId);
                
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 80,
//                     behavior: 'smooth'
//                 });
//             });
//         });

const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        const body = document.body;

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });
    