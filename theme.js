// Check for saved user preference, if any, on load of the website
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

// Function to toggle theme
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// Helper to inject the toggle button into the navbar (since we don't have a component system)
// This waits for DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('nav .container');
    if (navContainer) {
        // Create Toggle Button
        const toggleBtn = document.createElement('button');
        toggleBtn.onclick = toggleTheme;
        toggleBtn.className = "ml-4 p-2 rounded-lg text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition";
        toggleBtn.ariaLabel = "Toggle Dark Mode";
        toggleBtn.innerHTML = `
            <!-- Sun Icon (for Dark Mode) -->
            <svg class="w-6 h-6 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            <!-- Moon Icon (for Light Mode) -->
            <svg class="w-6 h-6 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        `;
        
        // Append to the flex container inside Nav (usually the last item)
        // We want it after the links. The links are in a div.
        // Let's find the links div
        const linksDiv = navContainer.querySelector('div.hidden.md\\:flex');
        
        // Also needed for mobile?
        // For simplicity, we'll append it to the main container, which is flex, so it goes to the right.
        navContainer.appendChild(toggleBtn);
    }
});
