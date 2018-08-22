import resource from 'resource-router-middleware';
import request from 'request';

const uri = 'https://www.expresslanes.com/js/data/dms-signs.js?version=2';

export default({ config, db }) => resource({
    id: 'signs',

    index(_, res) {
        request({ uri }, function(error, response, body) {
            res.send(response.body.split('dmsSigns = ')[1]);
            return;
        });
    }
});