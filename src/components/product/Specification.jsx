import React, { Component, PropTypes } from 'react'
import img_android from '../../../public/images/android-n.jpg'

class Specification extends Component {
  render() {
    return (
      <div className="specification">
        <p className="title">Specification</p>
        <div className="content">
          <div className="img-container">
            <img src={img_android} alt="android-n" />
          </div>
          <ul>              
            <li>工作温度：0° 至 35°C（32° 至 95°F</li>
            <li>非工作温度：-20°C 至 45°C（-4°F 至 113°F</li>
            <li>相对湿度：非凝结状态下 5% 至 95%</li>
            <li>工作高度：经测试高达 3,000 米 (10,000 英尺)</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Specification