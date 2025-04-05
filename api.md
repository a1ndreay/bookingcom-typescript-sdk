# Hotels

Types:

- <code><a href="./src/resources/hotels/hotels.ts">HotelRetrieveResponse</a></code>
- <code><a href="./src/resources/hotels/hotels.ts">HotelListResponse</a></code>

Methods:

- <code title="get /hotels/{hotelId}">client.hotels.<a href="./src/resources/hotels/hotels.ts">retrieve</a>(hotelID) -> HotelRetrieveResponse</code>
- <code title="get /hotels">client.hotels.<a href="./src/resources/hotels/hotels.ts">list</a>({ ...params }) -> HotelListResponse</code>

## Favourite

Methods:

- <code title="post /hotels/{hotelId}/favourite">client.hotels.favourite.<a href="./src/resources/hotels/favourite.ts">add</a>(hotelID) -> void</code>
- <code title="delete /hotels/{hotelId}/favourite">client.hotels.favourite.<a href="./src/resources/hotels/favourite.ts">remove</a>(hotelID) -> void</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">OrderCreateResponse</a></code>

Methods:

- <code title="post /orders">client.orders.<a href="./src/resources/orders.ts">create</a>({ ...params }) -> OrderCreateResponse</code>

# Operations

Types:

- <code><a href="./src/resources/operations.ts">OperationRetrieveResponse</a></code>
- <code><a href="./src/resources/operations.ts">OperationListResponse</a></code>

Methods:

- <code title="get /operations/{operationId}">client.operations.<a href="./src/resources/operations.ts">retrieve</a>(operationID, { ...params }) -> OperationRetrieveResponse</code>
- <code title="get /operations">client.operations.<a href="./src/resources/operations.ts">list</a>() -> OperationListResponse</code>

# Pricing

Types:

- <code><a href="./src/resources/pricing.ts">PricingCalculateResponse</a></code>

Methods:

- <code title="post /pricing/calculate">client.pricing.<a href="./src/resources/pricing.ts">calculate</a>({ ...params }) -> PricingCalculateResponse</code>
