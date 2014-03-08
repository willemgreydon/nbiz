module.exports = [
  {
    "name": "home" 
    , "navigationItems": [
      "home-logo"
      , "home-font"
    ]
    , "userGroup": "default"
    , "sortIds": [ 0, 1 ]
  }
  , {
    "name": "main"
    , "navigationItems": [
      "home-overview"
      , "services"
      , "philosopy"
      , "products"
      , "what-we-use"
      , "spacer"
      , "login-button"
    ]
    , "userGroup": "default"
    , "sortIds" : [ 0 , 1, 2, 3, 4, 5 ]
  }
  , {
    "name": "main"
    , "navigationItems": [
      "home-overview"
      , "services"
      , "products"
      , "what-we-use"
      , "spacer"
      , "logout-button"
    ]
    , "userGroup": "user-authorized"
    , "sortIds" : [ 0, 1, 2, 3, 4, 5 ]
  }
  , {
    "name": "main"
    , "navigationItems": [
      "concept"
      , "styleguide"
      , "foundation"
      , "spacer"
      , "logout-button"
    ]
    , "userGroup": "admin-authorized"
    , "sortIds" : [ 0, 1, 2, 3, 4 ]
  }
  , {
    "name": "footer"
    , "navigationItems": [
      "home-forge-tech"
      , "blog"
    ]
    , "userGroup": "default"
    , "sortIds" : [ 0, 1, 2, 3, 4 ]
  }
]