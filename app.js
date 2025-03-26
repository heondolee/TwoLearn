const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello TwoLearn');
});

const userRouter = require('./router/user.js');

app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});