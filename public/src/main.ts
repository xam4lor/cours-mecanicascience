import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Turn on production mode on build
if (environment.production) {
	enableProdMode();
}

// Start AppModule as main application
platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((err) => console.error(err));
