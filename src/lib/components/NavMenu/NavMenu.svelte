<script lang="ts">
	import { page } from '$app/stores';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { items } from '@data/navbar';
	import * as HOME from '@data/home';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	import { fade, slide } from 'svelte/transition';

	$: currentRoute = $page.url.pathname;

	let expanded = false;

	const toggleExpanded = (v?: boolean) => {
		expanded = typeof v === 'undefined' ? !expanded : v;
	};
</script>

<div class="nav-menu">
	<nav class="container flex flex-row items-center text-sm">
		<a
			href={`${base}/`}
			class="nav-menu-left decoration-none w-auto md:w-150px lg:w-auto row flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"
		>
			<UIcon icon="i-carbon-code" classes="text-2em" />
			<span
				class="ml-2 text-md font-bold hidden md:inline overflow-hidden whitespace-nowrap text-ellipsis"
			>
				{HOME.name}
				{HOME.lastName}
			</span>
		</a>

		<div class="flex-1 block overflow-hidden md:hidden whitespace-nowrap text-ellipsis text-center">
			{HOME.name}
			{HOME.lastName}
		</div>

		<div class="flex-row flex-1 self-center h-full justify-center hidden md:flex">
			{#each items as item (item.title)}
				<a href={`${base}${item.to}`} class="nav-menu-item !text-[var(--secondary-text)]">
					<UIcon icon={item.icon} classes="text-1.3em" />
					<span class="nav-menu-item-label">{item.title}</span>
				</a>
			{/each}
		</div>

		<div
			class="row h-full justify-center items-stretch m-l-auto md:m-l-0 w-auto md:w-150px gap-1 text-1.15em"
		>
			<div class="row hidden md:flex">
				<a
					href={`${base}/search`}
					class="text-inherit col-center self-stretch px-2 hover:bg-[color:var(--main-hover)]"
				>
					<UIcon icon="i-carbon-search" />
				</a>
				<button
					class="bg-transparent text-1em border-none cursor-pointer hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)] px-2"
					on:click={() => toggleTheme()}
				>
					{#if $theme}
						<UIcon icon="i-carbon-moon" />
					{:else}
						<UIcon icon="i-carbon-sun" />
					{/if}
				</button>
			</div>

			<div class="col-center md:hidden h-full hover:bg-[color:var(--main-hover)] cursor-pointer">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class={`nav-bar-mobile-btn col-center ${expanded ? 'nav-bar-mobile-btn-expanded' : ''}`}
					on:keydown
					on:keyup
					on:click={() => toggleExpanded()}
				/>
			</div>
		</div>
	</nav>

	{#if expanded}
		<!-- Mobile Menu with Animation -->
		<div
			class="nav-menu-mobile md:hidden"
			in:slide={{ duration: 300 }}
			out:slide={{ duration: 250 }}
		>
			<div class="flex-col flex-1 self-center h-full justify-center m-t-7">
				{#each items as item (item.title)}
					<a
						href={`${base}${item.to}`}
						class="nav-menu-item !text-[var(--secondary-text)] gap-5"
						on:click={() => toggleExpanded(false)}
						in:fade={{ duration: 250 }}
					>
						<UIcon icon={item.icon} classes="text-1.3em" />
						<span>{item.title}</span>
					</a>
				{/each}
			</div>
			<div class="col gap-2 m-t-7">
				<a
					href={`${base}/search`}
					class="text-inherit decoration-none px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)]"
					on:click={() => toggleExpanded(false)}
					in:fade={{ duration: 250 }}
				>
					<UIcon icon="i-carbon-search" />
					<span>Search</span>
				</a>
				<button
					class="bg-transparent text-1em border-none cursor-pointer px-6 py-3 gap-2 row hover:bg-[color:var(--main-hover)] text-[var(--secondary-text)]"
					on:click={() => toggleTheme()}
					in:fade={{ duration: 250 }}
				>
					{#if $theme}
						<UIcon icon="i-carbon-moon" />
						<span>Dark Theme</span>
					{:else}
						<UIcon icon="i-carbon-sun" />
						<span>Light Theme</span>
					{/if}
				</button>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.nav-menu {
		display: flex;
		justify-content: center;
		position: sticky;
		top: 0px;
		z-index: 10;
		padding: 0px 10px;
		height: 50px;
		border-bottom: 1px solid var(--secondary);
		background-color: var(--main);

		&-item {
			text-decoration: none;
			font-weight: 400;
			padding: 10px 20px;
			color: inherit;
			display: flex;
			align-items: center;
			border-bottom: 3px solid transparent;

			&-label {
				margin-left: 10px;

				@media (max-width: 950px) {
					& {
						display: none;
					}
				}
			}

			&:hover {
				background-color: var(--main-hover);
			}
		}
	}

	.nav-menu-mobile {
		z-index: 9;
		max-height: calc(100vh - 50px - 1px);
		min-height: calc(100vh - 50px - 1px);
		width: 100%;
		position: absolute;
		background-color: var(--main);
		top: 51px;
		display: flex;
		flex-direction: column;
		padding: 1rem 0;
	}
</style>
