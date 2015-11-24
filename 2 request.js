// NPM Node packaged modules

var request = require('request');
var fs = require('fs');

request({
    url: 'https://api.github.com/search/repositories?q=nodejs',
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
    }
}, function (err, res, body) {
    var obj = JSON.parse(body);
    console.log('Got ', obj.items.length, ' repositories.');

    fs.writeFile('data.json', body, function (err) {
        if (err) console.log('There was a problem saving the data ... ');
        else console.log('Saved info to the disk ... ');
    });
});