import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { copyUrl, noRepeat } from './utils';
import './App.css';

function App() {

  const [flag, setFlag] = useState(false);


  const setTheme = () => {
    document.body.style.backgroundImage = 'url(https://s11.ax1x.com/2024/02/02/pFQk4H0.jpg)';
    document.body.style.backgroundSize = '326px';
    document.body.style.backgroundRepeat = 'repeat-y';
    document.body.style.backgroundPosition = 'right';
    document.body.style.backgroundColor = '#FEF7EF';
    const mainhead = document.getElementById('mainHeader');
    mainhead.style.backgroundColor = '#B93F44';
    mainhead.style.background = '#B93F44';
  }

  const setBugCopy = () => {
    console.log('setBugCopy: ');
    const a1 = document.getElementsByClassName('dynamic');
    Array.prototype.map.call(a1, function (fatherItem) {
      const a2 = fatherItem.getElementsByClassName('label label-id');
      const a3 = Array.prototype.map.call(a2, function (el) {
        return el.innerText;
      });
      const bugAry = noRepeat(a3);
      const dynamicDate = fatherItem.getElementsByClassName('dynamic-date');
      if (dynamicDate[0] && dynamicDate[0].childNodes.length <= 7) {
        const timeline = fatherItem.getElementsByClassName('timeline');
        const oldButton = document.createElement('div');
        oldButton.id = 'copyButton';
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
        dynamicDate[0].style.height = '105px';
        timeline[0].style.marginBottom = '56px';
        ReactDOM.render(Button, oldButton);
        dynamicDate[0].appendChild(oldButton);
      }
    });
  }

  const setButton = (classname, iconUrl) => {
    const a1 = document.getElementsByClassName(classname);
    if (a1 && a1[0]) {
      const icon = <>
        {
          Array.from({ length: 10 }).map((e, index) => <img
            className='scyIcon'
            src={require(`./${iconUrl}.png`)}
            alt=''
            style={{
              transform: `rotate(${Math.random() * 100 - 50}deg)`,
              animationDuration: `${Math.random() * 1 + 1}s`,
              animationDelay: `${Math.random() * 4 - 1}s`,
            }}
          />)
        }
      </>
      ReactDOM.render(icon, a1[0]);
    }
  }

  useEffect(() => {
    setTheme();
    setBugCopy();
    setFlag(localStorage.getItem('shade'))
    // 解决
    setButton('icon-bug-resolve', 'icon8');
    // 指派
    setButton('icon-bug-assignTo', 'icon4');
    // 激活
    setButton('icon-bug-activate', 'cry');
    // 关闭
    setButton('icon-bug-close', 'icon10');
    // 确认
    setButton('icon-bug-confirmBug', 'icon3');
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className='scyswitch'>
        <input type="checkbox" className='scyinput' id="switch" checked={flag === '1'} />
        <label
          for="switch"
          className='scylabel'
          onClick={() => {
            const oldflag = localStorage.getItem('shade');
            const newFlag = oldflag === '1' ? '0' : '1';
            setFlag(newFlag)
            localStorage.setItem('shade', newFlag)
          }}
        >Toggle</label>
      </div>
      <div className='shadeWrapper' style={{ display: flag === '1' ? 'initial' : 'none' }}>
        {Array.from({ length: 20 }).map((e, index) => (
          <div
            className='animation'
            key={`anim${index + 1}`}
            style={{
              // top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100 + 0}vw`,
              animationDuration: `${Math.random() * 5 + 15}s`,
              animationDelay: `${Math.random() * 20 + 0}s`,
            }}
          >
            <img
              src={require(`./icon${[index % 10 + 1]}.png`)}
              className='scybox'
              alt=''
            />
          </div>
        ))}
      </div>
    </>
    ,
    document.body,
  );
}

export default App;
