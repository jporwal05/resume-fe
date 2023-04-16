# resume-fe

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Creates a docker image
```
npm run dockerize
```

#### Tag the image
```
docker tag resume-fe:latest jporwal05/resume-fe:1.0.0
```

#### Push the image
```
docker push jporwal05/resume-fe:1.0.0
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### For running
```
docker pull jporwal05/resume-fe:1.0.0
```
```
docker run -p 80:3000 jporwal05/resume-fe:1.0.0
```
