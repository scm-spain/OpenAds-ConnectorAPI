# OpenAds-ConnectorAPI

Compliant interfaces to be implemented to develop an OpenAds connector.

## AdViewable

All connectors should implement these methods in order to display Ads:

* display: Should render an Ad 
* refresh: Should update the Ad's data and render it

## AdLoadable

Connectors that support Ad loading without rendering yet (pre-load) should implement these methods:

* loadAd: Should return the creative data from the Ad server 

### Load Ad sample

```ecmascript 6
connector.loadAd({
    id: 'ad-1', 
    specification: {
        source: 'appnexus',
        appnexus: {
            keywords: {
                // ...
            },
            invCode: 'listing-top'
        }
    }
})
.then(ad => {
    // ...
})
```

### Display sample

```ecmascript 6
connector.display({id: 'ad-1'})
.then(() => {
    // ...
})
```


### Display sample

```ecmascript 6
connector.refresh({
     id: 'ad-1', 
     specification: {
         source: 'appnexus',
         appnexus: {
             keywords: {
                 // ...
             },
             invCode: 'listing-top-x2'
         }
     }
 })
 .then(ad => {
     // ...
 })
```



## Logger

Connectors that has any Log system integrated, should implement the Logger interface:

* enableDebug: Should enable or disable the debug tracing for the implementing connector