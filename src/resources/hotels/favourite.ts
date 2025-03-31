// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Favourite extends APIResource {
  /**
   * Add hotel to favourite
   */
  add(hotelID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/hotels/${hotelID}/favourite`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Remove hotel from favourite
   */
  remove(hotelID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/hotels/${hotelID}/favourite`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
