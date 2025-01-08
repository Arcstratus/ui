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
<Story
	name="demo"
	args={{
		items: [
			{ key: 'a', title: 'AAA', content: 'a content' },
			{ key: 'b', title: 'BBB', content: 'bbb' }
		]
	}}
/>

<Story name="default">
	<Accordion>
		<AccordionItem key="a">
			<AccordionItemTrigger key="a" title="a" />
			<AccordionItemContent key="a">
				<h1>a</h1>
				<h2>a</h2>
			</AccordionItemContent>
		</AccordionItem>
		<AccordionItem key="b">
			<AccordionItemTrigger key="b" title="b" />
			<AccordionItemContent key="b">
				<h3>b</h3>
				<h4>b</h4>
			</AccordionItemContent>
		</AccordionItem>
	</Accordion>
</Story>

<Story name="single">
	<Accordion multiple={false}>
		<AccordionItem key="a">
			<AccordionItemTrigger title="a" key="a" />
			<AccordionItemContent key="a">
				<h1>a</h1>
				<h2>a</h2>
			</AccordionItemContent>
		</AccordionItem>
		<AccordionItem key="b">
			<AccordionItemTrigger key="b" title="b" />
			<AccordionItemContent key="b">
				<h3>b</h3>
				<h4>b</h4>
			</AccordionItemContent>
		</AccordionItem>
	</Accordion>
</Story>
