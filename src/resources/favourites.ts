// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Favourites extends APIResource {
  /**
   * Get list of favourite hotels
   */
  list(options?: RequestOptions): APIPromise<FavouriteListResponse> {
    return this._client.get('/favourites', options);
  }
}

export interface FavouriteListResponse {
  /**
   * the list of hotel ids
   */
  favourites?: Array<string>;
}

export declare namespace Favourites {
  export { type FavouriteListResponse as FavouriteListResponse };
}
