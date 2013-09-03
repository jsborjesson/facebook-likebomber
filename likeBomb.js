/**
 * Clicks all "like"-buttons it can find on current facebook page.
 *
 * @param delay {Number} the number of milliseconds between likes
 * @param num {Number} the number of buttons to click in total
 * If the function is called without arguments it will click
 * all visible like-buttons with a 1 second delay.
 */
var likeBomb = (function () {
    // Returns an array of all likebuttons currently on the page
    function getLikeButtons() {

        // Get all the like-links
        var links = document.querySelectorAll('.UFILikeLink'),
            likebuttons = [],
            i;

        // Filter out unlike-links
        for (i = 0; i < links.length; i++) {
            if (links[i].innerHTML === 'Like') {
                likebuttons.push(links[i]);
            }
        }

        return likebuttons;

    }

    // Bomb an array of items
    function bomb(arr, delay) {

        var index = 0;

        // Recursive button-clicker
        (function repeater() {

            // If there are items left
            if (index < arr.length) {

                console.log(arr.length - index + ' buttons to go!');

                // Click the next like-button
                arr[index].click();

                // Increment
                index++;

                // Delay recursion
                setTimeout(repeater, delay);

            } else {
                console.info('Done!');
            }
        }());
    }

    // Bomb all likebuttons
    return function likeBomb(delay, num) {

        var buttons = getLikeButtons();

        // Pick out the first num posts in array
        if (num) {
            buttons = buttons.splice(0, num);
        }

        // Default to 1s
        delay = delay || 1000;

        // Weapons free!
        bomb(buttons, delay);

    }
}());
