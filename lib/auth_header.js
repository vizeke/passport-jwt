"use strict";

function parseAuthHeader(headerValue) {
  if (typeof headerValue !== "string") {
    return null;
  }

  let spaceIndex = headerValue.indexOf(" ");
  if (spaceIndex === -1) {
    // No space found, check  for CRLF separator
    spaceIndex = headerValue.indexOf("\n");
    if (spaceIndex === -1) {
      return null;
    }
  }

  // Extract the scheme (before the first space)
  const scheme = headerValue.slice(0, spaceIndex);
  // Extract the value after the space
  const value = headerValue.slice(spaceIndex + 1);

  return { scheme, value };
}

module.exports = {
  parse: parseAuthHeader,
};
