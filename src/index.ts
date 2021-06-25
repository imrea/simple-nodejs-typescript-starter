import { PORT } from './config';
import { app } from './server';

async function main() {
  app.listen(PORT, () => {
    console.log(`Server is listening on 0.0.0.0:${PORT}`);
  });
}

main();
