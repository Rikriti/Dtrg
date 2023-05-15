import axios from 'axios';

export const submit = async  => {
  try {
    const xmls = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
         xmlns:web="https://www.w3schools.com/xml/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:CelsiusToFahrenheit>
            <web:Celsius>${Number(degrees)}</web:Celsius>
          </web:CelsiusToFahrenheit>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

    const response = axios.post(
      'http://202.51.74.38:10002/DTRGService.svc?wsdl',
      xmls,
      {
        headers: {
          'Content-Type': 'text/xml',
        },
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};