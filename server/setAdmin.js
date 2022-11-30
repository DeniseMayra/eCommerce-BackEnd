let isAdmin = false

function login(req,res){
    isAdmin = true
    console.log('is admin')
    res.sendStatus(200)
}
function logout(req,res){
    isAdmin = false
    console.log('admin logout')
    res.sendStatus(200)
}

function onlyAdmin(req,res,next){
    if (isAdmin){
        next()
    } else {
        res.sendStatus(403)
    }
}

export {onlyAdmin, login, logout}