
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + localStorage.token);
myHeaders.append("X-Requested-With", "XMLHttpRequest");

var formdata = new FormData();
formdata.append("content_type", "call_center");
formdata.append("action", "view");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};



  export const getCallCenter = () => dispatch => {
    fetch("http://react.octarine.com.ua/api/call-center/list", requestOptions)
    .then(response => response.text())
    .then(response => JSON.parse(response))
    // .then(res => console.log(res))
    .then( a => 
      dispatch({ type: 'FETCH_CALLCENTERS_SUCCESS', payload: a.data.call_centers }))
      .catch(error => console.log('error', error))

  }




