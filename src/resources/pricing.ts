// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Pricing extends APIResource {
  /**
   * calculate the cost of staying at the hotel
   */
  calculate(body: PricingCalculateParams, options?: RequestOptions): APIPromise<PricingCalculateResponse> {
    return this._client.post('/pricing/calculate', { body, ...options });
  }
}

export interface PricingCalculateResponse {
  Price?: PricingCalculateResponse.Price;
}

export namespace PricingCalculateResponse {
  export interface Price {
    /**
     * the code of the currency: USD, RUB etc.
     */
    currency?: string;

    value?: number;
  }
}

export interface PricingCalculateParams {
  /**
   * default values service need to calculate hotel price
   */
  Params?: PricingCalculateParams.Params;
}

export namespace PricingCalculateParams {
  /**
   * default values service need to calculate hotel price
   */
  export interface Params {
    /**
     * RFC 3339, section 5.6
     */
    CheckInDate?: string;

    /**
     * RFC 3339, section 5.6
     */
    CheckOutDate?: string;

    hotelId?: string;
  }
}

export declare namespace Pricing {
  export {
    type PricingCalculateResponse as PricingCalculateResponse,
    type PricingCalculateParams as PricingCalculateParams,
  };
}
