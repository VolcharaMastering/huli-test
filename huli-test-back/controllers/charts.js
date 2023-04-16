const IncorrectData = require('../errors/requestError');
const ServerError = require('../errors/serverError');
const { generateChartData } = require('../models/chartData');
const { OK_CODE } = require('../states/states');

const charts = async (req, res, next) => {
    if (!req.query.dates) {
        next(new IncorrectData('No dates selected'));
        return;
    }
    const dates = req.query.dates.split(',');
    try {
        const columnChartData = await generateChartData(dates);

        res.status(OK_CODE).send(columnChartData);
    } catch (e) {
        next(new ServerError('Server Error'));
    }
};

module.exports = { charts };