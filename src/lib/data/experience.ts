import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'students',
		company: 'ITS-ICT Piemonte',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.SelfEmployed,
		type: 'Mobile App Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('kotlin', 'firebase', 'react-native', 'flutter', 'dart', 'swift', 'css', 'html', 'js'),
		name: 'Student Developer',
		color: 'yellow',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
	{
		slug: 'student in stage',
		company: 'Womblab Srl , ITS-ICT Piemonte',
		description: 'Creating awesome Website for Company',
		contract: ContractType.Freelance,
		type: 'Web Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('svelte', 'next', 'mongoDB', 'PostGreSQL', 'css', 'html', 'js'),
		name: 'Stage',
		color: 'white',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome Website for Company'
	},
];

export const title = 'Experience';
