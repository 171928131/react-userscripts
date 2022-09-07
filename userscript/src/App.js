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
      const Button =
        bugAry.length === 0 ? (
          <button
            style={{
              textAlign: 'center',
              marginTop: 5,
            }}
          >
            暂无bug
          </button>
        ) : (
          <button
            style={{
              marginTop: 5,
              textAlign: 'center',
            }}
            onClick={() => copyUrl(bugAry.join(','))}
          >
            当天修改的bug
            <br />({bugAry.length})
          </button>
        );
      dynamicDate[0].style.height = '94px';
      timeline[0].style.marginBottom = '56px';
      ReactDOM.render(Button, oldButton);
      dynamicDate[0].appendChild(oldButton);
    });
  }, []);

  return <></>;
}

export default App;
