import express from 'express'
import productsRouter from '../controllers/productRouter.js'
import cartsRouter from '../controllers/cartsRouter.js'
import { login, logout} from './setAdmin.js'

const app = express()


// mildware
app.post('/login', login)
app.post('/logout', logout)

// ----------- server -----------
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', express.static('../public'))

app.use('/api/products', productsRouter)
app.use('/api/shoppingcart', cartsRouter)

app.all('*', (req,res) => {
    res.status(404).json('Error de ruta')
})

// ----------- server -----------

const port = process.env.PORT ?? 8080 
const server = app.listen(port, () => {
    console.log(`conectado al puerto ${server.address().port}`)
})
server.on('error', error => console.log(error))

