import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';

@NgModule({
	// Internal list of dependencies
	declarations: [
		AppComponent,
  PageNotFoundComponent,
  CoursesListComponent // Default
	],
	// External infrastructures
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	// Service providers : None
	providers: [],
	// List of apps : Only AppComponent (default view)
	bootstrap: [AppComponent],
})

// Export application
export class AppModule {}
