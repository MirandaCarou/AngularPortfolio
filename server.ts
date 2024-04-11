

import * as cors from 'cors';
import { Request, Response } from 'express';
import * as express from 'express';
import {Application} from "express";
import { Resend } from 'resend';

const bodyParser = require('body-parser');

const app: Application = express();



app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
  res.send('hello world');
});

const resend = new Resend('re_b9GVjanC_Gs9pFmTyr7CouvrQfUt8smDr');

// Endpoint para enviar correo electrónico
app.post('/send-email', async (req: Request, res: Response) => {


  try {
    const { data, error } = await resend.emails.send({
      from: req.body.email,
      to: req.body.to,
      subject: req.body.subject,
      html: req.body.message
    });

    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado:', data);
      res.status(200).send('Correo electrónico enviado correctamente');
    }
  } catch (err) {
    console.error('Error al enviar el correo electrónico:', err);
    res.status(500).send('Error al enviar el correo electrónico');
  }
});



const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:");
    console.log(httpServer);
});



