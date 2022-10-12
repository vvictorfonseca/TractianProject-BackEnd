import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({ path: ".env " });
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server is listening on port ".concat(PORT, "."));
});
