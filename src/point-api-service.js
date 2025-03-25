import ApiService from './framework/api-service';

const Method = {
  GET: 'GET',
  PUT: 'PUT',
};

export default class PointApiService extends ApiService {
  get points() {
    return this._load({url: 'points'})
      .then(ApiService.parseResponse);
  }

  // get offers() {
  //   return this._load({url: 'offers'})
  //     .then(ApiService.parseResponse);
  // }
  //
  // get destinations() {
  //   return this._load({url: 'destinations'})
  //     .then(ApiService.parseResponse);
  // }

  async updatePoint(point) {
    const response = await this._load({
      url: `points/${point.id}`,
      method: Method.PUT,
      body: JSON.stringify(this.#adaptToServer(point)),
      headers: new Headers({'Content-Type': 'application/json'}),
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }

  #adaptToServer(point) {
    const adaptPoint = {
      ...point,
      'id': point.id,
      'base_price': point.basePrice,
      'date_from': point.dateFrom,
      'date_to': point.dateTo,
      'destination': point.destination,
      'is_favorite': point.isFavorite,
      'offers': point.offers,
      'type': point.type,
    };

    delete adaptPoint.basePrice;
    delete adaptPoint.dateFrom;
    delete adaptPoint.dateTo;
    delete adaptPoint.isFavorite;


    return adaptPoint;
  }
}
