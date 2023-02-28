import app from "./config/express.js"

const port = 3000;

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({})
});

app.listen(
  port,
  () => console.log("Servidor funcionando!")
)