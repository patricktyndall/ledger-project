// to test at command line: `node functions/streamToPromise`
const { Readable } = require('stream');

/**
 * A Node.js readable stream (https://nodejs.org/api/stream.html#stream_readable_streams)
 * can be thought of as an event emitter that emits 3 events:
 *
 * - 'data' when a new chunk of data is available, `stream.on('data', chunk => {})`
 * - 'error' when an error occurred, `stream.on('error', err => {})`
 * - 'end' when the stream has successfully completed, `stream.on('end', () => {})`
 *
 * You may assume that the `chunk` passed to the 'data' event handler is a string.
 *
 * @returns a promise that resolves to the concatenation of all chunks emitted in 'data'
 * if the stream successfully completes, or rejects with the error emitted
 * in 'error' if there was one.
 */
function streamToPromise(streamObj) {
	console.log('ASD');
}

async function test() {
	const chunks = [
		'chunk1',
		'chunk2',
		'chunk3',
	];

	const streamObj = Readable.from(chunks);

	const result = await streamToPromise(streamObj);

	console.log(result);
}

test();
