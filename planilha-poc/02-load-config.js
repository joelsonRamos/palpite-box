const {GoogleSpreadsheet} = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('194OWGWnW7y0X5h3M6uqe0sWmNdRXUuFwwYzVV5JSZmY')

const run = async() =>{
    try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')
    
    
    const mostrarPromocaoCell = sheet.getCell(1, 0)
    console.log(mostrarPromocaoCell.value)
    const textCell = sheet.getCell(1, 1)
    console.log(textCell.value)


    }catch(err){
        console.log(err)
    }
}
run()