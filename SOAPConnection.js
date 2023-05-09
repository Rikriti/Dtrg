import axios from 'axios';

const SOAPConnection = async(username, password, domain) => {
  try {
    const username = 'admin';
    const password = 'super@dmin@123';
    const domain = 'admin';
    const xmls =
      `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
          <DTRGWebRequest xmlns="http://schemas.datacontract.org/2004/07/DTRG.Common" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
              <authenticationCode i:nil="true"/>
              <oParams xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                  <a:KeyValueOfstringDTRGParameterHVV7_SJlZ>
                      <a:Key>key</a:Key>
                      <a:Value>
                          <DTRGObject i:nil="true"/>
                          <buffer i:nil="true"/>
                          <bufferSize i:nil="true"/>
                          <dateValue i:nil="true"/>
                          <decimalValue i:nil="true"/>
                          <doubleValue i:nil="true"/>
                          <floatValue i:nil="true"/>
                          <integerValue i:nil="true"/>
                          <listDouble i:nil="true"/>
                          <listIntegers i:nil="true"/>
                          <listStr i:nil="true"/>
                          <longValue i:nil="true"/>
                          <stringValue>Narcotic</stringValue>
                      </a:Value>
                  </a:KeyValueOfstringDTRGParameterHVV7_SJlZ>
              </oParams>
              <rProvider>CommonDataProvider</rProvider>
              <sConnectionID i:nil="true"/>
              <sMethod>GetParameterValue</sMethod>
              <staffID>0</staffID>
          </DTRGWebRequest>
      </soap:Body>
  </soap:Envelope>
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
    console.log(error);
    throw error;
  }
};

export default SOAPConnection;
