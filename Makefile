# simple makefile
@:
	@echo "no commands chosen.";
	@echo "try 'make help' to see available commands.";

## watch: Start development mode with watcher
watch:
	yarn parcel

## build: Build app
build:
	yarn parcel build --public-url /${APP_BASE_PATH} --no-source-maps

.PHONY: help
all: help
help: Makefile
	@echo
	@echo " Choose a command run with parameter options: "
	@echo
	@sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^/ /'
	@echo
