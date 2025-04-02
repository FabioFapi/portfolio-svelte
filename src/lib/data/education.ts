import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'ITS-ICT piemonte',
		description: '',
		location: 'Turin, Italy',
		logo: Assets.Unknown,
		name: '',
		organization: 'ITS-ICT',
		period: { from: new Date(2022, 11, 1), to: new Date(2025, 7, 4) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['React-Native', 'Flutter', 'Swift', 'Dart', 'C#', 'Kotlin', 'Html,css and Javascript', 'English']
	},
	{
		degree: 'Womblab SRL',
		description: '',
		location: 'Turin, Italy',
		logo: Assets.Unknown,
		name: '',
		organization: 'ITS-ICT',
		period: { from: new Date(2025, 2, 6) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Sveltekit', 'MongoDB', 'Next.js', 'PostgreSQL']
	}
];

export const title = 'Education';
