require("dotenv").config()


const app = require('./src/app')

app.listen(3000 , () => {
    console.log('Server Started at port on http://localhost:3000')
})