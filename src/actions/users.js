
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + localStorage.token);
myHeaders.append("X-Requested-With", "XMLHttpRequest");

var formdata = new FormData();
formdata.append("content_type", "user");
formdata.append("action", "view");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};



  export const getUsers = () => dispatch => {
    fetch("http://react.octarine.com.ua/api/user/list", requestOptions)
    .then(response => response.text())
    .then(response => JSON.parse(response))
    .then( a => 
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: a.data.users }))
      .catch(error => console.log('error', error))

  }




