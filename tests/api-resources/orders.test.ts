// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BookingCom from 'booking.com-typescript';

const client = new BookingCom({
  accessToken: 'My Access Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource orders', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.orders.create({
      Params: { CheckInDate: '2019-12-27', CheckOutDate: '2019-12-27', hotelId: 'hotelId' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.orders.create({
      Params: { CheckInDate: '2019-12-27', CheckOutDate: '2019-12-27', hotelId: 'hotelId' },
    });
  });
});
