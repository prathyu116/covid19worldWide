const { response } = require('express')
const express=require('express')
const { NovelCovid } = require('novelcovid');
 const exhbs=require('express-handlebars');
const track = new NovelCovid();

track.countries().then((response)=>{
    
    console.log(response);
})



const app=express()
app.set('view engine','hbs');
app.engine('hbs',exhbs({
    extname:'hbs',
    defaultView:'home',
    layoutsDir:__dirname+'/views/layout/'
}));

    app.get('/',(req,res)=>{
        track.countries().then((response)=>{
            // const x=response.filter(data=>data.countries===y)
            res.render('home',{info:response}) 
            console.log(info);
        })
        
       
    })
   

app.listen(4000,()=>{
    console.log('runningg');
})
