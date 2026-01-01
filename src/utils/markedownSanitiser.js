const  {marked}  = require("marked");

const sanitizeHtmlLibrary = require("sanitize-html");
const trundown= require("turndown");

function sanitizeMarkdownContent(markdownContent) { 
    //  convert markdown to HTML
    const turndownService = new trundown();
    const convertedHtml = marked.parse(markdownContent);
    console.log("convertedHtml", convertedHtml);


    //sanitize html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags. concat([ 'img' ]),
    
    })
    console.log("sanitizedHtml", sanitizedHtml);

    // convert sanitized HTML back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    console.log("sanitizedMarkdown", sanitizedMarkdown);
    return sanitizedMarkdown;
}

module.exports= sanitizeMarkdownContent;