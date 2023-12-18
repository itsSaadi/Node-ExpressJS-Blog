const express = require('express')
const app = express()
const port = 3000
const path=require('path')
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname,'./static')))
app.use('/',require(path.join(__dirname,'/router/blog')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})