const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 2910
app.listen(port, () => console.log(`App running ${port}`))

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send("Menghitung Body Mass Index (BMI)")
})

app.post('/bmi', (req, res) => {
    let t = parseFloat(req.body.tinggi)
    let b = parseFloat(req.body.berat)
    let result = b / (t * t)
    let status = "kosong"
    if (result < 18.5) {
        status = "Kekurangan berat badan"
    } else if (result >= 18.5 && result <= 24.9) {
        status = "Normal (ideal)"
    } else if (result >= 25 && result <= 29.9) {
        status = "Kelebihan berat badan"
    } else if (result >= 30) {
        status = "Kegemukan (Obesitas)"
    }
    res.send({
        tinggi: t,
        berat: b,
        bmi: result,
        status: status
    })
})