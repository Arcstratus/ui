import * as accordion from '@zag-js/accordion';
import { getContext, setContext } from 'svelte';

interface AccordionContext {
	api: ReturnType<typeof accordion.connect>;
}

const accordionKey = Symbol('accordion');

export function setAccordionContext(value: AccordionContext) {
	setContext(accordionKey, value);
}

export function getAccordionContext(): AccordionContext {
	return getContext(accordionKey) as AccordionContext;
}
