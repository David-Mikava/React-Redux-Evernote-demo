module.exports = function isAuth(req, res, next) {
  const user = req.session?.user?.name;
  if (user) {
    next();
  } else {
    res.sand('Вы не вошли в аккаунт!');
  }
};
