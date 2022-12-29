import { Directive, ElementRef, OnInit } from '@angular/core';

// Declare MathJax as a global variable
declare var MathJax: any;

@Directive({
	selector: '[eqi]'
})
export class EquationInlineComponent implements OnInit {
	element: ElementRef;

	constructor(elRef: ElementRef) {
		this.element = elRef;
	}

	ngOnInit(): void {
		// Update content (replace '(((' by '{' and '))' by '}')
		let c = this.element.nativeElement.innerHTML.replace(/\(\(/g, '{').replace(/\)\)/g, '}');
		this.element.nativeElement.innerHTML = '\\(' + c + '\\)';

		// Tell MathJax to reprocess the math notation when the route changes.
		MathJax.typeset();
	}
}
