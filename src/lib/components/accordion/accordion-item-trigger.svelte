<script module lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	export interface AccordionItemTriggerProps extends HTMLAttributes<HTMLDivElement> {
		title: string;
		description?: string;
		class?: string;
	}
</script>

<script lang="ts">
	import { getAccordionContext } from './context';

	const { title, description, ...props }: AccordionItemTriggerProps = $props();

	const ctx = getAccordionContext();
</script>

<button {...ctx.api.getItemTriggerProps({ value: title })} class={props.class}>
	<div>{title}</div>
	{#if description}
		<div>{description}</div>
	{/if}
</button>
