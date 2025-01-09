<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Avatar, AvatarFallback } from '$lib/components/avatar';
	import IconBookUrl from '$lib/assets/book.svg';

	const { Story } = defineMeta({
		title: 'Main/Avatar',
		component: Avatar,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	});
</script>

<Story name="demo" args={{ src: IconBookUrl }} />

<Story name="failed without fallback">
	<Avatar src="not-found" alt="nf" />
</Story>

<Story name="fallback">
	<Avatar src="not-found" alt="book">
		<AvatarFallback>Fallback</AvatarFallback>
	</Avatar>
</Story>
