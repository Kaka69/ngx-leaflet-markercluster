import { Component } from '@angular/core';

@Component({
	selector: 'example-component',
	template: '{{message}}'
})
export class ExampleComponent {
	private message = 'Hello';

	constructor() { }

	ngOnInit() {
		this.message = 'World';
	}
}