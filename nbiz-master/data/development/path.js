// Main folders
; var root = "./"
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

; module.exports = [
  { 
    "name": "root"
    , "mapping": root
    , "type": "project"
    , "project": "forge-home-development"
  }
  , { 
    "name": "temp"
    , "mapping": root + temp
    , "type": "project"
    , "project": "forge-home-development"
  }
  , { 
    "name": "client"
    , "mapping": root + client
    , "type": "project"
    , "project": "forge-home-development"
  }
  , {
    "name": "build"
    , "mapping": root + build
    , "type": "client"
    , "project": "forge-home-development"
  }
  , { 
    "name": "bower"
    , "mapping": root + bower
    , "type": "project"
    , "project": "forge-home-development"
  }
  , { 
    "name": "config"
    , "mapping": root + config
    , "type": "project"
    , "project": "forge-home-development"
  }
  , { 
    "name": "data"
    , "mapping": root + data
    , "type": "project"
    , "project": "forge-home-development"
  }
  , { 
    "name": "node"
    , "mapping": root + node
    , "type": "project"
    , "project": "forge-home-development"
  }
  , {
    "name": "server"
    , "mapping": root + server
    , "type": "project"
    , "project": "forge-home-development"
  }
  , {
    "name": "test"
    , "mapping": root + test
    , "type": "project"
    , "project": "forge-home-development"
  }
  , {
    "name": "root"
    , "mapping": root + server
    , "type": "server"
    , "project": "forge-home-development"
  }
  , {
    "name": "config"
    , "mapping": root + server + config
    , "type": "server"
    , "project": "forge-home-development"
  }
  , {
    "name": "model"
    , "mapping": root + server + model
    , "type": "server"
    , "project": "forge-home-development"
  }
  , {
    "name": "view"
    , "mapping": root + server + view
    , "type": "server"
    , "project": "forge-home-development"
  }
  , {
    "name": "controller"
    , "mapping": root + server + controller
    , "type": "server"
    , "project": "forge-home-development"
  }
  , {
    "name": "root"
    , "mapping": root + client
    , "type": "client"
    , "project": "forge-home-development"
  }
  , {
    "name": "config"
    , "mapping": root + client + config
    , "type": "client"
    , "project": "forge-home-development"
  }
  , {
    "name": "view"
    , "mapping": root + client + view
    , "type": "client"
    , "project": "forge-home-development"
  }
  , {
    "name": "style"
    , "mapping": root + client + style
    , "type": "client"
    , "project": "forge-home-development"
  }
  , {
    "name": "script"
    , "mapping": root + client + script
    , "type": "client"
    , "project": "forge-home-development"
  }
  , {
    "name": "controller"
    , "mapping": root + client + controller
    , "type": "client"
    , "project": "forge-home-development"
  }
  , {
    "name": "view"
    , "mapping": root + client + view
    , "type": "client"
    , "project": "forge-home-development"
  }
  , {
    "name": "service"
    , "mapping": root + client + service
    , "type": "client"
    , "project": "forge-home-development"
  }
  , {
    "name": "fonts"
    , "mapping": root + client + font
    , "type": "client"
    , "project": "forge-home-development"
  }
  , {
    "name": "asset"
    , "mapping": root + client + asset
    , "type": "client"
    , "project": "forge-home-development"
  }
  , {
    "name": "image"
    , "mapping": root + client + asset + image
    , "type": "client"
    , "project": "forge-home-development"
  }
  , {
    "name": "audio"
    , "mapping": root + client + asset + audio
    , "type": "client"
    , "project": "forge-home-development"
  }
  , {
    "name": "video"
    , "mapping": root + client + asset + video
    , "type": "client"
    , "project": "forge-home-development"
  }
]