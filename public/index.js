// const {isAdmin} = require('../server/server')

let isAdmin = true

if (isAdmin) {
    const container = document.getElementById('container')
    container.innerHTML = `<form action="/api/products" method="POST" id="productForm" class="form">
                        <fieldset class="fieldset">
                            <legend class="legend"> Ingrese la información </legend>
                            <input class="input" type="text" name="name" id="name" placeholder="ingrese nombre del producto">
                            <input class="input" type="text" name="description" id="description" placeholder="ingrese descripcion">
                            <input class="input" type="text" name="price" id="price" placeholder="ingrese precio">
                            <input class="input" type="text" name="image" id="image" placeholder="ingrese url a la foto">
                            <button class="button" type="submit">Enviar</button>
                        </fieldset>
                    </form>`
}