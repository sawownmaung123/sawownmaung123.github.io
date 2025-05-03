// လက်ရှိရက်စွဲကိုပြသခြင်း
document.getElementById('current-date').textContent = 'ယနေ့ရက်စွဲ: ' + new Date().toLocaleDateString();

// Project ကို click လုပ်ရင် alert ပြခြင်း
document.getElementById('project1').addEventListener('click', function() {
    alert('ကျေးဇူးတင်ပါတယ်! ကျွန်တော့် project ကိုကြည့်ရှုတဲ့အတွက်!');
});

// Navigation အတွက် smooth scrolling
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
