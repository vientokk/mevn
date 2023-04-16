const express = require("express");
const app = express();
const logger = require("morgan");
const PORT = 3000;
app.use(logger('tiny'));
const simple_module = require("./simple_module.js");
app.get('/');
app.get('/users/:userName/books/:bookName', simple_module.handleBook);

app.listen(PORT, () => {
    console.log(`서버가 생성 ${PORT}`);
})


// const express = require('express')
// const app = express()
// const loogger = require('morgan')
// const PORT = 3000
// app.use(loogger('tiny'))
// const simple_module = require('./simple_module.js')
// app.get('/', simple_module.intro)
// app.get('/users/:userName/books/:bookName', simple_module.handleBook)

// app.listen(PORT, () => {
//     console.log(`서버가 생성되었습니다.${PORT}`)
// })
