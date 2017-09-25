# lao

Fetches your desired key even if its deep down somewhere. 

```javascript
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

lao(someWeirdObject, 'bro'); // returns 'I am a weird object bro'
```

### Disclaimer

Bad code and doesn't work in array of objects.
