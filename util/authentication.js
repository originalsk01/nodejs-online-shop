function createUserSession(req, user, action) {
  req.session.uid = user._id.toString();
  req.session.isAdmin = user.isAdmin;
  req.session.save(action);
}

function destoyUserAuthSession(req) {
  req.session.uid = null;
  //   req.session.isAuth = false;
}

module.exports = {
  createUserSession: createUserSession,
  destoyUserAuthSession: destoyUserAuthSession,
};
