// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Change title color on click
    const title = document.getElementById('main-title');
    title.addEventListener('click', function() {
        const colors = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        title.style.color = randomColor;
    });

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar::after');
    progressBars.forEach(bar => {
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = bar.parentElement.id === 'html-bar' ? '80%' :
                             bar.parentElement.id === 'css-bar' ? '70%' : '50%';
        }, 500);
    });

    // Load projects dynamically
    const projects = [
        {
            title: "ကျောင်းစာမှတ်စု Website",
            description: "HTML နှင့် CSS ကိုသုံးပြီးလုပ်ထားတဲ့ ကျောင်းစာမှတ်စုမျှဝေတဲ့ဝက်ဘ်ဆိုဒ်",
            image: "project1.jpg"
        },
        {
            title: "အချိန်ဇယား App",
            description: "JavaScript နဲ့လုပ်ထားတဲ့ အချိန်ဇယားစီမံခန့်ခွဲမှု application",
            image: "project2.jpg"
        },
        {
            title: "အင်္ဂလိပ်စာကဏ္ဍ",
            description: "အင်္ဂလိပ်စာလေ့လာသူများအတွက် အခမဲ့သင်ခန်းစာများ",
            image: "project3.jpg"
        }
    ];

    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert(`ကျေးဇူးတင်ပါတယ် ${name}၊ သင့်မက်ဆေ့ဂျ်ကိုလက်ခံရရှိပါပြီ။ မကြာမီပြန်လည်ဆက်သွယ်ပါမည်။`);
        
        contactForm.reset();
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});sc
