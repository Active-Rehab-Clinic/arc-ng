import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Initialize Flowbite
import { initFlowbite } from 'flowbite';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    // Initialize Flowbite components after Angular bootstrap
    initFlowbite();
  })
  .catch((err) => console.error(err));
