//QUESTION 2. Create unit tests for the following function and indicate which tests will pass and which will fail.//
/*
@brief This function finds the first “valid” timestamp in an array
@param timestamps; an unordered array
@return timestamp and its index
*/
function getFirstValidTimestampFromArrayOfValues(timestamps) {
	let validTime
	let latestTimestamp = 0
	for (let i = 0; i < timestamps.length - 1; i++)
	{
		// don’t accept timestamps before the product existed
		if (timestamps[i] > 31536000)
		{
			latestTimestamp = { Timestamp: timestamps[i], Index: i }
			break
		}
	}
	return latestTimestamp
}

export default getFirstValidTimestampFromArrayOfValues;

//Please find the unit testing for the above function in basic.test.js file

// ===================================================================================================
// ===================================================================================================
// ===================================================================================================
//QUESTION 3. Perform a code review on the function presented in the previous question, evaluating for style
// and function. Identify all potential issues and provide explanation where necessary.

//===============================================================================
//=============================== CODE REVIEW ====================================
//===============================================================================

// -- I want to know if this code is reviewd for performance or readibility?
// -- If this is being reviewd for readibility, I want to know the unit for timestamps entries. Without the unit I dont know what the number 31536000 represnts.
// -- With using Date.now method, I tried to figure out the unit for timestamp and it turns out to be "minutes"(possibly).
// -- Which doesnt make sense as the above given timestamp limit is 10 years ahead of the current timestamp(Maybe I am overthinking).
// -- Good descriptive variable names
// -- No repitition anywhere 
// -- No semi-colons at the end of most of th lines. I prefer to end lines with semi-colons as it makes the code a little easier to parse and to compress
// -- I noticed that the for loop is not considering the last value in the timestamps array. Is that intentioanlly or is that a mistake/bug?