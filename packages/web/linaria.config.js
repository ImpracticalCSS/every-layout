const path = require("path");

module.exports = {
    evaluate: true,
    displayName: true,
    tagResolver: (source, tag) => {
        if (tag === "styled") {
            const processor = path.join(__dirname, "linaria", "dist", "processor.js");
            return require.resolve(processor);
        }
        
        return null;
    }
  };