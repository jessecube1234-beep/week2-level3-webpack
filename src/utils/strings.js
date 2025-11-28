/**
 * String utility functions to demonstrate tree shaking.
 */

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} text - Input text.
 * @returns {string} Text with first letter capitalized.
 */
export function capitalize(text) {
    if (!text) { return ""; }

    return text[0].toUpperCase() + text.slice(1);
}

/**
 * Reverses a string.
 *
 * @param {string} text - Input text.
 * @returns {string} Reversed text.
 */
export function reverse(text) {
    // 1. Splits the text into multiple characters
    // 2. Reverses the position of each of the individual characters
    // 3. Joins them back together
    return text.split("").reverse().join("");
}

/**
 * Converts a string to kebab-case.
 *
 * @param {string} text - Input text.
 * @returns {string} Kebab-cased text.
 */
export function toKebabCase(text) {
    return text
        .trim() // This removes all of the spaces in a string
        .toLowerCase() // Makes all characters lowercase
        .split(/\s+/) // Splits the words into tokens
        .join("-"); // Joins the tokens with hyphens
}
