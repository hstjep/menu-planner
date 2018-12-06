import * as http from "http";
import app from "./server";

const server = http.createServer(app);
server.listen(4000);
