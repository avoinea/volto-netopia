import { postBackendResourceWithAuth } from '@plone-collective/volto-netopia/helpers';

function netopiaMiddleware(req, res, next) {
  const { errorHandler } = req.app.locals;
  postBackendResourceWithAuth(req)
    .then((resource) => {
      Object.keys(resource.headers).forEach((header) =>
        res.set(header, resource.headers[header]),
      );
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
