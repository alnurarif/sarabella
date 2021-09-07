export const makeAnObjectOfLaravelError = async (response) => {
	let errors = response.message
	let errorObject = {}
	for(var propertyName in errors) {
	   errorObject[propertyName] = await errors[propertyName][0]
	}
	return errorObject;
}