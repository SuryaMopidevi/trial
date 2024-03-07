import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

dotenv.config()

const port = process.env.PORT
const URL = process.env.URL

app.get('/add', (request, response) => {
    const a = request.body.a
    const b = request.body.b
    if (!b) {
        response.json(400, {
            message: "B can't be Zero"
        })
        return
    }
    else if (!a || !b) {
        response.json(400, {
            message: "invalid"
        })
        return
    }
    response.json(200, {
        add: a + b,
        sub: a - b,
        pro: a * b,
        div: a / b
    })
})

// app.get('/sub', (request, response) => {
//     console.log(request.body.a)
//     const a = request.body.a
//     const b = request.body.b
//     if (!a || !b) {
//         response.json(400, {
//             message: "invalid"
//         })
//         return
//     }

//     response.json(200, {
//         res: a - b
//     })
// })

app.listen(port, () => {
    console.log(`Server is running  on ${port}`)
})