// API endpoint configuration
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

// Comment out the old file reading code
// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = async function(req, res, next) {
    await fetch(tripsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            res.render('travel', { title: 'Travlr Getaways', trips: json });
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    travel
};