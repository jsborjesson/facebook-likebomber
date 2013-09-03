# Facebook Likebomber

> The best way to be an annoying asshole on facebook.

Clicks like-buttons in Facebook automatically,
with a custom delay so you can (hopefully) avoid
getting blocked and still sit back while being an
annoying little asshat.

## USAGE:

1. Paste the contents of `bomb.js` in the JS-console while on facebook.
2.  Use the function likeBomb(delayInMs, limit)
    For example:

        // Use standards (1 second delay, no limit)
        likeBomb()

        // 1 second, stop after 50 likes
        likeBomb(1000, 50)

Note: If you want to get as many likes as you can in one go, you should scroll down the page before running the script. This way, Facebook loads more content, and more like-buttons.
