const {GoogleSpreadsheet} = require('google-spreadsheet')
const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('194OWGWnW7y0X5h3M6uqe0sWmNdRXUuFwwYzVV5JSZmY')

const run = async() =>{
    try{
    await doc.useServiceAccountAuth(credentials)
    await doc.loadInfo()
    console.log(doc.title)

    const sheet = doc.sheetsByIndex[1]
    await sheet.addRow({
        Nome: 'Joelson ramos',
        Email: 'contato@gmail.com',
        Whatsapp: '41 996437331',
        Cupom: 'aaa111',
        Promo:'asdferr'
    })

    }catch(err){
        console.log(err)
    }
}
run()