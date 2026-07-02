const app = require("./app");
const connectDB = require("./config/db");
const { port } = require("./config");

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

startServer();
