# Facebook Likebomber

> The perfect way to spread love on Facebook.

Clicks like-buttons in Facebook automatically,
with a custom delay so you can (hopefully) avoid
getting blocked and still sit back while liking
the shit out of everything.

## USAGE:

1. Paste the contents of `likeBomb.js` in the JS-console while on Facebook.
2.  Use the function likeBomb(delayInMs, limit)
    For example:

        // Use standards (1 second delay, no limit)
        // To avoid getting blocked, this should probably
        // be set higher.
        likeBomb()

        // 3 seconds, stop after 50 likes
        likeBomb(3000, 50)

Note #1: If you want to get as many likes as you can in one go, you should scroll down the page, and "load more comments" before running the script. This way, Facebook loads more content, and more like-buttons.

Note #2: Facebook will only **temporarily block your ability to like things** if you overuse this script. This is achievable even by being quick and persistent with your mouse, Facebook cannot know the difference.

Note #3: The script will not persist, if you refresh the page, or close the browser, you will need to paste it again.

## License

**WTFPL**
