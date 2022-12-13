let express = require('express')
let state_api = require('./routes/states')

let app = express()

app.use(express.json())

app.use('/api', state_api)

app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next){
    console.log(err)
    res.status(500).send('Server error')
})

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port', server.address().port)
})
