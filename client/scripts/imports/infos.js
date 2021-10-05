import MarkInfo from "../infos/markInfo.js";
import PlaceInfo from "../infos/placeInfo.js";
import WorkerInfo from "../infos/workerInfo.js";
import CarInfo from "../infos/carInfo.js";
import ClientInfo from "../infos/clientInfo.js";
import OrderInfo from "../infos/orderInfo.js";

export default class Infos {
  static markInfo = MarkInfo.createNext();
  static placeInfo = PlaceInfo.createNext();
  static workerInfo = WorkerInfo.createNext();
  static carInfo = CarInfo.createNext();
  static clientInfo = ClientInfo.createNext();
  static orderInfo = OrderInfo.createNext();
}