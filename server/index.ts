import * as http from "http";
import app from "./server";

const server = http.createServer(app);
let currentApp = app;
server.listen(4000);
