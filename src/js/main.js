import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initPortfolio } from './portfolio.js';
import { initContactForm } from './contact.js';

export function main() {
  const cleanups = [];

  // Initialize all features
  cleanups.push(initNavigation());
  cleanups.push(initAnimations());
  cleanups.push(initPortfolio());
  cleanups.push(initContactForm());

  // Return a master cleanup function
  return () => {
    cleanups.forEach(cleanup => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    });
  };
}
