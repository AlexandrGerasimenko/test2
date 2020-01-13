
var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.token);
        myHeaders.append("X-Requested-With", "XMLHttpRequest");
        
        var formdata = new FormData();
        formdata.append("content_type", "country");
        formdata.append("action", "view");
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };



          export const getCountries = () => dispatch => {
            fetch("http://react.octarine.com.ua/api/country/list", requestOptions)
            .then(response => response.text())
            .then(response => JSON.parse(response))
            .then( a => 
              dispatch({ type: 'FETCH_COUNTRIES_SUCCESS', payload: a.data.countries }))
              .catch(error => console.log('error', error))

          }




