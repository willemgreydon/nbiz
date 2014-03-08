; module.exports = {
  "development": {
    // Used to identify and load the project
    "project": "forge-home-development"
    , "configModelNames": [ 'Common', 'Path', 'Route', 'Navigation' ]
    , "serverConfig": {
      "serverPort" : 3000
      , "socketPort" : 80
    }
    , "dbConfig": {
      // Relative to project dir
      "modelPath": "./server/models/"
      // Relative to project dir
      , "controllerPath": "./server/controllers/"
      // Relative to project dir
      , "dataPath": "./data/development/"
      // urls can contain muliple urls to connect to multiple db instances
      , "urls":  "mongodb://localhost/forge-home-development"
      // Contains mongoose connection options
      ,"options": {
        "db": undefined // { native_parser: true }
        , "server": undefined // { poolSize: 5 }
        , "replset": undefined // { rs_name: "myReplicaSetName" }
        , "user": undefined
        , "pass": undefined
      }
    }
    // Contains configuration values for notifier module
    , "notifierConfig": {
        "APN": false
        , "email": false
        , "actions": [ "comment" ]
        , "tplPath": "PATH"
        , "postmarkKey": "POSTMARK_KEY"
        , "parseAppId": "PARSE_APP_ID"
        , "parseApiKey": "PARSE_MASTER_KEY"
    }
    // Contains configuration values related to facebook
    , "facebookConfig": {
      "clientId": "328996997235690"
      , "clientSecret": "48f4c01a3d7c83ea653e9d342295a965"
      , "callbackURL": "/auth/facebook/callback"
    }
    // Contains configuration values related to twitter
    , "twitterConfig": {
      "clientId": "CONSUMER_KEY"
      , "clientSecret": "CONSUMER_SECRET"
      , "callbackURL": "/auth/twitter/callback"
    }
    // Contains configuration values related to github
    , "githubConfig": {
      "clientId": "APP_ID"
      , "clientSecret": "APP_SECRET"
      , "callbackURL": "/auth/github/callback"
    }
    // Contains configuration values related to google
    , "googleConfig": {
      "analytics": {
        "id": "DevelopmentAnalyticsId"
      }
      , "clientId": "APP_ID"
      , "clientSecret": "APP_SECRET"
      , "callbackURL": "/auth/google/callback"
    }
  }
}  
 