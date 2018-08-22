import { version } from '../../package.json';
import { Router } from 'express';
import direction from './direction';
import entryExit from './entry-exit';
import signs from './signs';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/direction', direction({ config, db }));
	api.use('/signs', signs({ config, db }));
	api.use('/entry_exit', entryExit({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
