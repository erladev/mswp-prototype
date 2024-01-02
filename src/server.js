const express = require('express');
const OpenAI = require('openai');
const app = express();
const openai = new OpenAI();
const port = 3000;
const model = "gpt-3.5-turbo";

app.get('/assistant/:message', (req, res) => {
  const message = req.params.message;
  callOpenai(message).then(result => {
    console.log('result', result);
    res.send(`Got following result: ${result.message.content}`)
  }).catch(error => {
    console.log(error);
  })
})

app.listen(port, () => {
  console.log(`CyberComply app listening on port ${port}`)
})

async function callOpenai(messageContent) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: messageContent }],
    model,
  });
  return completion.choices[0];
}
