/**
 * Like Promise.all except it only runs batchSize promises at once
 *
 * @param {*} proms an array of promoses
 * @param {*} batchSize an integer for how many promises should run at once
 */
async function batchPromiseRunner(proms, batchSize) {
	// TODO
}

/**
 * this can only do 5 jobs at once, due to using an external API
 */
async function processPayment({
	amount,
	user_id,
}) {
	// this is just a stub
}

module.exports = {
	processPayment,
	batchPromiseRunner,
};
