<script lang="ts">
	import {
		Accordion,
		AccordionItem,
		AccordionItemContent,
		AccordionItemTrigger
	} from '$lib/components/accordion';
	import { Button } from '$lib';
	import { IconClick } from '@tabler/icons-svelte';
</script>

<Button class="min-w-48" onclick={() => console.log('clicked')}>
	<div>text</div>
	<IconClick />
</Button>

<Accordion class="debug">
	<AccordionItem key="a" class="">
		<AccordionItemTrigger key="a" title="Hello" description="Svelte" class="bg-sky-200" />
		<AccordionItemContent key="a">
			<h1>Welcome to your library project</h1>
			<p>
				Create your package using @sveltejs/package and preview/showcase your work with SvelteKit
			</p>
			<p>
				Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
			</p>
		</AccordionItemContent>
	</AccordionItem>
	<AccordionItem key="b" class="border-none">
		<AccordionItemTrigger key="b" title="B" />
		<AccordionItemContent key="b" class="bg-orange-100">Content</AccordionItemContent>
	</AccordionItem>
</Accordion>
