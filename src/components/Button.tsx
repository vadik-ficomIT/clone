import './Vvod.css';
import bluetoothSerial from 'cordova-plugin-bluetooth-serial';
// import './declare_modules.d.ts'

interface ButtonProps { }



// const macAddress_or_uuid:string = "20:16:08:22:34:42"; //HC-06

function bluetoothSwitched(){ // включен 
  bluetoothSerial.setDiscoverable(0); //делает видимым
  // bluetoothSerial.connect(macAddress_or_uuid, success, failure); // подключается к определённому устройству
  bluetoothSerial.list(function(devices:Array<object>) {
    devices.forEach(function(device:any) {
        alert(device.id+" "+device.name);
    })
  }, failure); //выводит список сопряженных устройств 

  bluetoothSerial.setDeviceDiscoveredListener(function(device:any) {
    alert('Found: '+device.id+" "+device.name);
  }); // уведомляет что  обнаруженно устройство * 

  bluetoothSerial.discoverUnpaired(function(devices:Array<object>) {
    devices.forEach(function(device:any) {
        alert(device.id+" "+device.name);
    })
  }, failure); // ищет устройства и перебирает их *

  bluetoothSerial.showBluetoothSettings(); // показывает настройки 


}

function success(){
  alert("успех");
}

function failure(){
  alert("не успех, конечно но хоть что то");
}

function bluetoothDisabled(){ // не включен
  bluetoothSerial.enable(bluetoothSwitched, failure); //предлагает включить
}

function buttonAdd (){ //кнопка
  bluetoothSerial.isEnabled(bluetoothSwitched, bluetoothDisabled); //включен ли ?
}

const Button: React.FC<ButtonProps> = () => {
  return (
    <div className="vvod">
      {/* <input type="text" name="vod" id="vodInput" />    */}
      <button className="buttonOne" id="buttonOneAdd" onClick={buttonAdd}>
        нажать
      </button>
    </div>
  );
};



export default Button;