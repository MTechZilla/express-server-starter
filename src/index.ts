import cors from "cors";
import "dotenv-safe/config";
import express from "express";
import generalRoutes from "./routes/generalRoutes";

const main = async () => {
  const app = express();

  app.use(express.json());

  app.set("trust proxy", 1);

  app.use(
    cors({
      origin: [process.env.CLIENT_URL],
      methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
      credentials: true,
    })
  );

  app.use("/v1", generalRoutes);

  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () =>
    console.log(
  `⚡️[server]: Server is running at http://localhost:${PORT}`
    )
  );
};

main().catch((err) => {
  console.log("Error Occurred:", err);
  process.exit(1);
});
