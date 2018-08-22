const TEXT_DELIMITER__GOOGLE_ANCHOR = require( './constants' )

const getLinks = ( cssSelector ) => {
  const anchors = selectAnchors( cssSelector )
  return convertAnchorsToLinks( anchors )
}

const convertAnchorsToLinks = ( anchors ) => {
  return anchors.map( convertAnchorToFormattedText )
}

const convertAnchorToFormattedText = ( anchor ) => {
  const title = extractTitleFromAnchor( anchor )
  const uri = extractURIFromAnchor( anchor )
  return `${ title } - ${ uri }`
}

const extractTitleFromAnchor = ( anchor ) => {
  return anchor
    .textContext
    .split( TEXT_DELIMITER__GOOGLE_ANCHOR )[ 0 ]
    .trim()
}

const extractURIFromAnchor = ( anchor ) => {
  return anchor.href
}

const selectAnchors = ( cssSelector ) => {
  return Array.from( document.querySelectorAll( cssSelector ) )
}


module.exports.getLinks = getLinks
module.exports.convertAnchorsToLinks = convertAnchorsToLinks
module.exports.convertAnchorToFormattedText = convertAnchorToFormattedText
module.exports.extractTitleFromAnchor = extractTitleFromAnchor
module.exports.extractURIFromAnchor = extractURIFromAnchor
module.exports.selectAnchors = selectAnchors
