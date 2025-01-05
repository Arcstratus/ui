<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		Accordion,
		AccordionItem,
		AccordionItemContent,
		AccordionItemTrigger
	} from '$lib/components/accordion';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Main/Accordion',
		component: Accordion,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="default">
	<Accordion class="debug">
		<AccordionItem title="a">
			<AccordionItemTrigger title="a" />
			<AccordionItemContent title="a">
				<h1>a</h1>
				<h2>a</h2>
			</AccordionItemContent>
		</AccordionItem>
		<AccordionItem title="b">
			<AccordionItemTrigger title="b" />
			<AccordionItemContent title="b">
				<h3>b</h3>
				<h4>b</h4>
			</AccordionItemContent>
		</AccordionItem>
	</Accordion>
</Story>

<Story name="single">
	<Accordion class="debug" multiple={false}>
		<AccordionItem title="a">
			<AccordionItemTrigger title="a" />
			<AccordionItemContent title="a">
				<h1>a</h1>
				<h2>a</h2>
			</AccordionItemContent>
		</AccordionItem>
		<AccordionItem title="b">
			<AccordionItemTrigger title="b" />
			<AccordionItemContent title="b">
				<h3>b</h3>
				<h4>b</h4>
			</AccordionItemContent>
		</AccordionItem>
	</Accordion>
</Story>
