# grammarbuffet
a landing page for micromaterials

## local development

(webpack seemed too heavy slash I couldn't get it working)

`npx http-server`

the page will be available at `localhost:8080`

## security testing

- first, build the docker container locally using the information at https://github.com/lirantal/is-website-vulnerable

- then just run `npm run test:security`, which will use the container you just built
