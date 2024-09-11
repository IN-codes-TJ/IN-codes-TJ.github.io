document.addEventListener('scroll', function() {
    const image = document.querySelector('.image-container');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const imageHeight = image.clientHeight;

    const scrollPercentage = scrollTop / (imageHeight);

    image.style.opacity = 1 - scrollPercentage;
});