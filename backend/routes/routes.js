import { homeRoute } from "./homeRoute.js"
import { usersRoute } from "./usersRoute.js"
import { verifyJWT } from "../middleware/verifyJWT.js"
import { handleRefreshToken } from "../middleware/handleRefreshToken.js"
import { urlsRoute } from "./urlsRoute.js"
import { shortUrlRoute } from "./shortUrlRoute.js"

import { testRoute } from './testRoute.js'


export const routes = (app) => {
    app.use(shortUrlRoute)
    app.use('/', homeRoute)
    app.use('/api', usersRoute)
    app.use("/api/refresh", handleRefreshToken)
    app.use('/api/*', verifyJWT)
    app.use('/api', urlsRoute)
    app.use('/api', testRoute)
    app.use('/favicon', (req, res) => {
        console.log('favicon')
        res.sendStatus(200)
    })
};

