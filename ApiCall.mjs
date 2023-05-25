import axios from "axios";
import { xml2json } from "xml-js";

axios.defaults.headers['DTRGWebApiKey'] = 'USER:PASSWORD';

const authCode = "";//get from saved cache
const staffId = "";//get from saved cache
axios.get("http://202.51.74.38:10003/api/values?authCode=4486b9ea-cc90-471f-8dee-7dc0925fe2ba&staffId=1",{
    "Content-Type": "application/xml; charset=utf-8"
})
.then((res) =>{
    const value =res.data.ResultValue.stringValue;
    const data = xml2json(value , { compact : true , spaces : 4});
    console.log(data);
    // return data;

    //save in cache

})

// export default data;