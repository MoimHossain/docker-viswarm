# Docker swarm visualizer

A docker swarm cluster visualizer application. You can run it in container cluster and use as a dashboard to visualize the service-task distributions among nodes in realtime.



![Swarm nodes](http://imgur.com/a/jKKZX)


## How to run

To get the visualizer up and running in  your cluster
```
> docker run -p 9009:9009 -v /var/run/docker.sock:/var/run/docker.sock moimhossain/viswarm
```

## How to develop

This is what you need to do in order to start hacking the codebase

```
> npm install
```

It might be the case that you have installed webpack locally and received a __webpack command not recognized__ error. In such scenarios, you can either install webpack globally or run it from local installation by using the following command:

```
node_modules\.bin\webpack
```

Start the development server (changes will now update live in browser)
```
> npm run dev
```

To view your project, go to: [http://localhost:9009/](http://localhost:9009/)


## Info
This application was built with React JS, Redux, Docker Remote API. Therefore, you need to be familiar with these concepts.

### Contribution and license

MIT licensed, and open for anything with no obligation. Feel free to use/customize/change it anyway you see fit.
Giving me a thumbs up, a token of appreciation will make me very happy!

