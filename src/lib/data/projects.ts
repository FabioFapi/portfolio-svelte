import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'womblab-landing-page',
		color: '#5e95e3',
		description:
			'🚀 Womblab Landing Page è un sito web progettato per fornire una vetrina moderna e intuitiva per promuovere eventi, corsi di formazione e servizi professionali. Il sito è stato sviluppato con un design pulito e responsive per garantire un\'esperienza utente ottimale su qualsiasi dispositivo.',
		shortDescription:
			'Womblab Landing Page è un sito web progettato per fornire una vetrina moderna e intuitiva per promuovere eventi',
		links: [{ to: 'https://github.com/FabioFapi/womblab-landing-page', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Womblab LandingPage',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte','js', 'html', 'css'),
		type: 'Website'
	},
	{
		slug: 'womblab-repository',
		color: '#ff3e00',
		description:
			'Womblab Backend API è il cuore del sistema Womblab, gestendo le richieste in entrata e in uscita tra i vari servizi. Riceve dati dai form di womblab-form-page e invia informazioni alla womblab-landing-page attraverso API REST.',
		shortDescription:
			'Womblab Backend API è il cuore del sistema Womblab',
		links: [{ to: 'https://github.com/FabioFapi/womblab-repository', label: 'GitHub' }],
		logo: Assets.MongoDB,
		name: 'Repository by Womblab',
		period: {
			from: new Date()
		},
		skills: getSkills('node.js', 'svelte', 'mongodb', 'js'),
		type: 'Website Backend',
	}
];

export const title = 'Projects';
