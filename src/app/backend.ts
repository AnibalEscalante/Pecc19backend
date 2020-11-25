import mongooseModule from './modulos/mongoose.module';
import express, { Express, Request, Response } from "express";
import components from "./components";
import morgan from 'morgan';
import cors from 'cors';

async function main() {
 
  const server: Express = express();
  const port: number = 30204;
  
  server.use(express.json());
  server.use(express.urlencoded());
  server.use(cors());
  server.use(morgan("dev"));
  
  
  
  server.use('/api', ...components);

  try {
    await mongooseModule.connect();
    console.log("Connexion exitosa");

    server.listen(port, () => {
      console.log("servidor escuchando en: http://localhost:" + port)
    });

  } catch (error) {
    console.log("conexion fallida");
  }


}
export default { main };