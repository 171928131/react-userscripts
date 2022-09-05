import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { copyUrl, noRepeat } from './utils';
import './App.css';

function App() {
  useEffect(() => {
    const a1 = document.getElementsByClassName('dynamic');
    Array.prototype.map.call(a1, function (fatherItem) {
      const a2 = fatherItem.getElementsByClassName('label label-id');
      const a3 = Array.prototype.map.call(a2, function (el) {
        return el.innerText;
      });
      const bugAry = noRepeat(a3);
      const dynamicDate = fatherItem.getElementsByClassName('dynamic-date');
      const timeline = fatherItem.getElementsByClassName('timeline');
      const oldButton = document.createElement('div');
      const Button = <div>123</div>;
      dynamicDate[0].style.height = '85px';
      timeline[0].style.marginBottom = '47px';
      ReactDOM.render(Button, oldButton);
      dynamicDate[0].appendChild(oldButton);
    });
  }, []);

  return <></>;
}

export default App;
