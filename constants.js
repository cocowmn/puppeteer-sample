// const CSS_SELECTOR__SEARCH_INPUT = '#searchbox input' // developers.google.com
// const CSS_SELECTOR__SEARCH_INPUT = '#lst-ib' // google.com
const CSS_SELECTOR__SEARCH_INPUT = '#search' // youtube.com
module.exports.CSS_SELECTOR__SEARCH_INPUT = CSS_SELECTOR__SEARCH_INPUT

// const CSS_SELECTOR__SHOW_RESULTS_ALL = '.devsite-suggest-all-results' // developers.google.com
// const CSS_SELECTOR__SHOW_RESULTS_ALL = 'input[type=submit]' // google.com
const CSS_SELECTOR__SHOW_RESULTS_ALL = '#search-icon-legacy' // youtube.com
module.exports.CSS_SELECTOR__SHOW_RESULTS_ALL = CSS_SELECTOR__SHOW_RESULTS_ALL

// const CSS_SELECTOR__SHOW_RESULTS_ITEM = '.gsc-results .gsc-thumbnail-inside a.gs-title' // developers.google.com
// const CSS_SELECTOR__SHOW_RESULTS_ITEM = 'h3.r > a' // google.com
const CSS_SELECTOR__SHOW_RESULTS_ITEM = 'h3 > a#video-title' // youtube.com
module.exports.CSS_SELECTOR__SHOW_RESULTS_ITEM = CSS_SELECTOR__SHOW_RESULTS_ITEM

const TEXT_DELIMITER__GOOGLE_ANCHOR = '|' // developers.google.com, google.com, youtube.com
module.exports.TEXT_DELIMITER__GOOGLE_ANCHOR = TEXT_DELIMITER__GOOGLE_ANCHOR

// const WEB_URI__GOOGLE_DEVELOPERS = 'https://developers.google.com/web/' // developers.google.com
// const WEB_URI__GOOGLE = 'https://google.com/' // google.com
const WEB_URI__YOUTUBE = 'https://youtube.com/' // youtube.com
module.exports.WEB_URI = WEB_URI__YOUTUBE
