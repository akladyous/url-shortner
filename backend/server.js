import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import path from "path";
import { dbConnect } from "./config/dbConnect.js";
import { root, delay, users } from "./routes/routes.js";
import { sessionOptions } from "./config/sessionOptions.js";
import {
    errorHandler,
    credentials,
    logger,
    missingRoutes,
    handleCors
} from "./middleware/middleware.js";
import { PORT, COOKIE_SECRET } from './config/env.js'

dbConnect();
const app = express();
app.use(logger);
app.use(credentials);
app.use(cookieParser(COOKIE_SECRET));
app.use(session(sessionOptions));
app.use(handleCors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));


app.use("/", root);
app.use("/delay", delay);
app.use("/api", users);

import { home } from "./routes/home.js"
app.post("/home", home);
// -------------------------------------------------
import {test} from './routes/test.js'
import { handleRefreshToken } from './middleware/handleRefreshToken.js'
import { verifyJWT } from './middleware/verifyJWT.js'

app.get("/api/refresh", handleRefreshToken);
app.use(verifyJWT);
app.get("/api/test", test);
// -------------------------------------------------

app.use(missingRoutes);
app.use(errorHandler);

mongoose.connection.once("open", () => {
    console.log("\x1b[33m%s\x1b[0m", "mongoDB successfully connected");
    app.listen(PORT, () => {
        console.log(
            "\x1b[34m%s\x1b[0m",
            `ExpressJS is listening on port ${PORT}`
        );
    });
});
