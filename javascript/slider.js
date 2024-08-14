const slideContainer = document.querySelectorAll('.slide');
const nxtBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.prev');

slideContainer.forEach((item, i) => {
    let children = Array.from(item.children);
    let containerWidth = item.getBoundingClientRect().width;

    // Clone the last two items and prepend them
    for (let j = children.length - 1; j >= children.length - 2; j--) {
        let clone = children[j].cloneNode(true);
        item.prepend(clone);
    }

    // Clone the first two items and append them
    for (let j = 0; j < 2; j++) {
        let clone = children[j].cloneNode(true);
        item.appendChild(clone);
    }

    // Set initial scroll position to be after the clones
    item.scrollLeft = containerWidth;

    let interval;

    // Function to start automatic scrolling
    const startAutoScroll = () => {
        interval = setInterval(() => {
            item.scrollLeft += 1;

            // Loop back to the start
            if (item.scrollLeft >= item.scrollWidth - containerWidth) {
                item.scrollLeft = containerWidth;
            }

            // Loop back to the end
            if (item.scrollLeft <= 0) {
                item.scrollLeft = item.scrollWidth - (2 * containerWidth);
            }
        }, 10);
    };

    // Function to stop automatic scrolling
    const stopAutoScroll = () => clearInterval(interval);

    // Start automatic scrolling
    startAutoScroll();

    // Event listeners for buttons
    nxtBtn[i].addEventListener('click', () => {
        stopAutoScroll();  // Stop scrolling temporarily
        item.scrollLeft += containerWidth;
        startAutoScroll();  // Resume scrolling
    });

    prevBtn[i].addEventListener('click', () => {
        stopAutoScroll();  // Stop scrolling temporarily
        item.scrollLeft -= containerWidth;
        startAutoScroll();  // Resume scrolling
    });

    // Pause scrolling when hovering over buttons
    nxtBtn[i].addEventListener('mouseover', stopAutoScroll);
    prevBtn[i].addEventListener('mouseover', stopAutoScroll);

    // Resume scrolling when mouse leaves the buttons
    nxtBtn[i].addEventListener('mouseout', startAutoScroll);
    prevBtn[i].addEventListener('mouseout', startAutoScroll);
});


