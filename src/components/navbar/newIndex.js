const cors = require("cors");

app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );