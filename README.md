# Particle JS Vanilla Background Generator

> ParticleJS Background ready to use and can be customizable via the parameters inside the url.

![Example of configuration](/docs/example.gif)

## Context

I like to use particle-js as a background for my project and I always have to installed the dependency and customize it, which takes me a few minutes to accomplish. So I decided to deploy this simple app which would be always accesible to anyone and also can change the way the particles work and see!

## Implementation

This is one of the project which can be easily implemented in plain javascript, without framework! So all the code is just 1 html, 1 css and 3 js files!

## Using it

As I said this is accesible to anyone, I decided to host the applicaiton in github pages.

> https://emasuriano.github.io/particle-js-background/

By the time I did this small version, you are allowed to send:

* backgroundColor: This a RGB color which will change the background color of the page. [Example](https://emasuriano.github.io/particle-js-background/?backgroundColor=0900aa)
* particles: This is the whole particlesJs configuration. I highly recommend you to use the [official particlesJS demo](https://vincentgarreau.com/particles.js/) in order to know all the possible values inside the configuration and then you can exported to a JSON to save it! **IMPORTANT - remember to encode the config before sending inside the url!**[Example](https://emasuriano.github.io/particle-js-background/?particles=%7B%22particles%22%3A%7B%22number%22%3A%7B%22value%22%3A80%2C%22density%22%3A%7B%22enable%22%3Atrue%2C%22value_area%22%3A800%7D%7D%2C%22color%22%3A%7B%22value%22%3A%22%23aa00aa%22%7D%2C%22shape%22%3A%7B%22type%22%3A%22circle%22%2C%22stroke%22%3A%7B%22width%22%3A0%2C%22color%22%3A%22%23000000%22%7D%2C%22polygon%22%3A%7B%22nb_sides%22%3A5%7D%2C%22image%22%3A%7B%22src%22%3A%22img%2Fgithub.svg%22%2C%22width%22%3A100%2C%22height%22%3A100%7D%7D%2C%22opacity%22%3A%7B%22value%22%3A0.5%2C%22random%22%3Afalse%2C%22anim%22%3A%7B%22enable%22%3Afalse%2C%22speed%22%3A1%2C%22opacity_min%22%3A0.1%2C%22sync%22%3Afalse%7D%7D%2C%22size%22%3A%7B%22value%22%3A5%2C%22random%22%3Atrue%2C%22anim%22%3A%7B%22enable%22%3Afalse%2C%22speed%22%3A40%2C%22size_min%22%3A0.1%2C%22sync%22%3Afalse%7D%7D%2C%22line_linked%22%3A%7B%22enable%22%3Atrue%2C%22distance%22%3A150%2C%22color%22%3A%22%23ffffff%22%2C%22opacity%22%3A0.4%2C%22width%22%3A1%7D%2C%22move%22%3A%7B%22enable%22%3Atrue%2C%22speed%22%3A6%2C%22direction%22%3A%22none%22%2C%22random%22%3Afalse%2C%22straight%22%3Afalse%2C%22out_mode%22%3A%22out%22%2C%22attract%22%3A%7B%22enable%22%3Afalse%2C%22rotateX%22%3A600%2C%22rotateY%22%3A1200%7D%7D%7D%7D)

Another important aspect of the application, in case the user doesn't provide any values for customization, therefore we don't have to send the full configuration object inside the url!

### Simple example

Let's suppose that I want my background to be grey and my particles to be purple. Similar to this:

```json
{
  "backgroundColor": "#292929",
  "particles": {
    "color": {
      "value": "#aa00aa"
    },
    "line_linked": {
      "color": "#aa00aa"
    }
  }
}
```

So the background will be sent without any conversion inside the URL, meanwhile we must convert the particles configuration using the following function.

```javascript
function encodeParticlesConfig(config) {
  return encodeURIComponent(JSON.stringify(config));
}
```

The resulting URL will be this:

https://emasuriano.github.io/particle-js-background/?backgroundColor=292929&particles=%7B%22particles%22%3A%7B%22color%22%3A%7B%22value%22%3A%22%23aa00aa%22%7D%2C%22line_linked%22%3A%7B%22color%22%3A%22%23aa00aa%22%7D%7D%7D
