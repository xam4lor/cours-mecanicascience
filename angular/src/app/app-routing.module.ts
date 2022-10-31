import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

// Configure routes
const routes: Routes = [
	// ROUTES
	{ path: 'test', component: CoursesListComponent },

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
