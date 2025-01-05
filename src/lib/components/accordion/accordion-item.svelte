<script module lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
		title: string;
		class?: string;
		children: Snippet;
	}
</script>

<script lang="ts">
	import { getAccordionContext } from './context';

	const { children, title, ...props }: AccordionItemProps = $props();

	const ctx = getAccordionContext();
</script>

<div {...ctx.api.getItemProps({ value: title })} class={props.class}>
	{@render children()}
</div>
