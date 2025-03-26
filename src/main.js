import MainPresenter from './presenter/main-presenter';
import PointsModel from './model/points-model';
import FilterModel from './model/filter-model';
import PointOptionsModel from './model/point-options-model';
import DestinationsModel from './model/destinations-model';
import FilterPresenter from './presenter/filter-presenter';

import PointApiService from './api/point-api-service';
import DestinationApiService from './api/destination-api-service';
import OfferApiService from './api/offer-api-service';

const AUTHORIZATION = 'Basic SyU27srgS7890678wCvlJ1sa2G';
const END_POINT = 'https://22.objects.htmlacademy.pro/big-trip';

const pointsModel = new PointsModel({pointApiService: new PointApiService(END_POINT, AUTHORIZATION)});
const offersModel = new PointOptionsModel({offerApiService: new OfferApiService(END_POINT, AUTHORIZATION)});
const filterModel = new FilterModel();
const destinationsModel = new DestinationsModel({destinationApiService: new DestinationApiService(END_POINT, AUTHORIZATION)});

const mainContainer = document.querySelector('.page-body');
const filterContainer = document.querySelector('.trip-controls__filters');

Promise.all([destinationsModel.init(), offersModel.init()]).then(() => {
  const filterPresenter = new FilterPresenter({filterContainer, filterModel, pointsModel});
  const mainPresenter = new MainPresenter({
    container: mainContainer,
    filterModel,
    pointModel: pointsModel,
    pointOptionsModel: offersModel,
    destinationModel: destinationsModel
  });
  filterPresenter.init();
  mainPresenter.init();
  pointsModel.init();
});


