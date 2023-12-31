const express  = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000

app.use(cors())

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois',       
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birtLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') //dirname is server directory/root
})

app.get('/api/:name', (request, response) =>{
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]){ //if rapper's name is in the rapper object
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}.`)
})