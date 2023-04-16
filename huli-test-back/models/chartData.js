function generateChartData(dates) {
    const data = [];
    for (const date of dates) {
        console.log('dates in chart',dates);
      const numIncomingCalls = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
      const numOutgoingCalls = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
      data.push({ date, numIncomingCalls, numOutgoingCalls });
    }
    
    console.log('data',data);
    return data;
  }
module.exports = { generateChartData };