const {GoogleSpreadsheet} = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('194OWGWnW7y0X5h3M6uqe0sWmNdRXUuFwwYzVV5JSZmY')

const run = async() =>{
    try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)
    }catch(err){
        console.log(err)
    }
}
run()