import resource from 'resource-router-middleware';
import request from 'request';

const uri = 'https://www.expresslanes.com/js/data/dms-signs.js?version=2';

export default({ config, db }) => resource({
    id: 'signs',

    index(_, res) {
        request({ uri }, function(error, response, body) {
            const signsResponse = response.body.split('dmsSigns = ')[1];
            const splitByLineReturn = signsResponse.split('\n');
            const removedComments = splitByLineReturn.map((line) => {
                if (line.includes('\/\/')) {
                    return '';
                }
                return line;
            });
            const signReturn = removedComments.join('\n');
            res.send(signReturn);
            return;
        });
    }
});