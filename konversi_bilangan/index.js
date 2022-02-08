const express = require('express'); //import express

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Konversi suhu");
})

const port = 1234;
app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})

// decimal
app.get('/convert/decimal/:bilangan', (req, res) => {
    let desimal = Number(req.body.bilangan);

    let biner = desimal.toString(2)
    let oktal = desimal.toString(8)
    let hexadesimal = desimal.toString(16)

    res.send({
        message : "Berhasil konversi bilangan",
        decimal : desimal,
        result : {
            biner : biner,
            oktal : oktal,
            hexadesimal : hexadesimal
        }
    })
});

// biner
app.get('/convert/biner/:bilangan', (req, res) => {
    let biner = req.body.bilangan;
    let desimal = parseInt(biner, 2)

    let d = desimal
    let oktal = desimal.toString(8)
    let hexadesimal = desimal.toString(16)

    res.send({
        message : "Berhasil konversi bilangan",
        biner : biner,
        result : {
            desimal : d,
            oktal : oktal,
            hexadesimal : hexadesimal
        }
    })
});

app.post('/convert/octal/:bilangan', (req, res) => {
    let bilangan = Number(req.body.bilangan)
    let desimal = parseInt(bilangan, 8)

    let result = {
        decimal: desimal,
        biner: desimal.toString(2),
        hexadecimal: desimal.toString(16)
    }
    res.send({
        message: "Berhasil melakukan konversi bilangan",
        data: {
            octal: bilangan,
            result
        }
    })
})

// convert hexadecimal
app.post('/convert/hexadecimal/:bilangan', (req, res) => {
    let bilangan = req.body.bilangan
    let desimal = parseInt(bilangan, 16)

    let result = {
        decimal: desimal,
        biner: desimal.toString(2),
        octal: desimal.toString(8)
    }
    res.send({
        message: "Berhasil melakukan konversi bilangan",
        data: {
            hexadecimal: bilangan,
            result
        }
    })
})