import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Fabio';

export const lastName = 'Recchia';

export const description =
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/FabioFapi' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/fabio-recchia-435633339/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/30144208/rixchiolina'
	},
	{
		platform: Platform.Email,
		link: 'recchiappmobile@gmail.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'flutter', 'kotlin', 'svelte', 'dart');
