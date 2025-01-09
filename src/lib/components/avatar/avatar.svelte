<script module lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
		src: string;
		alt?: string;
		class?: string;
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { useId } from '$lib/components/use-id';
	import * as avatar from '@zag-js/avatar';
	import { normalizeProps, useMachine } from '@zag-js/svelte';
	import { setAvatarContext } from './context';
	import { cn } from '$lib/utils';

	const { children, src, alt, ...props }: AvatarProps = $props();

	const [snapshot, send] = useMachine(avatar.machine({ id: useId() }));
	const api = $derived(avatar.connect(snapshot, send, normalizeProps));

	setAvatarContext({
		get api() {
			return api;
		}
	});
</script>

<div {...api.getRootProps()}>
	{@render children?.()}
	<img {src} {alt} {...api.getImageProps()} />
</div>
