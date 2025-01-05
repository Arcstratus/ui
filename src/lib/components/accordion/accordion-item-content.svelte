<script module lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	export interface AccordionItemContentProps extends HTMLAttributes<HTMLDivElement> {
		title: string;
		children: Snippet;
		class?: string;
	}
</script>

<script lang="ts">
	import { getAccordionContext } from './context';

	const { children, title, ...props }: AccordionItemContentProps = $props();

	const ctx = getAccordionContext();
</script>

<div {...ctx.api.getItemContentProps({ value: title })} class={props.class}>
	{@render children()}
</div>
