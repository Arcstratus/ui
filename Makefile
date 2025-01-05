
dev:
	NODE_OPTIONS=--no-experimental-require-module npm run storybook

release:
	npm run build
	npm pack
	npm publish --access public
