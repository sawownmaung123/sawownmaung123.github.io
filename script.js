document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Greeting button
    const greetBtn = document.getElementById('greet-btn');
    const greetingMessage = document.getElementById('greeting-message');
    greetBtn.addEventListener('click', function() {
        greetingMessage.textContent = 'ကျေးဇူးတင်ပါတယ်! ကျွန်တော်တို့အတူတူ နည်းပညာလေ့လာကြမယ်!';
        greetingMessage.style.display = 'block';
        
        setTimeout(function() {
            greetingMessage.style.display = 'none';
        }, 3000);
    });
    
    // View demo buttons
    const viewDemoBtns = document.querySelectorAll('.view-demo-btn');
    viewDemoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectNum = this.getAttribute('data-project');
            alert(`Project ${projectNum} ရဲ့ Demo ကိုကြည့်ရှုမည်! (ဤနေရာတွင် Demo link ထည့်သွင်းနိုင်ပါသည်)`);
        });
    });
    
    // Add tutorial button
    const addTutorialBtn = document.getElementById('add-tutorial-btn');
    const tutorialCounter = document.getElementById('counter');
    addTutorialBtn.addEventListener('click', function() {
        let currentCount = parseInt(tutorialCounter.textContent);
        currentCount++;
        tutorialCounter.textContent = currentCount;
        alert(`သင်ခန်းစာအသစ်တစ်ခုထပ်ထည့်ပြီးပါပြီ! စုစုပေါင်း ${currentCount} ခုရှိပါပြီ။`);
    });
    
    // Add skill functionality
    const addSkillBtn = document.getElementById('add-skill-btn');
    const newSkillInput = document.getElementById('new-skill');
    const skillsList = document.getElementById('skills-list');
    
    addSkillBtn.addEventListener('click', function() {
        if (newSkillInput.value.trim() !== '') {
            const newSkill = document.createElement('li');
            newSkill.textContent = newSkillInput.value.trim();
            skillsList.appendChild(newSkill);
            newSkillInput.value = '';
        }
    });
    
    // Enter key to add skill
    newSkillInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addSkillBtn.click();
        }
    });
    
    // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Visit counter
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visit-count').textContent = visitCount;
    
    // Language selector functionality
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() {
        if (this.value === 'en') {
            if (confirm('Change to English? (This is just a demo)')) {
                // In a real app, you would replace all text with translations
                document.getElementById('main-title').textContent = 'Myanmar GitHub';
                document.getElementById('main-subtitle').textContent = 'Learn programming in Myanmar language';
            } else {
                this.value = 'my';
            }
        } else {
            // Revert to Myanmar
            document.getElementById('main-title').textContent = 'မြန်မာ GitHub';
            document.getElementById('main-subtitle').textContent = 'ကွန်ပျူတာပရိုဂရမ်းမင်းကို မြန်မာလို လေ့လာကြမယ်';
        }
    });
});
