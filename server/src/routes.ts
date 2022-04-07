import { Router } from 'express';
import weatherController from './controllers/weatherController'
import currencyController from './controllers/currencyController';


const routes = Router();

routes.get('/weather', weatherController.index);

routes.get('/currency', currencyController.index);

export default routes;