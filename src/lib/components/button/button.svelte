<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
		children: Snippet;
		class?: string;
		onclick: () => void;
	}
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	const { children, onclick, ...props }: ButtonProps = $props();
</script>

<button
	type="button"
	class={cn(
		'cursor-pointer rounded border border-foreground px-2 py-1 active:scale-95',
		'center middle flex gap-4',
		props.class
	)}
	{onclick}
>
	{@render children()}
</button>
