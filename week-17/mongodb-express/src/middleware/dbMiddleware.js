// pass db instance to controllers from index
const dbMiddleware = (client) => {
  return (req, res, next) => {
    //   if req doesn't have db instance, add method
    if (!req.db) {
      req.db = client.db();
    }
    next();
  };
};

module.exports = dbMiddleware;
