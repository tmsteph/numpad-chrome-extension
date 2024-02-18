document.addEventListener('keydown', function(event) {
    console.log("Key pressed:", event.code); // Log the code of the key pressed
    
    if (!event.altKey) { // Check if Alt key is pressed for example
        switch(event.keyCode) {
            case 98: // Numpad 2: Scroll down
                console.log('Action: Scroll down');
                window.scrollBy(0, 100);
                break;
            case 104: // Numpad 8: Scroll up
                console.log('Action: Scroll up');
                window.scrollBy(0, -100);
                break;
            case 100: // Numpad 4: Scroll left
                console.log('Action: Scroll left');
                window.scrollBy(-100, 0);
                break;
            case 102: // Numpad 6: Scroll right
                console.log('Action: Scroll right');
                window.scrollBy(100, 0);
                break;
            default:
                console.log('Action: No mapping for this key');
                break;
        }
    } else {
        console.log('Alt key is pressed, ignoring numpad input.');
    }
});
