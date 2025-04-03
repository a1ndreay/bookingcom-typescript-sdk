// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FavouriteAPI from './favourite';
import { Favourite } from './favourite';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Hotels extends APIResource {
  favourite: FavouriteAPI.Favourite = new FavouriteAPI.Favourite(this._client);

  /**
   * Get specified hotel
   */
  retrieve(hotelID: number, options?: RequestOptions): APIPromise<HotelRetrieveResponse> {
    return this._client.get(path`/hotels/${hotelID}`, options);
  }

  /**
   * Returns a hotels feed.
   */
  list(
    query: HotelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HotelListResponse> {
    return this._client.get('/hotels', { query, ...options });
  }
}

export interface HotelRetrieveResponse {
  description?: string;

  hotelId?: number;

  hotelName?: string;

  isFavourite?: boolean;

  /**
   * ref token to fetch the hotel page
   */
  pageRenderToken?: string;

  photos?: Array<string>;

  rating?: number;

  stars?: number;
}

export interface HotelListResponse {
  hotels?: Array<HotelListResponse.Hotel>;

  next_page_token?: string;
}

export namespace HotelListResponse {
  export interface Hotel {
    description?: string;

    hotelId?: number;

    hotelName?: string;

    isFavourite?: boolean;

    photo?: string;

    rating?: number;

    stars?: number;
  }
}

export interface HotelListParams {
  city?: string;

  country?: string;

  maxCost?: number;

  minCost?: number;

  onlyFavourite?: boolean;

  /**
   * returned by a previous list request to get the next page of results.
   */
  page_token?: string;

  rating?: number;

  /**
   * fetch hotels by stars
   */
  stars?: number;
}

Hotels.Favourite = Favourite;

export declare namespace Hotels {
  export {
    type HotelRetrieveResponse as HotelRetrieveResponse,
    type HotelListResponse as HotelListResponse,
    type HotelListParams as HotelListParams,
  };

  export { Favourite as Favourite };
}
