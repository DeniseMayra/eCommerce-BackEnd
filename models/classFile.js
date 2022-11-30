import {randomUUID} from "crypto"
import fs from 'fs'

class container {
    constructor(fileName){
        this.name = fileName,
        this.content = []
    }

    async save(obj){
        try{
            if(fs.existsSync(this.name)){
                const jsonData = await fs.promises.readFile(this.name, 'utf-8')
                this.content = JSON.parse(jsonData)
                const newObj = {...obj, id: randomUUID()}
                this.content.push(newObj)
                await fs.promises.writeFile(this.name, JSON.stringify(this.content))
                return newObj.id
            }else{
                obj.id = randomUUID()
                await fs.promises.writeFile(this.name, JSON.stringify([obj]), null, 2)
                return obj.id
            }
        }
        catch(err){ console.log(err)}
    }
    
    async getAll(){ //devuelve array de prod 
        try{
            const dataJson = await fs.promises.readFile(this.name, 'utf-8')
            return JSON.parse(dataJson)
        }catch(error){
            console.log(error)
        }
    } 

    async getById(idNumber){  //devuelve objeto con id enviado
        try{
            const jsonData = await fs.promises.readFile(this.name, 'utf-8')
            for(let prod of JSON.parse(jsonData)){
                if(prod.id == idNumber){
                    return prod 
                }
            }
            return null
        }  
        catch(error){ console.log(error)}
    }
    
    async deleteAll(){
        try{
            this.content = []
            fs.promises.writeFile(this.name, JSON.stringify(this.content))
            console.log("Eliminado correctamente")
        }
        catch(error){console.log(error)}
    }
    
    async deleteById(idNumber){
        try{
            const jsonData = await fs.promises.readFile(this.name, 'utf-8')
            const data = JSON.parse(jsonData)
            this.content = data.filter((prod) => prod.id != idNumber)
            fs.promises.writeFile(this.name, JSON.stringify(this.content))
        }
        catch(error){console.log(error)}
    } 

    async updateById(obj){
        try{
            // const numId = parseInt(obj.id)
            const dataJson = await fs.promises.readFile(this.name, 'utf-8')
            const data = JSON.parse(dataJson)
            this.content = data.filter((prod) => prod.id != obj.id)
            this.content.push({...obj})
            fs.promises.writeFile(this.name, JSON.stringify(this.content))
        }
        catch(error){console.log(error)}
    }
}

export default container



