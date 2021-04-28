module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("/img");
    eleventyConfig.addPassthroughCopy("/img/uploads");
    eleventyConfig.addPassthroughCopy("/admin");
    

    eleventyConfig.setTemplateFormats([
        "md",
        "css",
        "njk",
        "liquid",
        "jpg",
        "png",
        "webp",
      ]);
};