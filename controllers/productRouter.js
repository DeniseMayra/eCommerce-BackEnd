import {Router} from 'express'
import {onlyAdmin} from '../server/setAdmin.js'
import {getAllProducts, getProdById, saveProd, updateProd, deleteProd} from '../models/productApi.js'

const productRouter = new Router()
// id, name, description, image (url), price

productRouter.get('/', getAllProducts)
productRouter.get('/:id', getProdById)
productRouter.post('/',onlyAdmin , saveProd)
productRouter.put('/:id',onlyAdmin , updateProd)
productRouter.delete('/:id',onlyAdmin , deleteProd)

export default productRouter