module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
    return resolve(
      markdown
        .replace(/<\!-- n -->\n/g, 'Notes: ')
        .replace(/<\!-- n -->\n/g, 'Notes: ')
        .replace(/!\[(.*)\]\((.*)\)/g, '<section data-background-image="$2"></section>')
    );
  });
};