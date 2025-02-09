import {PORT} from "./app/config/config.js";
import app from "./app.js";

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});