import Q from 'q'

class EtherService {

	getEtherPrices() {
		var deferred = Q.defer()

		setTimeout(() => { 
			deferred.resolve([
				{day: "Jan 5", price: 50},
				{day: "Jan 6", price: 52},
				{day: "Jan 7", price: 53}
			])
		}, 3000)

		return deferred.promise
	}

}

export default new EtherService()