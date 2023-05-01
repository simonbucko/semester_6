import express from "express";
import multer from "multer";
import cors from "cors";

const PORT = process.env.PORT || 8000;
const app = express();
// const upload = multer({ dest: "./uploads" });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const filenameParts = file.originalname.split(".");
    if (filenameParts.length <= 1) {
      cb(new Error("File has no extensions: " + file.originalname));
    }

    const extension = filenameParts.pop();
    const originalFilename = filenameParts.join(".");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    const newFileName =
      uniqueSuffix + "__" + originalFilename + "." + extension;

    cb(null, newFileName);
  },
});
const upload = multer({ storage });

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/form", (req, res) => {
  res.send({ data: req.body });
});

app.post("/fileform", upload.single("file"), (req, res) => {
  res.send({ data: req.body });
});

app.listen(PORT, () => console.log("Server is now running in port", PORT));
