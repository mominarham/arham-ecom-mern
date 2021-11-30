const express = require('express')
const app = express()
app.use(express.json())
const stripe = require('stripe')('sk_test_51JwkwTSInJQZSc8LYAnhpzSevjzP1KhWanoMfhSSPRRtWFb2Iy3WgoHZQWn02PQ05K7wdKWMU5GMX3pQmqJ41Wo100VuWjcINn')
const {v4:uuidv4} = require('uuid')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()
app.use(cors())

app.post('/payment',async (req,res)=>{
    const {token,total} = req.body
    try{
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id
        })
        const payment = await stripe.charges.create({
            amount:total*100,
            currency: 'inr',
            customer:customer.id,
            receipt_email:token.email
        },{idempotencyKey:uuidv4()})
        if(payment){
            console.log( 'pyament succes')
            res.json( {message:'payment succesfull'})
        }else{
            console.log( 'payment faild')
            res.json( {message:'payment failed'})
        }
    }catch(err){
        console.log('err==>',err)
    }
})


__dirname =path.resolve()
if(process.env.NODE_ENV ==='production'){
    app.use(express.static(path.join(__dirname,'/frontend/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}else{
    app.get('/', function (req, res) {
        res.send('Hello World')
      })
}

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
app.listen(5000,()=>{
    console.log( 'server is running')
})