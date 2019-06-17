module.exports = {
    outputDir: 'www',
    // if the platform is a cordova platform - then we make relative rather than absolute path. 
    publicPath: process.env.CORDOVA_PLATFORM ? '/' : '',

    // publicPath: '',

    pluginOptions: {
      cordovaPath: 'src-cordova'
    }
}