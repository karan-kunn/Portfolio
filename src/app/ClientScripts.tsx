'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
    useEffect(() => {
    const runScripts = async () => {
    const ScrollReveal = (await import('scrollreveal')).default;

        const waitForElement = (selector: string): Promise<Element> => {
        return new Promise((resolve) => {
            const checkExist = () => {
            const el = document.querySelector(selector);
            if (el) resolve(el);
            else setTimeout(checkExist, 100);
            };
            checkExist();
        });
        };

        await waitForElement('.about');

      // Reveal about content
        ScrollReveal().reveal('.about-content', {
        origin: 'left',
        distance: '60px',
        duration: 1000,
        delay: 200,
        easing: 'ease-out',
        reset: false,
        });

      // Reveal each text-box
        ScrollReveal().reveal('.text-box', {
        origin: 'bottom',
        distance: '40px',
        duration: 800,
        interval: 200,
        easing: 'ease-in-out',
        reset: false,
        });

      // Reveal heading span with blue line
        ScrollReveal().reveal('.heading span', {
        origin: 'top',
        distance: '30px',
        duration: 700,
        delay: 200,
        reset: false,
        afterReveal: (el: HTMLElement) => {
          // ✅ Safe check
            if (el && el.classList) {
            el.classList.add('reveal-line');
            }
        },
        });

        console.log('✅ ScrollReveal applied.');
    };

    runScripts();
    }, []);

    return null;
}
