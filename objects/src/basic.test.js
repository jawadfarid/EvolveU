import getFirstValidTimestampFromArrayOfValues from "./basic.js"


test('Test One', () => {
	let timestamps = [5300,1,97646516849849,0]; //Pass
	expect(getFirstValidTimestampFromArrayOfValues(timestamps)).not.toBeNull();
});

test('Test with Date.now', () => {
	let x = Date.now(); // Fail - current timestamp is less than teh given limit in the function
	// 31536000			--- Given timestamp
	// 1560888646728 	---	Current timestamp in milliseconds (At the time of test)
	// 1560888646.728 	---	Current timestamp in seconds
	// 26014810.7788‬ 	---	Current timestamp in minutes
	// 433580.1796466667‬

	// expect(getFirstValidTimestampFromArrayOfValues(x)).not.toBeNull();
	expect(getFirstValidTimestampFromArrayOfValues(x)).toBe(31536000);
});


test('Test Two', () => {
	let timestamps = [31536000,31536001]; //Fail - Last item is not being Considered
	expect(getFirstValidTimestampFromArrayOfValues(timestamps)).toBe(31536000);
});




test('Test Three', () => {
	let timestamps = [5300,1,31536001,31536000]; //Pass
	expect(getFirstValidTimestampFromArrayOfValues(timestamps).Timestamp).toBe(31536001);
	expect(getFirstValidTimestampFromArrayOfValues(timestamps).Index).toBe(2);
});


test('Test Four', () => {
	let timestamps = [5300,1,"abc",31536001,31536000]; //Pass
	expect(getFirstValidTimestampFromArrayOfValues(timestamps).Timestamp).toBe(31536001);
	expect(getFirstValidTimestampFromArrayOfValues(timestamps).Index).toBe(3);
});


test('Test Five', () => {
	let timestamps = ["abc",31536001]; //Fail
	expect(getFirstValidTimestampFromArrayOfValues(timestamps).Timestamp).toBe(31536001);
	expect(getFirstValidTimestampFromArrayOfValues(timestamps).Index).toBe(1);
});

test('Test Six', () => {
	let timestamps = [31536001,"abc"]; //Fail
	expect(getFirstValidTimestampFromArrayOfValues(timestamps).Timestamp).toBe(0);
	expect(getFirstValidTimestampFromArrayOfValues(timestamps).Index).toBe(0);
});