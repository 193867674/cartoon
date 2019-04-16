
module.exports =  {
    configureWebpack: {
        devServer: {
            proxy: {
                "/api": {
                    target:"https://www.mangaeden.com",
                    pathRewrite: {"^/api":""}
                }
            }
        }
    }
  }