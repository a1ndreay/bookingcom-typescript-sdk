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
