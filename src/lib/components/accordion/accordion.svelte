<script module lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
		multiple?: boolean;
		initialValues?: string[];
		class?: string;
	}
</script>

<script lang="ts">
	import { useId } from '$lib/components/use-id';
	import * as accordion from '@zag-js/accordion';
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import { setAccordionContext } from './context';

	const { children, multiple = true, ...props }: AccordionProps = $props();

	const [snapshot, send] = useMachine(accordion.machine({ id: useId(), multiple }));
	const api = $derived(accordion.connect(snapshot, send, normalizeProps));

	setAccordionContext({
		get api() {
			return api;
		}
	});
</script>

<div {...api.getRootProps()} class={props.class}>
	{@render children?.()}
</div>
