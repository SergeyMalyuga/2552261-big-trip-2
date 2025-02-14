import {createElement} from '../render';

function createTripMainInfoTemplate() {
  return '<section class="trip-main__trip-info  trip-info">\n' +
    '            <div class="trip-info__main">\n' +
    '              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n' +
    '\n' +
    '              <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <p class="trip-info__cost">\n' +
    '              Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n' +
    '            </p>\n' +
    '          </section>';
}

export default class TripInfoView {
  getTemplate() {
    return createTripMainInfoTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
