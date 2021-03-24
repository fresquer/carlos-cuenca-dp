const postcssPresetEnv = require(`postcss-preset-env`)
const postcssImport = require(`postcss-import`)
const postcssNormalize = require('postcss-normalize')

module.exports = () => ({
    plugins: [
        postcssImport(),
        postcssNormalize(),
        postcssPresetEnv({
            stage: 0,
        }),
    ],
})