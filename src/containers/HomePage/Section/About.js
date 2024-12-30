import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import channel1 from '../../../assets/images/media/vtv1.png';
import channel2 from '../../../assets/images/media/ictnews.png';
import channel3 from '../../../assets/images/media/165432-vtcnewslogosvg.png';
import channel4 from '../../../assets/images/media/cuc-cong-nghe-thong-tin-bo-y-te-2.png';
import channel5 from '../../../assets/images/media/vnexpress.png';
import channel6 from '../../../assets/images/media/infonet.png';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    <FormattedMessage id="homepage.media-talk-about-le-tan-phuoc" />
                </div>
                <div className="home__media_content row">
                    <div className="col-lg-6">
                        <div class=" ratio ratio-16x9">
                            <iframe
                                src="https://www.youtube.com/embed/PAHpKbRoVps?si=roKD6wjfS0p5Q2P4"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <Link to="" className="home__media_content_channel">
                                    <img src={channel1} alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-6">
                                <Link to="" className="home__media_content_channel">
                                    <img src={channel2} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <Link to="" className="home__media_content_channel">
                                    <img src={channel3} alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-6">
                                <Link to="" className="home__media_content_channel">
                                    <img src={channel4} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <Link to="" className="home__media_content_channel">
                                    <img src={channel5} alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-6">
                                <Link to="" className="home__media_content_channel">
                                    <img src={channel6} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <Link to="" className="home__media_content_channel">
                                    <img src={channel2} alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-6">
                                <Link to="" className="home__media_content_channel">
                                    <img src={channel4} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
