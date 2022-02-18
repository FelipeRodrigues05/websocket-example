import { serverHttp } from "./http";
import "./websocket"

serverHttp.listen(3000, () => console.log("Server is Running on PORT 3000"));