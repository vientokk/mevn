const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log('1 Time : ', Date.now());
    next();
});

app.use((req, res, next) => {
    console.log('3 Time : ', Date.now());
    next();
});

app.listen(PORT, () => {
    console.log(`서버생성 ${PORT}`);
});