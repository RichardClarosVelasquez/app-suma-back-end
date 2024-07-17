import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors(); // Habilitar CORS
//   await app.listen(3000);
// }
// bootstrap();