// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Operations extends APIResource {
  /**
   * returns the specified Operation
   */
  retrieve(
    operationID: string,
    query: OperationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<OperationRetrieveResponse> {
    return this._client.get(path`/operations/${operationID}`, { query, ...options });
  }

  /**
   * list all of the operations for the current loged user
   */
  list(options?: RequestOptions): APIPromise<OperationListResponse> {
    return this._client.get('/operations', options);
  }
}

export interface OperationRetrieveResponse {
  /**
   * RFC 3339, section 5.6
   */
  CreatedAt?: string;

  description?: string;

  operationId?: string;

  Result?: OperationRetrieveResponse.Error | OperationRetrieveResponse.Response;

  status?: 'pending' | 'error' | 'completed';
}

export namespace OperationRetrieveResponse {
  export interface Error {
    /**
     * [google.rpc.status] Error model suitable for both REST APIs and RPC APIs
     */
    Error: Error.Error;
  }

  export namespace Error {
    /**
     * [google.rpc.status] Error model suitable for both REST APIs and RPC APIs
     */
    export interface Error {
      /**
       * The status code, which should be an enum value of [google.rpc.Code]
       */
      Code?: number;

      Details?: unknown;

      /**
       * A developer-facing error message, which should be in English. Any user-facing
       * error message should be localized and sent in the details field.
       */
      Message?: string;
    }
  }

  export interface Response {
    Response: unknown;
  }
}

export type OperationListResponse = Array<string>;

export interface OperationRetrieveParams {
  query_operationId: string;
}

export declare namespace Operations {
  export {
    type OperationRetrieveResponse as OperationRetrieveResponse,
    type OperationListResponse as OperationListResponse,
    type OperationRetrieveParams as OperationRetrieveParams,
  };
}
