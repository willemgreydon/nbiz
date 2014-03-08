// Project-Config -
// This File contains the configuration needed for setting up
// a forge project

  // Import module dependencies
  var path = require('path')
  , _ = require('lodash')
  // Define root path
  // , root = path.normalize(__dirname + '/..)
  , root = "./"
  , absolute = "/"

  // Instantiate export-variables
  , paths
  , routesDefault
  , routesUserAuthorized
  , routesAdminAuthorized
  , navigationsDefault
  , navigationsUserAuthorized
  , navigationsAdminAuthorized
  , servers
  , environments
  // Only use Objects for creating project config
  // properties. DON'T USE ARRAYS as jade seems to have problems
  // iterating array-structures. As 'navigation = {}' works as expected
  // and 'navigation = []' fails to render navigation-contents during
  // Jade compilation.
  // TODO: Verify this behaviour otherwise create bug report.
  , navigationsDefault = {}
  , navigationsUserAuthorized = {}
  , navigationsAdminAuthorized = {}
  , subNavigations = {}
  , routesDefault = {}
  , routesUserAuthorized = {}
  , routesAdminAuthorized = {}
  , subRoutes = {}
  , servers = {}
  , environments = {}
  // Main folders
  , config = "config/"
  , client = "app/"
  , server = "server/"
  , test = "test/"
  , data = "data/"
  , node = "node_modules/" 
  , bower = "bower_modules/"

  // Temporary folders
  , temp = ".tmp/"
  , build= "build/"

  // Define asset
  , asset = "asset/"
  , audio = "audio/"
  , image = "image/"
  , video = "video/"
  , font = "font/"

  // Define http-headers
  , get = "get"
  , post = "post"
  , put = "put"
  , del = "del"

  // Define other
  , view = "views/"
  , style = "styles/"
  , script = "scripts/"
  , controller = "controllers/"
  , model = "models/"
  , service = "services/"
  , source = "sources/"
  , font = "fonts/"
  , api = "api/"
  , sprite = "sprites/"
  , user = "user/"
  , foundation = "foundation/"

  //---------------------------------------------------------------
  // Create paths - opject ( Start )
  //---------------------------------------------------------------
  , paths = { 
    "root": root
    , "config": root + config 
    , "test": root + test
    , "node": root + node
    , "bower": root + bower
    // TODO: What is this path for?
    // , "notifier": root + client + view + "notifier/"

    ,"server" : {
      "root": root + server
      , "config": root + server + config
      , "model": root + server + model
      , "view": root + server + view
      , "controller": root + server + controller
    }

    , "client": {
      "root": root + client
      , "view": root + client + view
      , "style": root + client + style
      , "script": root + client + script
      , "controller": root + client + controller
      , "view": root + client + view
      , "service": root + client + service
      , "fonts": root + client + font
      , "asset": root + client + asset
      , "image": root + client + asset + image
      , "audio": root + client + asset + audio
      , "video": root + client + asset + video
    }
    
    , "temp": {
      "root": root + temp
      , "view": root + temp + view
      , "style": root + temp + style 
      , "script": root + temp + script
      , "font": root + temp + font
    } 

    , "build": {
      "client": {
        "root": root + build + client
        , "view": root + build + client + view
        , "style": root + build + client + style
        , "script": root + build + client + script
        , "controller": root + build + client + controller
        , "view": root + build + client + view
        , "service": root + build + client + service
        , "font": root + build + client + font
        , "asset": root + build + client + asset
        , "image": root + build + client + asset + image
        , "audio": root + build + client + asset + audio
        , "video": root + build + client + asset + video
      }
      , "server": {
        "root": root + build + server
        , "config": root + build + server + config
        , "model": root + build + server + model
        , "view": root + build + server + view
        , "controller": root + build + server + controller
      }
    }
  }
  //---------------------------------------------------------------
  // Create paths - opject ( End )
  //---------------------------------------------------------------
  , notifier = {
    APN: false,
    email: false, // true
    actions: ['comment'],
    tplPath: paths.notifier,
    postmarkKey: 'POSTMARK_KEY',
    parseAppId: 'PARSE_APP_ID',
    parseApiKey: 'PARSE_MASTER_KEY'
  }
  //---------------------------------------------------------------
  // Create routes - opject ( Start )
  //---------------------------------------------------------------
  
  //--------------------------------------------------------------
  // Home Route
  //--------------------------------------------------------------
  ; routesDefault [ "home" ] = {
      "name": "Start"
      , "path": root + "home"
      , "templatePath": root + view + "home"
      , "types": false
  }  
  //--------------------------------------------------------------
  // Services Route
  //--------------------------------------------------------------
  ; routesDefault [ "services" ] = {
      "name": "Illustration"
      , "path": root + "services"
      , "templatePath": root + view + "services"
      , "types": false
  }   
  //--------------------------------------------------------------
  // Philosopy Route
  //--------------------------------------------------------------
  ; routesDefault [ "philosopy" ] = {
      "name": "Webdesign"
      , "path": root + "philosopy"
      , "templatePath": root + view + "philosopy"
      , "types": false
  }   
  //--------------------------------------------------------------
  // Products Route
  //--------------------------------------------------------------
  ; routesDefault [ "products" ] = {
      "name": "Photography"
      , "path": root + "products"
      , "templatePath": root + view + "products"
      , "types": false
  }     
  //--------------------------------------------------------------
  // What we use Route
  //--------------------------------------------------------------
  ; routesDefault [ "whatweuse" ] = {
      "name": "The Moderator"
      , "path": root + "whatweuse"
      , "templatePath": root + view + "whatweuse"
      , "types": false
  }       
  //--------------------------------------------------------------
  // Blog Route
  //--------------------------------------------------------------
  ; routesDefault [ "blog" ] = {
      "name": "Blog"
      , "path": root + "blog"
      , "templatePath": root + view + "blog"
      , "types": false
  }   
  //--------------------------------------------------------------
  // Jobs Route
  //--------------------------------------------------------------
  ; routesDefault [ "jobs" ] = {
      "name": "Jobs"
      , "path": root + "jobs"
      , "templatePath": root + view + "jobs"
      , "types": false
  }      
  //--------------------------------------------------------------
  // Contact Route
  //--------------------------------------------------------------
  ; routesDefault [ "contact" ] = {
      "name": "Contact"
      , "path": root + "contact"
      , "templatePath": root + view + "contact"
      , "types": false
  }       
  //--------------------------------------------------------------
  // Impressum Route
  //--------------------------------------------------------------
  ; routesDefault [ "impressum" ] = {
      "name": "Impressum"
      , "path": root + "impressum/"
      , "templatePath": root + view + "impressum"
      , "types": false
  }  
  //--------------------------------------------------------------
  // Contact Route
  //--------------------------------------------------------------
  ; routesDefault [ "contact" ] = {
      "name": "Contact"
      , "path": root + "contact"
      , "templatePath": root + view + "contact"
      , "types": false
  }
  //--------------------------------------------------------------
  // Signin Route
  //--------------------------------------------------------------
  ; routesDefault [ "signin" ] = {
      "name": "Signin"
      , "path": root + "signin"
      , "templatePath": root + view + "signin"
      , "types": false
      , "subRoute": false
  }
  //--------------------------------------------------------------
  // Signup Route
  //--------------------------------------------------------------
  ; routesDefault [ "signup" ] = {
      "name": "Signup"
      , "path": root + "signup"
      , "templatePath": root + view + "signup"
      , "types": false
      , "subRoute": false
  }
  //---------------------------------------------------------------
  // Mail Route
  //---------------------------------------------------------------
  ; routesDefault[ "mail" ] = {
    "name": "Mail"       
    , "path": root + "mail"      
    , "templatePath": root + view + "mail"
    , "types": false
  }
  //--------------------------------------------------------------
  // 404 Route
  //--------------------------------------------------------------
  ; routesDefault [ "404" ] = {
      "name": "404"
      , "path": root + "404"
      , "templatePath": root + view + "404"
      , "types": false
      , "subRoute": false
  }
  //---------------------------------------------------------------
  // Signout Route
  //---------------------------------------------------------------
  ; routesUserAuthorized[ "signout" ] = {
    "name": "Signout"       
    , "path": absolute + "signout"      
    , "templatePath": root + view + "signout"
    , "types": false
    , "subRoute": subRoutes[ "signout-level-0" ]
  }
  //--------------------------------------------------------------
  // Foundation Routes
  //--------------------------------------------------------------
  ; subRoutes[ "foundation-level-0" ] = {}
  ; subRoutes[ "foundation-level-0" ][ "welcome" ] = {
    "name": "Welcome"
    , "path": root + foundation + "welcome/"
    , "templatePath": root + view + foundation + "welcome"
    , "types": false
  }
  ; subRoutes[ "foundation-level-0" ][ "blog" ] = {
    "name": "Blog"
    , "path": root + foundation + "blog/"
    , "templatePath": root + view + foundation + "blog"
    , "types": false
  }
  ; subRoutes[ "foundation-level-0" ][ "boxy" ] = {
    "name": "Boxy"
    , "path": root + foundation + "boxy/"
    , "templatePath": root + view + foundation + "boxy"
    , "types": false
  }
  ; subRoutes[ "foundation-level-0" ][ "banner" ] = {
    "name": "Banner"
    , "path": root + foundation + "banner/"
    , "templatePath": root + view + foundation + "banner"
    , "types": false
  }
  ; subRoutes[ "foundation-level-0" ][ "contact" ] = {
    "name": "Contact"
    , "path": root + foundation + "contact/"
    , "templatePath": root + view + foundation + "contact"
    , "types": false
  }
  ; subRoutes[ "foundation-level-0" ][ "feed" ] = {
    "name": "Feed"
    , "path": root + foundation + "feed/"
    , "templatePath": root + view + foundation + "feed"
    , "types": false
  }
  ; subRoutes[ "foundation-level-0" ][ "grid" ] = {
    "name": "Grid"
    , "path": root + foundation + "grid/"
    , "templatePath": root + view + foundation + "grid"
    , "types": false
  }
  ; subRoutes[ "foundation-level-0" ][ "marketing" ] = {
    "name": "Marketing"
    , "path": root + foundation + "marketing/"
    , "templatePath": root + view + foundation + "marketing"
    , "types": false
  }
  ; subRoutes[ "foundation-level-0" ][ "orbit" ] = {
    "name": "Orbit"
    , "path": root + foundation + "orbit/"
    , "templatePath": root + view + foundation + "orbit"
    , "types": false
  }
  ; subRoutes[ "foundation-level-0" ][ "workspace" ] = {
    "name": "Workspace"
    , "path": root + foundation + "workspace/"
    , "templatePath": root + view + foundation + "workspace"
    , "types": false
  } 
  ; subRoutes[ "foundation-level-0" ][ "realty" ] = {
    "name": "Realty"
    , "path": root + foundation + "realty/"
    , "templatePath": root + view + foundation + "realty"
    , "types": false
  }
  ; subRoutes[ "foundation-level-0" ][ "sidebar" ] = {
    "name": "Sidebar"
    , "path": root + foundation + "sidebar/"
    , "templatePath": root + view + foundation + "sidebar"
    , "types": false
  }
  ; subRoutes[ "foundation-level-0" ][ "store" ] = {
    "name": "Store"
    , "path": root + foundation + "store/"
    , "templatePath": root + view + foundation + "store"
    , "types": false
  }
  ; routesAdminAuthorized[ "foundation" ] = {
    "name": "Foundation"       
    , "path": root + foundation      
    , "templatePath": root + view + foundation + "index"
    , "types": false
    , "subRoute": subRoutes[ "foundation-level-0" ]
  }
  //---------------------------------------------------------------
  // StyleGuide Route
  //---------------------------------------------------------------
  ; routesAdminAuthorized[ "styleguide" ] = {
    "name": "Styleguide"       
    , "path": root + "styleguide"      
    , "templatePath": root + view + "styleguide"
    , "types": false
    , "subRoute": false
  }
  //---------------------------------------------------------------
  // Concept Route
  //---------------------------------------------------------------
  ; routesAdminAuthorized[ "concept" ] = {
    "name": "nisslmueller.biz"       
    , "path": root + "concept"      
    , "templatePath": root + view + "concept"
    , "types": false
    , "subRoute": false
  }
  //---------------------------------------------------------------
  // Create navigations - opject ( Start )
  //---------------------------------------------------------------

  //--------------------------------------------------------------
  // Home Navigation
  //--------------------------------------------------------------
  ; subNavigations[ "home-level-0" ] = {}
  ; subNavigations[ "home-level-0" ][ "home-logo" ] = {
    "content": "<img src='./assets/images/logo_emblem.png' alt='nisslmueller.biz' class='logo'>"
    , "path": routesDefault[ "home" ].path
    , "classes": "logo"
    , "sort_id": 0
  }
  ; subNavigations[ "home-level-0" ][ "home-font" ] = {
    "content": "<img src='./assets/images/logo_text.png' alt='ForgeTech'>"
    , "path": routesDefault[ "home" ].path
    , "classes": "name"
    , "sort_id": 1
  }
  ; navigationsDefault[ "home" ] = subNavigations[ "home-level-0" ]
  ; navigationsUserAuthorized[ "home" ] = subNavigations[ "home-level-0" ]
  ; navigationsAdminAuthorized[ "home" ] = subNavigations[ "home-level-0" ]

  //--------------------------------------------------------------
  // Main-Navigation
  //--------------------------------------------------------------
  ; subNavigations[ "main-level-0" ] = {}
  ; subNavigations[ "main-level-0" ][ "home" ] = {
    "content": "Start"
    , "path": routesDefault[ "home" ].path
    , "sort_id": 0
  }
  ; subNavigations[ "main-level-0" ][ "services" ] = {
    "content": routesDefault[ "services" ].name
    , "path": routesDefault[ "services" ].path
    , "sort_id": 1
  }  
  ; subNavigations[ "main-level-0" ][ "philosopy" ] = {
    "content": routesDefault[ "philosopy" ].name
    , "path": routesDefault[ "philosopy" ].path
    , "sort_id": 2
  }  
  ; subNavigations[ "main-level-0" ][ "products" ] = {
    "content": routesDefault[ "products" ].name
    , "path": routesDefault[ "products" ].path
    , "sort_id": 3
  }  
  ; subNavigations[ "main-level-0" ][ "whatweuse" ] = {
    "content": routesDefault[ "whatweuse" ].name
    , "path": routesDefault[ "whatweuse" ].path
    , "sort_id": 4
  }
  ; navigationsDefault[ "main" ] = subNavigations[ "main-level-0" ]
  ; subNavigations[ "user-authorized-main-level-0" ] = _.clone( subNavigations[ "main-level-0" ] )
  ; subNavigations[ "user-authorized-main-level-0" ][ "signin" ] = undefined
  ; subNavigations[ "user-authorized-main-level-0" ][ "signout" ] = {
    "content": routesUserAuthorized[ "signout" ].name
    , "path": routesUserAuthorized[ "signout" ].path
    , "sort_id": 6
    , "classes": "button"
  }
  ; navigationsUserAuthorized[ "main" ] = subNavigations[ "user-authorized-main-level-0" ]

  ; subNavigations[ "admin-authorized-main-level-0" ] = {}
  ; subNavigations[ "admin-authorized-main-level-0" ][ "concept" ] = {
    "content": routesAdminAuthorized[ "concept" ].name
    , "path": routesAdminAuthorized[ "concept" ].path
    , "sort_id": 1
    , "subNavigation": subNavigations[ "foundation-level-0" ]
  }

  //--------------------------------------------------------------
  // Foundation-SubNavigation
  //--------------------------------------------------------------
  ; subNavigations[ "foundation-level-0" ] = {}
  ; subNavigations[ "foundation-level-0" ][ "welcome" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "welcome" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "welcome" ].path
    , "subNavigation": false
  }
  ; subNavigations[ "foundation-level-0" ][ "blog" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "blog" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "blog" ].path
    , "subNavigation": false
  }  
  ; subNavigations[ "foundation-level-0" ][ "banner" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "banner" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "banner" ].path
    , "subNavigation": false
  }
  ; subNavigations[ "foundation-level-0" ][ "boxy" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "boxy" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "boxy" ].path
    , "subNavigation": false
  }
  ; subNavigations[ "foundation-level-0" ][ "contact" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "contact" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "contact" ].path
    , "subNavigation": false
  }
  ; subNavigations[ "foundation-level-0" ][ "feed" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "feed" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "feed" ].path
    , "subNavigation": false
  }
  ; subNavigations[ "foundation-level-0" ][ "grid" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "grid" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "grid" ].path
    , "subNavigation": false
  }
  ; subNavigations[ "foundation-level-0" ][ "marketing" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "marketing" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "marketing" ].path
    , "subNavigation": false
  }
  ; subNavigations[ "foundation-level-0" ][ "orbit" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "orbit" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "orbit" ].path
    , "subNavigation": false
  }
  ; subNavigations[ "foundation-level-0" ][ "realty" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "realty" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "realty" ].path
    , "subNavigation": false
  }
  ; subNavigations[ "foundation-level-0" ][ "sidebar" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "sidebar" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "sidebar" ].path
    , "subNavigation": false
  }
  ; subNavigations[ "foundation-level-0" ][ "store" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "store" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "store" ].path
    , "subNavigation": false
  }
  ; subNavigations[ "foundation-level-0" ][ "workspace" ] = {
    "content": routesAdminAuthorized[ "foundation" ].subRoute[ "workspace" ].name
    , "path": routesAdminAuthorized[ "foundation" ].subRoute[ "workspace" ].path
    , "subNavigation": false
  }
  ; subNavigations[ "admin-authorized-main-level-0" ][ "foundation" ] = {
    "content": routesAdminAuthorized[ "foundation" ].name
    , "path": routesAdminAuthorized[ "foundation" ].path
    , "sort_id": 2
    , "subNavigation": subNavigations[ "foundation-level-0" ]
  }
  ; subNavigations[ "admin-authorized-main-level-0" ][ "styleguide" ] = {
    "content": routesAdminAuthorized[ "styleguide" ].name
    , "path": routesAdminAuthorized[ "styleguide" ].path
    , "sort_id": 3
  }
  ; subNavigations[ "admin-authorized-main-level-0" ][ "spacer1" ] = {
    "content": '<div class="spacer" />'
    , "sort_id": 4
  }  
  ; subNavigations[ "admin-authorized-main-level-0" ][ "signout" ] = _.clone( subNavigations[ "user-authorized-main-level-0" ][ "signout" ]  )
  ; navigationsAdminAuthorized[ "main" ] = subNavigations[ "admin-authorized-main-level-0" ]


  //--------------------------------------------------------------
  // Footer-Navigation
  //--------------------------------------------------------------
  ; subNavigations[ "footer-level-0" ] = {}
  ; subNavigations[ "footer-level-0" ][ "home" ] = {
    "content": "nisslmueller.biz"
    , "path": routesDefault[ "home" ].path
    , "sort_id": 0
    , "classes": "forge-tech"
  } 
  ; subNavigations[ "footer-level-0" ][ "contact" ] = {
    "content": routesDefault[ "contact" ].name
    , "path": routesDefault[ "contact" ].path
    , "sort_id": 1
  }  
  ; subNavigations[ "footer-level-0" ][ "impressum" ] = {
    "content": routesDefault[ "impressum" ].name
    , "path": routesDefault[ "impressum" ].path
    , "sort_id": 1
  }
  ; navigationsDefault[ "footer" ] = subNavigations[ "footer-level-0" ] 
  ; navigationsUserAuthorized[ "footer" ] = subNavigations[ "footer-level-0" ] 
  ; navigationsAdminAuthorized[ "footer" ] = subNavigations[ "footer-level-0" ] 
  //--------------------------------------------------------------
  // Social-Navigation
  //--------------------------------------------------------------
  ; subNavigations[ "social-level-0" ] = {}
  ; subNavigations[ "social-level-0" ][ "twitter" ] = {
    "content": "<i class='social foundicon-twitter'><p>Twitter</p></i>"
    , "path": "http://www.twitter.com/"
    , "sort_id": 0
    , "target": "_blank"
    , "classes": "twitter"
  }
  ; subNavigations[ "social-level-0" ][ "facebook" ] = {
    "content": "<i class='social foundicon-facebook'><p>Facebook</p></i><span class='bg'></span>"
    , "path": "http://www.facebook.com"
    , "sort_id": 1
    , "target": "_blank"
    , "classes": "facebook"
  }  
  ; subNavigations[ "social-level-0" ][ "mail" ] = {
    "content": "<i class='general foundicon-mail'><p>eMail</p></i></a>"
    , "path": routesDefault[ "mail" ].path
    , "sort_id": 2
    , "classes": "mail"
  }
  ; navigationsDefault[ "social" ] = subNavigations[ "social-level-0" ]
  ; navigationsUserAuthorized[ "social" ] = subNavigations[ "social-level-0" ]
  ; navigationsAdminAuthorized[ "social" ] = subNavigations[ "social-level-0" ]
  //---------------------------------------------------------------
  // Create navigations - opject ( End )
  //---------------------------------------------------------------

  //---------------------------------------------------------------
  // Server - opject ( Start )
  //---------------------------------------------------------------
  ; servers[ "development" ] = {
    "url": "localhost"
    , "port": "3000"
  }
  ; servers[ "test" ] = {
    "url": "localhost"
    , "port": "6000"
  }
  ; servers[ "production-0" ] = {
    "url": "localhost"
    , "port": "1200"
  }
  ; servers[ "production-1" ] = {
    "url": "localhost"
    , "port": "1400"
  }
  // Use this variable to set 
  ; servers[ "production" ] = servers[ "production-0" ]
  //---------------------------------------------------------------
  // Server - opject ( End )
  //---------------------------------------------------------------

  //---------------------------------------------------------------
  // Enviroments - opject ( Start )
  //---------------------------------------------------------------
  ; environments [ "development" ] = {
    "content": "development"
    , "db": "mongodb://localhost/forge-home-development"
    , "root": root
    // , "notifier": notifier
    , "server": servers[ "development" ]
    , "facebook": {
      "clientId": "328996997235690"
      , "clientSecret": "48f4c01a3d7c83ea653e9d342295a965"
      , "callbackURL": "http://localhost:3000/auth/facebook/callback"
    }
    , "twitter": {
      "clientId": "CONSUMER_KEY"
      , "clientSecret": "CONSUMER_SECRET"
      , "callbackURL": "http://localhost:3000/auth/twitter/callback"
    }
    , "github": {
      "clientId": "APP_ID"
      , "clientSecret": "APP_SECRET"
      , "callbackURL": "http://localhost:3000/auth/github/callback"
    }
    , "google": {
      "analytics": {
        "id": "DevelopmentAnalyticsId"
      }
      ,"clientId": "APP_ID"
      , "clientSecret": "APP_SECRET"
      , "callbackURL": "http://localhost:3000/auth/google/callback"
    }
  }  

  ; environments [ "test" ] = {
    "name": "test"
    , "db": "mongodb://localhost/forge-concept-test"
    , "root": root
    // , "notifier": notifier
    , "server": servers[ "test" ]
    , "facebook": {
      "clientId": "328996997235690",
      "clientSecret": "48f4c01a3d7c83ea653e9d342295a965",
      "callbackURL": "http://localhost:3000/auth/facebook/callback"
    }
    , "twitter": {
      "clientId": "CONSUMER_KEY",
      "clientSecret": "CONSUMER_SECRET",
      "callbackURL": "http://localhost:3000/auth/twitter/callback"
    }
    , "github": {
      "clientId": "APP_ID",
      "clientSecret": "APP_SECRET",
      "callbackURL": "http://localhost:3000/auth/github/callback"
    }
    , "google": {
      "clientId": "APP_ID",
      "clientSecret": "APP_SECRET",
      "callbackURL": "http://localhost:3000/auth/google/callback"
    }
  }

  ; environments [ "production" ] = {
    "name": "production"
    , "db": "mongodb://localhost/forge-concept-test"
    , "root": root
    // , "notifier": notifier
    , "server": servers[ "production" ]
    , "facebook": {
      "clientId": "328996997235690",
      "clientSecret": "48f4c01a3d7c83ea653e9d342295a965",
      "callbackURL": "http://localhost:3000/auth/facebook/callback"
    }
    , "twitter": {
      "clientId": "CONSUMER_KEY",
      "clientSecret": "CONSUMER_SECRET",
      "callbackURL": "http://localhost:3000/auth/twitter/callback"
    }
    , "github": {
      "clientId": "APP_ID",
      "clientSecret": "APP_SECRET",
      "callbackURL": "http://localhost:3000/auth/github/callback"
    }
    , "google": {
      "clientId": "APP_ID",
      "clientSecret": "APP_SECRET",
      "callbackURL": "http://localhost:3000/auth/google/callback"
    }
  }  
 
  //---------------------------------------------------------------
  // Enviroments - opject ( End )
  //---------------------------------------------------------------

module.exports = { 
  "common": {
    "name": "Claus R. Nisslmüller"
    , "url": "www.nisslmueller.biz"
    , "owner": "Claus R. Nisslmüller"
    , "admin": "claus.nisslmueller@gmx.at"
    , "version": "0.0.0"
    , "viewEngine": "jade"
    , "language": "en"
    , "description": "Claus R. Nisslmüller - Webdesign & Interactive Development"
    , "keywords": "Nisslmüller, Claus, Rainer, Phobix, Webdesign, Web, Design, Sound, Interactive"
    , "type": "website"    
  }
  , "path": paths 
  , "route": {
      "default": routesDefault
      , "userAuthorized": routesUserAuthorized
      , "adminAuthorized": routesAdminAuthorized
  }
  , "navigation": {
      "default": navigationsDefault
      , "userAuthorized": navigationsUserAuthorized
      , "adminAuthorized": navigationsAdminAuthorized
  }
  , "server": servers
  , "environment": environments
}