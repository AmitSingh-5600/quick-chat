import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT_NUMBER || 3000;

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
