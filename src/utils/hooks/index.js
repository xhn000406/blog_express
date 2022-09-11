const fs = require('fs');


const autoRouter = function(url){
 
  return  fs.readdirSync(url,(err,files)=>{
        if(err) return console.log("文件不存在，出现大错误");
   files.forEach( item => {
          let demo
         demo = item.split('.')[0] = require(`../../src/routers/${item}`)
         app.use(demo)
         console.log(app)
        });

    })


}


module.exports = {
    autoRouter
}