import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Express server failed to start: ", error);
    });

    app.listen(port, () => {
      console.log(`⚙️  Server is running smoothly at: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed: ", err);
    process.exit(1);
  });