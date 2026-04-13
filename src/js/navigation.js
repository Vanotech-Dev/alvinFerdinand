export function initNavigation() {
  const cleanups = [];
  
  // Sticky Nav & Scroll Spy
  const nav = document.querySelector('nav');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');
  
  const handleScroll = () => {
    // Sticky Nav styling adjustments
    if (window.scrollY > 50) {
      nav.classList.add('shadow-md', 'bg-white/95');
      nav.classList.remove('bg-white/80');
    } else {
      nav.classList.add('bg-white/80');
      nav.classList.remove('shadow-md', 'bg-white/95');
    }
    
    // Scroll Spy logic
    let currentId = '';
    const scrollY = window.scrollY;
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('text-orange-600', 'after:w-full');
      link.classList.add('text-neutral-500', 'after:w-0');
      
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.remove('text-neutral-500', 'after:w-0');
        link.classList.add('text-orange-600', 'after:w-full');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  cleanups.push(() => window.removeEventListener('scroll', handleScroll));

  // Mobile Menu Logic
  const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
  const mobileMenu = document.querySelector('#mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    const handleMenuClick = () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    };
    
    mobileMenuBtn.addEventListener('click', handleMenuClick);
    cleanups.push(() => mobileMenuBtn.removeEventListener('click', handleMenuClick));
    
    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      const closeMenu = () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      };
      link.addEventListener('click', closeMenu);
      cleanups.push(() => link.removeEventListener('click', closeMenu));
    });
  }

  // Initial trigger for scroll state
  handleScroll();

  return () => {
    cleanups.forEach(cleanup => cleanup());
  };
}
