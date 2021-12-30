import axios from 'axios';
import {YOUR_API_KEY} from './api_key';
// 必ず取得できるもの(null)でないとしたいものに!を付ける
const form = document.querySelector('form')!
// as HTMLInputElementをつけることでaddressInputのvalueというプロパティが存在することを指定できる
const addressInput = document.getElementById('address')! as HTMLInputElement

function searchAddressHandler(event: Event) {
    event.preventDefault()
    const enteredAddress = addressInput.value

    //Google API call to
    //<{results: {geometry: {location: {lat: number, lng: number}}}[]}>をつけることで、resoponseのresultsの型の自動補完が効くようになる
    axios.get<{results: {geometry: {location: {lat: number, lng: number}}}[]}>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress,
    )}&key=${YOUR_API_KEY}`,
    ).then(response => {
        const cordinates = response.data.results[0].geometry.location;
    }).catch(err => {
        alert(err.message)
        console.log(err)
    })
    
}

form.addEventListener('submit', searchAddressHandler)