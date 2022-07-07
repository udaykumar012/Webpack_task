//setup all config options of webpack so we dont want to manually type commands

const path=require("path");

module.exports={
    entry:"./src/index.js",
   
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist")
    },
    
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test:/\.scss$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test:/\.(jpg|png|PNG)$/,
                use:[
                    {loader:'url-loader'}
                ]
            }
        ]
    }
}