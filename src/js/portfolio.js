export function initPortfolio() {
  const cleanups = [];

  const portfolioItems = document.querySelectorAll('#works .group.cursor-pointer');

  portfolioItems.forEach((item) => {
    const video = item.querySelector('video');

    if (video) {
      const handleMouseEnter = () => {
        // Lazy load strategy: check if src is empty and use data-src
        if (!video.getAttribute('src') && video.getAttribute('data-src')) {
          video.setAttribute('src', video.getAttribute('data-src'));
          video.load();
        }
        video.play().catch(e => console.log('Video play error:', e));
      };

      const handleMouseLeave = () => {
        video.pause();
        video.currentTime = 0; // Reset video to start
      };

      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);

      cleanups.push(() => item.removeEventListener('mouseenter', handleMouseEnter));
      cleanups.push(() => item.removeEventListener('mouseleave', handleMouseLeave));
    }
  });

  return () => {
    cleanups.forEach(cleanup => cleanup());
  };
}
