import resource from 'resource-router-middleware';
import request from 'request';

const uri = 'http://www.expresslanes.com/cache/roadway/entry_exit.js';

export default({ config, db }) => resource({
    id: 'direction',

    index(_, res) {
        request({ uri }, function(error, response, body) {
            console.log(body);
            res.send(response.body.split('entryExits = ')[1]);
            return;
        });
    }

});
