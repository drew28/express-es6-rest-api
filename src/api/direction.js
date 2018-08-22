import resource from 'resource-router-middleware';
import request from 'request';

const uri = 'http://www.expresslanes.com/on-the-road';

export default({ config, db }) => resource({
    id: 'direction',

    index(_, res) {
        request({ uri }, function(error, response, body) {
            const lines = body.split('\n');
            const directionLine = lines.filter((line) => line.includes('direction95'));
            const rawDirection = directionLine[0].split(':')[1];
            const direction = rawDirection.replace(/[',]/g,'').trim();
            res.json({
                'direction95': direction
            });
            return;
        });
    }

});
