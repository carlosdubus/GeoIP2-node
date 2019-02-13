import camelcaseKeys = require('camelcase-keys');
import * as records from '../records';
import { CityResponse } from '../types';
import Country from './Country';

/** Class representing the model of a "City" response **/
export default class City extends Country {
  public readonly city: records.CityRecord | {};
  public readonly location: records.LocationRecord | {};
  public readonly postal: records.PostalRecord | {};
  public readonly subdivisions: records.SubdivisionsRecord[] | [];

  /**
   * Instanstiates a "City" using fields from the response
   *
   * @param response The GeoIP2 response
   */
  public constructor(response: CityResponse) {
    super(response);

    const camelcaseResponse = camelcaseKeys(response, {
      deep: true,
      exclude: [/\-/],
    });
    this.city = camelcaseResponse.city || undefined;
    this.location = camelcaseResponse.location || undefined;
    this.postal = camelcaseResponse.postal || undefined;
    this.subdivisions = camelcaseResponse.subdivisions || [];
  }
}
