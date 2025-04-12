// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Orders extends APIResource {
  /**
   * Create payment transaction request
   */
  create(body: OrderCreateParams, options?: RequestOptions): APIPromise<OrderCreateResponse> {
    return this._client.post('/orders', { body, ...options });
  }
}

/**
 * operationId
 */
export interface OrderCreateResponse {
  operationId?: string;
}

export interface OrderCreateParams {
  /**
   * the way to create hotel booking transaction
   */
  Params: OrderCreateParams.Params;
}

export namespace OrderCreateParams {
  /**
   * the way to create hotel booking transaction
   */
  export interface Params {
    /**
     * RFC 3339, section 5.6
     */
    CheckInDate: string;

    /**
     * RFC 3339, section 5.6
     */
    CheckOutDate: string;

    hotelId: string;
  }
}

export declare namespace Orders {
  export { type OrderCreateResponse as OrderCreateResponse, type OrderCreateParams as OrderCreateParams };
}
