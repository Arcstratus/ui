<script module lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface AccordionItemProps {
		key: string;
		title: string;
		content: Snippet;
	}

	export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
		multiple?: boolean;
		initialValues?: string[];
		class?: string;
		items?: AccordionItemProps[];
	}
</script>

<script lang="ts">
	import { useId } from '$lib/components/use-id';
	import * as accordion from '@zag-js/accordion';
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import { setAccordionContext } from './context';
	import { cn } from '$lib/utils';
	import AccordionItem from './accordion-item.svelte';
	import AccordionItemTrigger from './accordion-item-trigger.svelte';
	import AccordionItemContent from './accordion-item-content.svelte';

	const { children, items, multiple = true, ...props }: AccordionProps = $props();

	const [snapshot, send] = useMachine(accordion.machine({ id: useId(), multiple }));
	const api = $derived(accordion.connect(snapshot, send, normalizeProps));

	setAccordionContext({
		get api() {
			return api;
		}
	});
</script>

<div {...api.getRootProps()} class={cn('overflow-hidden rounded', props.class)}>
	{#if items}
		{#each items as item}
			<AccordionItem key={item.key}>
				<AccordionItemTrigger key={item.key} title={item.title} />
				<AccordionItemContent key={item.key}>{item.content}</AccordionItemContent>
			</AccordionItem>
		{/each}
	{/if}

	{@render children?.()}
</div>
