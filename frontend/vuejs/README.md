# VUE JS 3

https://vuejs.org/guide/introduction.html 

## Pour démarrer : 

https://vuejs.org/guide/quick-start.html#without-build-tools 

## Template de démarrage :

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VueJS Starter template (without build tools)</title>
    <script src="https://unpkg.com/vue@3" defer></script>
    <script src="main.js" defer></script>
</head>
<body>
    <h1>VueJS Starter Template</h1>
    <h2>Without build tools !</h2>
    <div id="app">
        {{ message }}
    </div>
</body>

</html>
```

```js
/* main.js */

Vue.createApp({
    data() {
      return {
        message: 'Hello CRM !'
      }
    }
  }).mount('#app')
```