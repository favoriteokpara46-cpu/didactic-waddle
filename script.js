// Simple interactivity for the blog

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to posts when page loads
window.addEventListener('load', () => {
    const posts = document.querySelectorAll('.post');
    posts.forEach((post, index) => {
        post.style.animation = `fadeIn 0.5s ease-in ${index * 0.1}s forwards`;
    });
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Log a fun message to the console
console.log('%c🎬 Welcome to DramaMadeMeCryToday! 😭', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cIf you\'re here, you understand the pain of Kdrama rollercoasters. 💕', 'font-size: 14px; color: #764ba2;');