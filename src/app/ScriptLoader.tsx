// src/app/ScriptLoader.tsx

'use client'; // Required to make this a Client Component

import { useEffect } from 'react';

export default function ScriptLoader() {
useEffect(() => {
    // ✅ Your custom JS code goes here
    // This runs only on the client (after hydration)

    console.log("Script loaded after hydration");

    // Example: Change heading color
    const heading = document.querySelector("h1");
    if (heading) {
    heading.style.color = "red";
    }

    // Example: Animate something or use ScrollReveal, Typed.js, etc.
    // ScrollReveal().reveal('.reveal', { delay: 200 });

  }, []); // Empty dependency array means it runs once after mount

  return null; // No visible UI from this component
}
