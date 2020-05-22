import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: [ './base.component.scss' ]
})
export class BaseComponent implements OnInit {
	@Input('data') data;
	constructor() {}

	ngOnInit(): void {}
}
