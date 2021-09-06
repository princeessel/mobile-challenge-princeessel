import { Alert } from 'react-native';
import { ApiConstants } from '.';
// MediaKeySystemAccess

const showNoNetworkAlert = () => {
  if (!global.alertPresent) {
    global.alertPresent = true;
    Alert.alert(
      '',
      'Please check your internet connection.',
      [
        {
          text: 'OK',
          onPress: () => {
            global.alertPresent = false;
          },
        },
      ],
      { cancelable: false },
    );
  }
};

async function Api(headers, method, url, body) {

  if (!global.isConnected || !global.isInternetReachable) {
    console.log(
      '\n======================No Internet connection=====================',
    );
    showNoNetworkAlert();
    return new Promise((resolve, reject) => {
      reject({ message: 'Please check your internet connection.' });
    });
  }

  const URL = `${url}`;

  // console.log(
  //   '\n===============  REQUEST START  ========================' +
  //   '\n\n' +
  //   'Header ==>> ' +
  //   JSON.stringify(headers) +
  //   '\n' +
  //   'METHOD ==>>  ' +
  //   method +
  //   '\n' +
  //   'Api ==>>  ' +
  //   URL +
  //   '\n' +
  //   'body ==>>  ' +
  //   body +
  //   '\n\n' +
  //   '===============  WAITING FOR RESPONSE...  ================',

  // );

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 30000);

  return new Promise((resolve, reject) => {
    fetch(URL, {
      headers: headers,
      method: method,
      body: body,
      signal: controller.signal
    })
      .then(async response => {
       const status = response.status;

        const data = await response.json();

        // console.log(
        //   '\n===============  RESPONSE START  ========================\n' +
        //   'URL ==>> ' + url +
        //   '\n\n' +
        //   'status ==>> ' +
        //   status +
        //   '\n' +
        //   'Response body ==>>  ' +
        //   JSON.stringify(data) +
        //   '\n\n' +
        //   '===============  RESPONSE END  ========================',
        // );
        clearTimeout(id);
        if (status == 200) { return resolve(data);
        } else {
          console.log('Request failed', response);
          alert("Something went wrong");
          return reject(response);
        }
      })
      .catch(function (error) {
        console.log('Request failed', error);
        clearTimeout(id);
        alert("Something went wrong");
        return reject(error);
      });
  });
}

export const getMeteoriteLandingsData = async () => {
  let url = `${ApiConstants.MeteoriteLandingsData}`;
  return await Api('', 'GET', url, '');
};
