import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Main components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

// Home
import { HomeComponent } from './home/home.component';

// Articles Components
import { EquationComponent } from './articles/articles-components/equation/equation.component';
import { EquationInlineComponent } from './articles/articles-components/equation/equationInline.component';

// Articles
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { StatisticalPhysicsComponent } from './articles/articles/statistical-physics/statistical-physics.component';

@NgModule({
	// Internal list of dependencies
	declarations: [
		// Main components
		AppComponent,
		PageNotFoundComponent,

		// Home
		HomeComponent,

		// Articles Components
		EquationComponent,
		EquationInlineComponent,

		// Articles
		ArticlesListComponent,
		ArticlesComponent,
		StatisticalPhysicsComponent,
	],
	// External infrastructures
	imports: [BrowserModule, AppRoutingModule],
	// Service providers : None
	providers: [],
	// List of apps : Only AppComponent (default view)
	bootstrap: [AppComponent],
})

// Export application
export class AppModule {}
