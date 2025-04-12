// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Operations extends APIResource {
  /**
   * returns the specified Operation
   */
  retrieve(operationID: string, options?: RequestOptions): APIPromise<OperationRetrieveResponse> {
    return this._client.get(path`/operations/${operationID}`, options);
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

  Result?: OperationRetrieveResponse.Result;

  status?: 'pending' | 'error' | 'completed';
}

export namespace OperationRetrieveResponse {
  export interface Result {
    type: string;
  }
}

export type OperationListResponse = Array<string>;

export declare namespace Operations {
  export {
    type OperationRetrieveResponse as OperationRetrieveResponse,
    type OperationListResponse as OperationListResponse,
  };
}
