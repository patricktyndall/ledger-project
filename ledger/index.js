const {
	processPayment,
	batchPromiseRunner,
} = require('./helpers');
const charges = require('./charges');

/**
 * This is an API endpoint.
 *
 * It takes two options: building_id or manager_id.
 * - Only one of these can be provided (if both are provided, it's an invalid request)
 *   - If building_id is given, then only items for that building should be returned.
 *   - If user_id is given, then only items for that user_id should be returned.
 *
 * @return an array of objects.
 *
 * The result array should be descending in time, with the most recent first.
 */
function getLedgerItems({ building_id, user_id }) {

	/**
		This should return an array of objects, where each item looks like:
		{
			due_at: 1614556800,
			amount_usd: 9000.23,
			building_id: '1234-1234-1234-1234'
			charges: [
				// the associated charge items
			],
		}

	 */

}

/**
 * This is an internal service job, which processes our payments on a daily basis.
 *
 * @param curDate a unix (seconds) timestamp
 */
async function processLedgerPayments({ curTime }) {

}
