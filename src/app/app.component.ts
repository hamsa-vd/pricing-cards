import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	matter = [
		{
			heading: 'free',
			amount: '$0',
			list: [
				'single user',
				'5GB storage',
				'unlimited public projects',
				'community access',
				'unlimited private projects',
				'dedicated phone support',
				'free subdomain',
				'monthly status reports'
			],
			mute: 3,
			highlight: []
		},
		{
			heading: 'plus',
			amount: '$9',
			list: [
				'5 users',
				'50GB storage',
				'unlimited public projects',
				'community access',
				'unlimited private projects',
				'dedicated phone support',
				'free subdomain',
				'monthly status reports'
			],
			mute: 6,
			highlight: [ 0 ]
		},
		{
			heading: 'pro',
			amount: '$49',
			list: [
				'unlimited users',
				'150GB storage',
				'unlimited public projects',
				'community access',
				'unlimited private projects',
				'dedicated phone support',
				'unlimited free subdomains',
				'monthly status reports'
			],
			mute: 7,
			highlight: [ 0, 6 ]
		}
	];
}
