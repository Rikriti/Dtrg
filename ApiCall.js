import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';


const ApiCall = () => {
    Alert.alert("Hello")
  const [data, setData] = useState([]);

  console.log(response);

  useEffect(() => {
  const response=  fetch('http://202.51.74.38:10003/api/Values?authCode=4486b9ea-cc90-471f-8dee-7dc0925fe2ba&staffID=1',{
    method: 'GET',
    headers: {
     Key:'DTRGWebApiKey',
     Values:'USER:PASSWORD'
    },
  })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))

      return response
    
  }, []);

};

export default ApiCall