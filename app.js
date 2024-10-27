const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const views = path.join(__dirname, 'views');

app.get('/', (req, res) => {
    res.sendFile(path.join(views, 'index.html'));
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})