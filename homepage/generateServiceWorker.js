const generateServiceWorkers = require('generate-service-worker');
 
const serviceWorkers = generateServiceWorkers({
  cache: {
    offline: true,
    precache: ['index.html','mobile.html','404.html','mobile.css','page.css'],
    strategy: [{
      type: 'prefer-cache',
      matches: ['\\.js']
    }],
  }
});