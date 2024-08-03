document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('h1');

    // Animate the title with a simple bounce effect
    let bounce = 0;
    function animate() {
        bounce += 1;
        title.style.transform = `translateY(${Math.sin(bounce / 10) * 20}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});
