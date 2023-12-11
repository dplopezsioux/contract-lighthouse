require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

const app = express();

// app.use(helmet());

app.use(cors({ origin: "*" }));

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
const userRoutes = require("./src/api/router/userRouter");
app.use("/api/users", userRoutes);

// Webpack
if (isDevelopment) {
  const webpack = require("webpack");
  const config = require("./webpack.config.js");
  const compiler = webpack(config);
  app.use(
    require("webpack-dev-middleware")(compiler, {
      publicPath: config.output.publicPath,
    })
  );
  app.use(
    require(`@gatsbyjs/webpack-hot-middleware`)(compiler, {
      log: false,
      path: `/__webpack_hmr`,
      heartbeat: 10 * 1000,
    })
  );
  // Middleware para manejar todas las rutas no API
  app.get("*", (req, res, next) => {
    const filename = path.join(compiler.outputPath, "index.html");
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set("content-type", "text/html");
      res.send(result);
      res.end();
    });
  });
} else {
  app.use("/", express.static(path.join(__dirname, "public")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
