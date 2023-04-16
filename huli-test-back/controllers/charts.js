const IncorrectData = require('../errors/requestError');
const ServerError = require('../errors/serverError');
const { generateChartData } = require('../models/chartData');
const { OK_CODE } = require('../states/states');

const charts = async (req, res, next) => {
    const dates = req.query.dates.split(',');
    // console.log('dates', dates);
    // }else{
    //     dates
    //     console.log('dates2',dates);

    // }
    try {
        const columnChartData = await generateChartData(dates);
        // if (!dates) {
        //     next(new IncorrectData('No dates selected'));
        //     return;
        // }
        res.status(OK_CODE).send(columnChartData);
        // console.log(columnChartData)
    } catch (e) {
        next(new ServerError('Server Error'));
    }
};

module.exports = { charts };