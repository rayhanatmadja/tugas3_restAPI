const express = require('express'); //import express

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Konversi suhu");
})

app.get('/convert/celcius/:suhu', (req, res) => {
    let c = req.body.suhu;

    let k = (c * 1) + 273.15
    let f = (c * 9/5) + 32
    let r = c * (4/5)

    res.send({
        celcius : c,
        result : {
            kelvin : k,
            fahrenheit : f,
            reamur : r
        }
    })
});

app.get('/convert/reamur/:suhu', (req, res) => {
    let r = req.body.suhu;

    let k = (r / 0.8) + 273.15
    let f = (r * 2.25) + 32
    let c = r * (5/4)

    res.send({
        reamur : r,
        result : {
            kelvin : k,
            fahrenheit : f,
            celcius : c
        }
    })
});

app.get('/convert/kelvin/:suhu', (req, res) => {
    let k = req.body.suhu;

    let c = Math.round((k * 1) - 273.15)
    let f = Math.round((k - 273.15) * 9/5 +32)
    let r = 4/5 * (k - 273)

    res.send({
        kelvin : k,
        result : {
            celcius : c,
            fahrenheit : f,
            reamur : r
        }
    })
});

app.get('/convert/fahrenheit/:suhu', (req, res) => {
    let f = req.body.suhu;

    let c = 5/9 * (f - 32)
    let r = 4/9 * (f - 32)
    let k = 5/9 * (f - 32) + 273

    res.send({
        fahrenheit : f,
        result : {
            celcius : c,
            reamur : r,
            kelvin : k
        }
    })
});

const port = 8888;
app.listen(port, () => {            
    console.log(`Server di port ${port}`)
})
