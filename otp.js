// secondary verify logic

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;
const client = require('twilio')(SKd3a86ef05639f5d66d73ac534b31d3c6, Rpd9MIhaDn0X5VqaWJ4E3SkyOcAKmfh7, { AC98d97893090b22acbb0815a7ca47fd92 });

const port = 3000
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
        body: `Welcome to LoggIt your OTP is : ${number}`,
        to: '+916290115661',
        from: '+16692813093'
    }).then(message => console.log(message))
        // here you can implement your fallback code
        .catch(error => console.log(error))

}