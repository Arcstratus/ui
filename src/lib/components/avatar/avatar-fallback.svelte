<script module lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	export interface AvatarFallbackProps extends HTMLAttributes<HTMLDivElement> {
		class?: string;
		children: Snippet;
	}
</script>

<script lang="ts">
	import { getAvatarContext } from './context';
	import { cn } from '$lib/utils';

	const { children, ...props }: AvatarFallbackProps = $props();

	const ctx = getAvatarContext();
</script>

<span {...ctx.api.getFallbackProps()} class={cn('', props.class)}>
	{@render children()}
</span>
