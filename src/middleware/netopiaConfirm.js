import { getAPIResourceWithAuth } from '@plone/volto/helpers';

const HEADERS = ['content-type', 'content-disposition', 'cache-control'];

function netopiaMiddleware(req, res, next) {
  const { errorHandler } = req.app.locals;
  getAPIResourceWithAuth(req)
    .then((resource) => {
      // Just forward the headers that we need
      HEADERS.forEach((header) => {
        if (resource.headers[header]) {
          res.set(header, resource.headers[header]);
        }
      });

      res.send(resource.body);
    }, errorHandler)
    .catch(errorHandler);
}

export default function (express) {
  const middleware = express.Router();

  middleware.all(['**/netopia.confirm$'], netopiaMiddleware);
  middleware.id = 'netopiaConfirmResourcesProcessor';
  return middleware;
}
