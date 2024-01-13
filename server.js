const express = require('express');
const { mainRouter } = require('./routes/index.routes');
const { ConnectDB } = require('./config/mysql.config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mainRouter);

ConnectDB();

app.use((req, res, next) => {
    return res
        .status(404)
        .json({ status: 404, success: false, message: 'Not Found', data: null });
});

app.use((err, req, res, next) => {
    return res
        .status(err.status || 500)
        .json({
            status: err.status || 500,
            success: false,
            message: err.message || 'Internal Server Error',
            data: null
        });
});

app.listen(3000, () => console.log('Running'));
