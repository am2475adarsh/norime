const express = require("express")
const app = express()
const client = require('twilio')('AC4f2845bcdab84555e7247887677fc617', 'bd5acb4c6a91614d88c265c8a00b2c10');

const port = 3001
app.get('/', (req, res) => {
    sendTextMessage();
    res.send(`
    <h1>Your message has been sent successfully!</h1>
    <h2>Hello there!</h2>
    `);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

function sendTextMessage() {

    const number = Math.trunc(Math.random() * 9000) + 1;
    console.log(number);
    client.messages.create({
        body: `Aapki saari amaanat ab meri huehuehue!
         Yo zubu here aapka piglet🐷, test karne ke liye aapko bhej rha hu OTP darr mat jaana ${number}`,
        to: '+916290115661',
        from: '+16692813093'
    }).then(message => console.log(message))
        // here you can implement your fallback code
        .catch(error => console.log(error))

}
