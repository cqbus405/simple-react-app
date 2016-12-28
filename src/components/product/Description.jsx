import React, { Component, PropTypes } from 'react'

class Description extends Component {
  render() {
    return (
      <div className="product-responsive">
        <div className="product-responsive-block">
          <div>
            <p className="product-responsive-title">Description</p>
            <p className="product-responsive-content">Pixel brings you the Google Assistant. Ask it questions. Tell it to do things. 
            It's your own personal Google, always ready to help. Just start with “Ok Google”.<br /><br />
            With unlimited¹ online storage for your photos and videos, you’ll never have to delete an old memory to make room for a new one. 
            And Pixel keeps everything safe and secure: photos, videos, music, contacts, texts, and more.<br /><br />
            With a best-ever 89 DxOMark Mobile score, Pixel's camera lets you take brilliant photos in low light, 
            bright light or any light.⁴ Every moment, every memory, captured in bright, beautiful detail.<br /><br />
            Duo brings you face-to-face with the people who matter most — across Android and iPhone — so you’re always in touch.² 
            With the new Knock Knock feature, you can even see the caller before you pick up.<br /><br />
            Fast and easy to use, Pixel provides a clean, bloat-free experience with no unwanted apps. And, for a quick charge, 
            the USB-C charger gives you up to 7 hours of battery life in just 15 minutes.³
            </p>
          </div>
          <div>
            <p className="product-responsive-title">Video Url</p>
            <p className="product-responsive-content">https://videos.localhost.com/1</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Description