import { generators } from './imports/generators.js'
import Infos from './imports/infos.js'

export default class GeneratedData {
	static createNext() {
		// marks
		let markGenerator = new generators.MarkGenerator(
			Infos.markInfo
		); 
		let marks = markGenerator.generate();

		// places
		let placeGenerator = new generators.PlaceGenerator(
			Infos.placeInfo
		);
		let places = placeGenerator.generate();

		// workers
		let workerGenerator = new generators.WorkerGenerator(
			Infos.workerInfo,
			places);
		let workers = workerGenerator.generate();

		// cars
		let carGenerator = new generators.CarGenerator(
			Infos.carInfo,
			marks
		);
		let cars = carGenerator.generate();

		// clients
		let clientGenerator = new generators.ClientGenerator(
			Infos.clientInfo
		);
		let clients = clientGenerator.generate();

		// orders
		let orderGenerator = new generators.OrderGenerator(
			Infos.orderInfo,
			cars,
			clients,
			workers
		);
		let orders = orderGenerator.generate(20);
		
		return {
			Marks: marks,
			Places: places,
			Workers: workers,
			Cars: cars,
			Clients: clients,
			Orders: orders
		};
	}
};