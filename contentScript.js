document.addEventListener('keydown', function(event) {
    if (!event.altKey) { // Check if Alt key is pressed for example
        switch(event.keyCode) {
            case 98: // Numpad 2: Scroll down
                window.scrollBy(0, 100);
                break;
            case 104: // Numpad 8: Scroll up
                window.scrollBy(0, -100);
                break;
            case 100: // Numpad 4: Scroll left
                window.scrollBy(-100, 0);
                break;
            case 102: // Numpad 6: Scroll right
                window.scrollBy(100, 0);
                break;
        }
    }
});