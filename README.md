# OpenAds-ConnectorAPI

Compliant interfaces to be implemented to develop an OpenAds connector.

## AdViewable

All connectors should implement these methods in order to display Ads:

* display: Should render an Ad into the specified dom element
* refresh: Should update the segmentation and render the Ad from the specified dom element 

## AdLoadable

Connectors that support Ad loading without rendering yet (pre-load) should implement these methods:

* loadAd: Should return 