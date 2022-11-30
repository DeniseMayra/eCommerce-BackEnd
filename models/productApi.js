import container from './classFile.js'

const classContainer = new container('products.txt')


const getAllProducts = async (req,res) => {
    const allProds = await classContainer.getAll()
    res.json(allProds)
}

const getProdById = async (req, res) => {
    const prodById = await classContainer.getById(req.params.id)
    if (prodById != null){
        res.json(prodById)
    } else {
        res.json(null)
    }
}

const saveProd = async (req,res) => {
    const id = await classContainer.save({...req.body})
    res.json(id)
}

const updateProd = (req,res) => {
    classContainer.updateById({...req.body, id: req.params.id})
    res.json('Actualizado')
}

const deleteProd = (req,res) => {
    classContainer.deleteById(req.params.id)
    res.json('Eliminado')
}


export {getAllProducts, getProdById, saveProd, updateProd, deleteProd}
