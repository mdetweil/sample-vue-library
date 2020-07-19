docker: docker-build
	docker run -it -p 8080:8080 --rm vue-app 
docker-build:
	docker build -t vue-app .
compose:
	docker-compose up --build
publish: bundle
	npm publish --access public
bundle:
	yarn bundle