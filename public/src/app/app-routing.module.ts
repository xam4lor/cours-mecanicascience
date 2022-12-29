import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { StatisticalPhysicsComponent } from './articles/articles/statistical-physics/statistical-physics.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

// Import articles
import { HomeComponent } from './home/home.component';

// Configure routes
const routes: Routes = [
	// MAIN ROUTES
	{ path: '', component: HomeComponent },

	// ARTICLES
	{ path: 'articles', component: ArticlesListComponent },
	{ path: 'articles/statistical_physics', component: StatisticalPhysicsComponent },

	// DEFAULT
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
	},
	{ path: '**', component: PageNotFoundComponent }, // Error 404
];

// Send routes to router
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
