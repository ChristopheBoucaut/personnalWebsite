init:
	docker-compose run --rm node npm install
	docker-compose run --rm node ./node_modules/.bin/bower install

bash:
	docker-compose exec node bash

docker-up:
	docker-compose up -d

docker-logs:
	docker-compose logs -f --tail 5

docker-restart:
	docker-compose restart

docker-down:
	docker-compose down

clean:
	rm -rf ./app

build-prod:
	docker-compose run --rm node ./node_modules/.bin/brunch build --production