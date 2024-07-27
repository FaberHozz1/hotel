import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './ui/modules/app/components/app/app.component';
import { appConfig } from './ui/modules/app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
