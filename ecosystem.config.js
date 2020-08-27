module.exports = {
  apps : [{
    name          : "server",
    script        : "./app/server.js",
    watch         : true,
    ignore_watch  : [
      './uploads'
    ]
  }]
}
