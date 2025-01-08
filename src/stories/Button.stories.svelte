<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Button } from '$lib/components/button';
	import { IconClick } from '@tabler/icons-svelte';
	import '../app.css';

	const { Story } = defineMeta({
		title: 'Main/Button',
		component: Button,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	});
</script>

<Story name="demo">
	<Button onclick={() => {}}>hello</Button>
</Story>

<Story name="layout - full width">
	<Button onclick={() => {}} class="min-w-full">
		<div>text</div>
		<IconClick />
	</Button>
</Story>
