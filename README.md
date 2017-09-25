# laoo

```$ npm i laoo -S ```


Fetches your desired key even if its deep down somewhere. 

```javascript
const laoo = require('laoo');
const someWeirdObject = {
    I: {
        am: {
            a: {
                very: {
                    weird: {
                        object: {
                            bro: 'I am a weird object bro'
                        }
                    }
                }
            }
        }
    }
};

laoo(someWeirdObject, 'bro'); // returns 'I am a weird object bro'
```

### Disclaimer

Bad code and doesn't work in array of objects.
