import {Router} from 'express'
import {getIdCarts ,createCart, deleteContent, getProdInCart, newProd, deleteProdInCart} from '../models/cartApi.js'

const cartsRouter = new Router()
//{id, productos: [{id, name, description, image (url), price}]} 

cartsRouter.get('/', getIdCarts)
cartsRouter.post('/', createCart)
cartsRouter.delete('/:id_cart', deleteContent)
cartsRouter.get('/:id_cart/products', getProdInCart)
cartsRouter.post('/:id_cart/products', newProd)
cartsRouter.delete('/:id_cart/products/:id_prod', deleteProdInCart)


export default cartsRouter