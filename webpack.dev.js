const  {merge}=require("webpack-merge");
const commonConfig=require("./webpack.config");
module.exports=merge(commonConfig,()=>{
    return{
        devtool:'inline-source-map',
        mode:'development',
        devServer:{
            contentBase:"./dist",
            hot:true,
        },
    };
})