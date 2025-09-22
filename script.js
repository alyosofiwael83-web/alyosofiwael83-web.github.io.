document.addEventListener("DOMContentLoaded", function() {

    // 1. AOS (Animate On Scroll) Initialization
    AOS.init({
        duration: 800, // سرعة معقولة
        easing: 'ease-in-out',
        once: true, // الحركة تحدث مرة واحدة فقط
        mirror: false
    });

    // 2. Typed.js Initialization with Icons (تحديث بسيط مع أيقونات)
    new Typed('#typed-text', { // 💡 تأكد من أن الـ ID في HTML هو typed-text
        strings: [
            'مطور ويب <i class="fab fa-laravel text-danger"></i>',
            'متخصص في Flutter <i class="devicon-flutter-plain colored"></i>',
            'خبير Livewire <i class="devicon-livewire-plain-wordmark" style="color: #fb70a9;"></i>',
            'مطور C# <i class="devicon-csharp-plain colored"></i>',
            'مهندس برمجيات <i class="fas fa-cogs text-secondary"></i>'
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    });

    // 3. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleNavbarScroll);

    // 4. Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    const toggleBackToTop = () => {
        if (window.scrollY > 300) { // يظهر بعد 300 بكسل
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    };
    window.addEventListener('load', toggleBackToTop);
    window.addEventListener('scroll', toggleBackToTop);

    // 5. Active Nav Link on Scroll (ميزتك الاحترافية)
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // 💡 تعديل بسيط لجعل الكود يعمل مع قسم الواجهة الرئيسية أيضاً
    const heroSection = document.querySelector('#hero'); 
    sections.push = heroSection; // إضافة قسم الواجهة يدوياً

    const handleActiveLink = () => {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            // تعديل بسيط لحساب بداية القسم بشكل أدق
            const sectionTop = current.offsetTop - 70; 
            let sectionId = current.getAttribute('id');

            let navLink = document.querySelector('.nav-link[href*=' + sectionId + ']');
            if (navLink) { // التأكد من وجود الرابط قبل محاولة تعديله
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    };
    window.addEventListener('scroll', handleActiveLink);
    handleActiveLink(); // تفعيل الرابط الصحيح عند تحميل الصفحة مباشرة

});
