// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BookingCom from 'booking.com-typescript';

const client = new BookingCom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pricing', () => {
  // skipped: tests are disabled for the time being
  test.skip('calculate', async () => {
    const responsePromise = client.pricing.calculate({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
