# OpenAds-ConnectorAPI

Compliant interfaces to be implemented to develop an OpenAds connector.

## AdViewable

All connectors should implement these methods in order to display Ads:

* display: Should render an Ad 
* refresh: Should update the Ad's data and render it 

## AdLoadable

Connectors that support Ad loading without rendering yet (pre-load) should implement these methods:

* loadAd: Should return the creative data from the Ad server 

## Logger

Connectors that has any Log system integrated, should implement the Logger interface:

* enableDebug: Should enable or disable the debug tracing for the implementing connector