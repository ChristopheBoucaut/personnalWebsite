# Requirements

Docker / Docker Compose

# Install

``` shell
git clone https://github.com/ChristopheBoucaut/personnalWebsite
make init
```

+ **For dev:**
``` shell
make docker-up
# go to localhost:3333
# make docker-down to stop all
```

+ **For build the production:**
``` shell
make clean
make build-prod
```
