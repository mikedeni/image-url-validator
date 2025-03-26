/**
 * Checks if a URL points to an image.
 * @param {string} url - The URL to check.
 * @returns {Promise<boolean>} - Resolves to true if the URL is a valid image, false otherwise.
 */
async function isImageURL(url) {
    if (!url) {
        return false;
    }

    // Validate the URL
    try {
        new URL(url);
    } catch (_) {
        return false;
    }

    try {
        // Perform a HEAD request to check the content type
        const response = await fetch(url, { method: "HEAD" });

        if (!response.ok) {
            return false;
        }

        const contentType = response.headers.get("Content-Type");
        return contentType && contentType.startsWith("image/");
    } catch (error) {
        return false;
    }
}

module.exports = isImageURL;
