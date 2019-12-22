import sirv from 'sirv';
import polka from 'polka';
import * as sapper from '@sapper/server';

const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

polka().use(
  '/portfolio',
  sirv('static', {dev}),
  sapper.middleware()
).listen(PORT || 5000, err => {
  if(err) console.error(err);
});
