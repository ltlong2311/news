import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <section className="features" id="features">
                <div className="container">
                <div className="section-heading text-center">
                    <h2>Unlimited Features, Unlimited Fun</h2>
                    <p className="text-muted">Check out what you can do with this app theme!</p>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-lg-4 my-auto">
                    <div className="device-container">
                        <div className="device-mockup iphone6_plus portrait white">
                        <div className="device">
                            <div className="screen">
                            {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                            <img src="https://wiki.matbao.net/wp-content/uploads/2020/01/rss-la-gi-cach-su-dung-the-nao-04.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="button">
                            {/* You can hook the "home button" to some JavaScript events or just remove it */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-8 my-auto">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="feature-item">
                            <i className="icon-screen-smartphone text-primary" />
                            <h3>Device Mockups</h3>
                            <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-item">
                            <i className="icon-camera text-primary" />
                            <h3>Flexible Use</h3>
                            <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="feature-item">
                            <i className="icon-present text-primary" />
                            <h3>Free to Use</h3>
                            <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-item">
                            <i className="icon-lock-open text-primary" />
                            <h3>Open Source</h3>
                            <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
