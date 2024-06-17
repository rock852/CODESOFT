document.addEventListener('DOMContentLoaded', function() {
    const prevButtons = document.querySelectorAll('.prev');
    const nextButtons = document.querySelectorAll('.next');
    const sliderTracks = document.querySelectorAll('.slider-track');

    prevButtons.forEach((prev, index) => {
        prev.addEventListener('click', () => slide(sliderTracks[index], 'prev'));
    });

    nextButtons.forEach((next, index) => {
        next.addEventListener('click', () => slide(sliderTracks[index], 'next'));
    });

    function slide(track, direction) {
        const cardWidth = track.querySelector('.card').clientWidth;
        const trackWidth = track.scrollWidth;
        const visibleWidth = track.clientWidth;
        const cardsVisible = Math.floor(visibleWidth / cardWidth);
        const maxIndex = Math.floor(trackWidth / visibleWidth) - 1;
        let currentPosition = parseInt(track.style.transform.replace('translateX(', '').replace('px)', '')) || 0;

        if (direction === 'next') {
            currentPosition -= visibleWidth;
            if (currentPosition < -trackWidth + visibleWidth) {
                currentPosition = 0;
            }
        } else if (direction === 'prev') {
            currentPosition += visibleWidth;
            if (currentPosition > 0) {
                currentPosition = -trackWidth + visibleWidth;
            }
        }

        track.style.transform = `translateX(${currentPosition}px)`;
    }
});
