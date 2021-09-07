export const setImageToState = (response,callback) => {
	if(response.type == 'application/json') return false
	var reader = new FileReader();
    reader.onload = function(event){
    	callback(event.target.result)
    };
    reader.readAsDataURL(response)
}