import React from "react";


const BaseUri = "https://www.googleapis.com/youtube/v3"

const PlaylistUri = 'playlists'

const PlaylistItemUri = 'playlistItems'

const getSearchParams = data => {
  const searchParams = Object.keys(data)
    .map(key => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
    })
    .join("&");

  // create new URLSearchParams from the formated searchParams
  const params = new URLSearchParams(searchParams);
  return params;
};


  class FETCH extends React.Component {
    constructor() {
      super();
      this.baseuri = BaseUri;
      this.options = {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*"
        }
      };
    }
  
    static request(url, init = {}) {
      // overwrite the init options method
      // from init object specific to the request type
      const param = Object.assign({}, this.options, init);
  
      return fetch(`${BaseUri}/${url}`, param)
        .then(response => {
          return response.json();
        })
        .then(response => {
          return response;
        })
        .catch(error => {
         console.log(error)
          return error
        });
    }
  
    static getPlayLists(params) {
      const url =   getSearchParams(params);
      const options = {
            method: "GET",
            
          };
      const constructedURl = `${PlaylistUri}?${url}`
      return this.request(constructedURl, options);
    }
  
  
    static getPlayListsItems(params) {
        const url = getSearchParams(params); 
        const options = {
          method: "GET"
        };
        const constructedURl = `${PlaylistItemUri}?${url}`
        return this.request(constructedURl, options);
      }
    
    
    //   static getFeeDetails(feeId) {
    //   let auth = localStorage.getItem("uniabuja-login-token");
    //   auth = auth.slice(1, auth.length - 1);
    //   const options = {
    //     method: "GET",
    //     headers: {
    //       Authorization: `Bearer ${auth}`
    //     }
    //   };
    //   return this.request(`${query.FeeDetails}/${feeId}`, options);
    // }
  
    
  }
  
  export default FETCH;