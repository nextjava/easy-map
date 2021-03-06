import EasyMap from '../src';

/**
 * Google map
 */
const easyMapGoogle = new EasyMap({
  mapType: 'google',
  key: 'AIzaSyBL4Ugej1KvkfIrU2qOhoAkE85rKEcTApo',
  element: document.getElementById('google-map'),
  source: {
    lat: 37.5666103,
    lng: 126.9783882,
    marker: { icon: '//assets-cdn.github.com/images/modules/contact/heartocat.png', width: 48, height: 48, verticalAlign: 'top' },
    infoWindow: { content: '<div class="info-window">Source Marker</div>', maxWidth: 50 },
  },
  coords: [{
    lat: 37.5658528,
    lng: 126.9779845,
    name: 'Marker 1',
    marker: { icon: '//assets-cdn.github.com/images/modules/contact/heartocat.png', width: 36, height: 36, verticalAlign: 'middle' },
    infoWindow: { content: '<div class="info-window">Marker 1<br>distance is {{distance m}}</div>', maxWidth: 50 },
  }, {
    lat: 37.5658528,
    lng: 126.9779845,
    name: 'Marker 2',
    marker: { icon: '//assets-cdn.github.com/images/modules/contact/heartocat.png', width: 36, height: 36, verticalAlign: 'middle' },
    infoWindow: { content: '<div class="info-window">Marker 2<br>distance is {{distance km}}</div>', maxWidth: 50 },
  }, {
    lat: 37.5658049,
    lng: 126.9751461,
    name: 'Marker 3',
    marker: { icon: '//assets-cdn.github.com/images/modules/contact/heartocat.png', width: 36, height: 36, verticalAlign: 'middle' },
    infoWindow: { content: '<div class="info-window">Marker 3<br>distance is {{distance m}}</div>', maxWidth: 50 },
  }, {
    lat: 37.5658528,
    lng: 126.9779845,
    name: 'Marker 4',
    marker: { icon: '//assets-cdn.github.com/images/modules/contact/heartocat.png', width: 36, height: 36, verticalAlign: 'middle' },
    infoWindow: { content: '<div class="info-window">Marker 4<br>distance is {{distance yd}}</div>', maxWidth: 50 },
  }, {
    lat: 37.5658528,
    lng: 126.9779845,
    name: 'Marker 5',
    marker: { icon: '//assets-cdn.github.com/images/modules/contact/heartocat.png', width: 36, height: 36, verticalAlign: 'middle' },
    infoWindow: { content: '<div class="info-window">Marker 5<br>distance is {{distance m}}</div>', maxWidth: 50 },
  }],
  closeInfoWindowAuto: true,
  clickedNestedMarker: (cb, ids, strs) => {
    const userInput = prompt(`You clicked nested markers! Select on.\n${strs}`, ''); // eslint-disable-line no-alert
    cb(+userInput);
  },
});

easyMapGoogle.start();

/**
 * Naver map
 */

const easyMapNaver = new EasyMap({
  mapType: 'naver',
  key: 'ZINRRHtKwGpXNxXjcqwv',
  element: document.getElementById('naver-map'),
  source: {
    lat: 37.5666103,
    lng: 126.9783882,
    marker: { icon: '//assets-cdn.github.com/images/modules/contact/heartocat.png', width: 48, height: 48, verticalAlign: 'top' },
    infoWindow: {
      content: '<div class="info-window">Source Marker</div>',
      maxWidth: 50,
      backgroundColor: 'coral',
      borderColor: 'purple',
      borderWidth: 5,
      anchorColor: 'coral',
    },
  },
  coords: [{
    lat: 37.5658528,
    lng: 126.9779845,
    name: 'Marker 1',
    marker: { icon: '//assets-cdn.github.com/images/modules/contact/heartocat.png', width: 36, height: 36, verticalAlign: 'middle' },
    infoWindow: { content: '<div class="info-window">Marker 1<br>distance is {{distance m}}</div>', maxWidth: 50 },
  }, {
    lat: 37.5658528,
    lng: 126.9779845,
    name: 'Marker 2',
    marker: { icon: '//assets-cdn.github.com/images/modules/contact/heartocat.png', width: 36, height: 36, verticalAlign: 'middle' },
    infoWindow: { content: '<div class="info-window">Marker 2<br>distance is {{distance km}}</div>', maxWidth: 50 },
  }, {
    lat: 37.5658049,
    lng: 126.9751461,
    name: 'Marker 3',
    marker: { icon: '//assets-cdn.github.com/images/modules/contact/heartocat.png', width: 36, height: 36, verticalAlign: 'middle' },
    infoWindow: {
      content: '<div class="info-window">Marker 3<br>distance is {{distance m}}</div>',
      maxWidth: 50,
      backgroundColor: '#00A3EB',
      anchorColor: '#00A3EB',
    },
  }, {
    lat: 37.5658528,
    lng: 126.9779845,
    name: 'Marker 4',
    marker: { icon: '//assets-cdn.github.com/images/modules/contact/heartocat.png', width: 36, height: 36, verticalAlign: 'middle' },
    infoWindow: { content: '<div class="info-window">Marker 4<br>distance is {{distance yd}}</div>', maxWidth: 50 },
  }, {
    lat: 37.5658528,
    lng: 126.9779845,
    name: 'Marker 5',
    marker: { icon: '//assets-cdn.github.com/images/modules/contact/heartocat.png', width: 36, height: 36, verticalAlign: 'middle' },
    infoWindow: { content: '<div class="info-window">Marker 5<br>distance is {{distance m}}</div>', maxWidth: 50 },
  }],
  closeInfoWindowAuto: true,
  clickedNestedMarker: (cb, ids, strs) => {
    const userInput = prompt(`You clicked nested markers! Select on.\n${strs}`, ''); // eslint-disable-line no-alert
    cb(+userInput);
  },
});

easyMapNaver.start();
