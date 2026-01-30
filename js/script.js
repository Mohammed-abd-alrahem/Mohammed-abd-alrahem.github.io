// جعل التنقل سلساً
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// إضافة تأثير عند التمرير لشريط التنقل
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// تفعيل الروابط في بطاقات المشاريع
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('سيتم إضافة رابط المشروع هنا قريباً!');
    });
});

// إضافة سنة تلقائية في الفوتر
document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('footer p:first-child');
    if (footerText) {
        footerText.textContent = footerText.textContent.replace('2023', year);
    }
});