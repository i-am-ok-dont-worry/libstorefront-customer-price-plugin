## Customer price plugin
Plugin provides support for fetching individual customer prices and
manipulate product data to extend product with customer prices.

Plugin uses `AfterProductFetched` hook to mutate product object after it
was fetched from ES.

Plugin has access to all lsf functionality including IOC container. Dependencies
can be rebound according to plugin needs.

## Redux store
Plugin extends core redux store with branch `customerPrice`. Default branch state 
is a object:
```javascript
customerPrice: {
    items: CustomerPrice[],
    loaded: boolean
}
```

where:
* `items` is a list of individual customer prices that were defined for this customer
* `loaded` indicates whether price list has been already fetched

## Mutation
Plugin will mutate products fetched from API via `ProductService.getProducts({})` with following property:
```javascript
{
    ...product_properties,
    customerPrice: CustomerPrice
}
```
Every request made to ES will resolve in extended product object, only if customer price for queried products
were actually assigned to the customer.

## Build plugin
Run `npm run build` to build plugin.
Output can be found in `/dist` catalog.

## Test plugin
Plugin must be tested in isolation. Unit tests can be performed via jest framework
in `/tests/test.ts` file.
Template includes by default mocked LocalStorage object.
