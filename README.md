# Facebook Likebomber

> The best way to be an annoying asshole on facebook.

Clicks like-buttons in Facebook automatically,
with a custom delay so you can (hopefully) avoid
getting blocked and still sit back while being an
annoying little asshat.

## USAGE:

1. Paste the contents of `likeBomb.js` in the JS-console while on facebook.
2.  Use the function likeBomb(delayInMs, limit)
    For example:

        // Use standards (1 second delay, no limit)
        // To avoid getting blocked, this should probably
        // be set higher.
        likeBomb()

        // 3 seconds, stop after 50 likes
        likeBomb(3000, 50)

Note: If you want to get as many likes as you can in one go, you should scroll down the page, and "load more comments" before running the script. This way, Facebook loads more content, and more like-buttons.

Note #2: Facebook will only **temporarily block your ability to like things** if you overuse this script. This is achievable even by being quick and persistant with your mouse, facebook cannot know the difference.

## License

**WTFPL**
