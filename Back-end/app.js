import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { transporter } from "./config/mailer.js";

const enviarEmail = async (data) => {
  const info = await transporter.sendMail({
    from: data.email,
    to: "camilolopez1506@gmail.com",
    subject: data.asunto,
    html: `
      <b>Mi nombre es: ${data.nombre}</b>
      <p>Mi mensaje es el siguiente</p><br>
      <p>${data.msg}</p>
    `,
  });
};

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/contacto", (req, res) => {
  console.log(req.body);
  enviarEmail(req.body)
  res.sendStatus(200);
});

app.listen(8000, () => {
  console.log("Servidor activo");
});
