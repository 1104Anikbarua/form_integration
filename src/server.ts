import app from './app';
import { Server } from 'http';
import config from './app/config';
// const port = 5000;

let server: Server;

const main = async () => {
  try {
    server = app.listen(config.port, () => {
      console.log(`app is running in port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
