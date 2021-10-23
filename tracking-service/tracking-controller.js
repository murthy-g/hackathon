const trackingNumber = (pr = 'UB775', su = 'HK') => {
  for (let i = 0; i < 5; i++)
    pr += ~~(Math.random () * 10);
  return pr + su;
};

const trackingController = {
  getTrackingNumber: function (req, res) {
    console.log(req.body.trackCount);
    let trackingNumbers = [];
    for (let i = 1; i <= req.body.trackCount; i++) {
      trackingNumbers.push (trackingNumber ());
    }
    res.json ({trackingNumbers: trackingNumbers});
  },
};

module.exports = trackingController;
