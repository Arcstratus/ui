<script module lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	export interface AccordionItemContentProps extends HTMLAttributes<HTMLDivElement> {
		key: string;
		children: Snippet;
		class?: string;
	}
</script>

<script lang="ts">
	import { getAccordionContext } from './context';
	import { cn } from '$lib/utils';

	const { children, key, ...props }: AccordionItemContentProps = $props();

	const ctx = getAccordionContext();
</script>

<div {...ctx.api.getItemContentProps({ value: key })} class={cn('p-2', props.class)}>
	{@render children()}
</div>
