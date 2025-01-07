<script module lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
		key: string;
		class?: string;
		children: Snippet;
	}
</script>

<script lang="ts">
	import { getAccordionContext } from './context';
	import { cn } from '$lib/utils';

	const { children, key, ...props }: AccordionItemProps = $props();

	const ctx = getAccordionContext();
</script>

<div
	{...ctx.api.getItemProps({ value: key })}
	class={cn('overflow-hidden border-b border-foreground/20', props.class)}
>
	{@render children()}
</div>
