import container from './classFile.js'

const classContainer = new container('carts.txt')

const getIdCarts = async(req,res) => {
    const cartsArray = await classContainer.getAll()
    res.json(cartsArray)
}
const createCart = async(req,res) => {
    const newCart = {products:[]}
    const id = await classContainer.save(newCart)
    res.json(id)
}
const deleteContent = (req,res) => {
    const empty = {id: req.params.id_cart, products: []}
    classContainer.updateById(empty)
    res.json('Carrito Vaciado')
}
const getProdInCart = async (req,res) => {
    const cart = await classContainer.getById(req.params.id_cart)
    res.json(cart.products)
}
const newProd = async (req,res) => {
    const cart = await classContainer.getById(req.params.id_cart)
    cart.products.push({...req.body})
    classContainer.updateById(cart)
    res.json('Agregado correctamente')
}
const deleteProdInCart = async (req,res) => {
    const cart = await classContainer.getById(req.params.id_cart)
    const updateCart = cart.products.filter((prod) => prod.id != req.params.id_prod)
    classContainer.updateById({id:req.params.id_cart, products:updateCart})
    res.json('Producto Eliminado')
}  

export {getIdCarts, createCart, deleteContent, getProdInCart, newProd, deleteProdInCart}