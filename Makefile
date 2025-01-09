
dev:
	NODE_OPTIONS=--no-experimental-require-module npm run storybook

preview:
	npm run dev

release:
	npm run build
	npm pack
	npm publish --access public
