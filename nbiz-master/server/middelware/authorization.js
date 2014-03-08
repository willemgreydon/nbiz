/*
 *  Generic require login routing middleware
 */
; module.exports.requiresLogin = function (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/login')
  }
  next()
}

/*
 *  User authorizations routing middleware
 */
; module.exports.user = {
    hasAuthorization : function (req, res, next) {
      if (req.profile.id != req.user.id) {
        return res.redirect('/users/'+req.profile.id)
      }
      next()
    }
}

/*
 *  Article authorizations routing middleware
 */
; module.exports.article = {
    hasAuthorization : function (req, res, next) {
      if (req.article.user.id != req.user.id) {
        return res.redirect('/articles/'+req.article.id)
      }
      next()
    }
}
