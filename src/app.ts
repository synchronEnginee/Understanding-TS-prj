// 必ず取得できるもの(null)でないとしたいものに!を付ける
const form = document.querySelector('form')!
// as HTMLInputElementをつけることでaddressInputのvalueというプロパティが存在することを指定できる
const addressInput = document.getElementById('address')! as HTMLInputElement

function searchAddressHandler(event: Event) {
    event.preventDefault()
    const enteredAddress = addressInput.value

    //Google API call to
    
}

form.addEventListener('submit', searchAddressHandler)