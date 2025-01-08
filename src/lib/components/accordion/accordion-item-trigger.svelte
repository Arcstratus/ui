<script module lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	export interface AccordionItemTriggerProps extends HTMLAttributes<HTMLDivElement> {
		key: string;
		title: string;
		description?: string;
		class?: string;
	}
</script>

<script lang="ts">
	import { getAccordionContext } from './context';
	import { cn } from '$lib/utils';
	import { IconChevronDown } from '@tabler/icons-svelte';

	const { key, title, description, ...props }: AccordionItemTriggerProps = $props();

	const ctx = getAccordionContext();
</script>

<button
	{...ctx.api.getItemTriggerProps({ value: key })}
	class={cn('group w-full p-4 text-left hover:bg-muted', props.class)}
>
	<span class="between center flex gap-4">
		<h3 class="group-hover:underline">{title}</h3>
		<IconChevronDown />
	</span>
	{#if description}
		<h4>{description}</h4>
	{/if}
</button>
