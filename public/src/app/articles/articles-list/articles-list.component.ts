import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-articles-list',
	templateUrl: './articles-list.component.html',
	styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
	/** List of articles */
	articles: { id: number; title: string; path: string }[];

	constructor() {
		// Initialize the list of articles
		this.articles = [
			{
				id: 0,
				title: 'Introduction to Statistical Physics',
				path: 'statistical_physics',
			},
		];
	}

	ngOnInit(): void {}
}
