import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailDoctor.scss';
import { getDetailInforDoctor } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import DoctorSchedule from './DoctorSchedule';
import DoctorExtraInfor from './DoctorExtraInfor';
// import StarRating from '../../../components/StarRating';
class DetailDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: {},
            currentDoctorId: -1,
        };
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.setState({
                currentDoctorId: id,
            });
            let res = await getDetailInforDoctor(id);
            if (res && res.errCode === 0) {
                this.setState({
                    detailDoctor: res.data,
                });
            }
            //   imageBase64 = new Buffer(user.image, "base64").toString("binary");
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        let { detailDoctor } = this.state;
        let { language } = this.props;
        let nameVi = '',
            nameEn = '';
        if (detailDoctor && detailDoctor.positionData) {
            nameVi = `${detailDoctor.positionData.valueVi}, ${detailDoctor.lastName} ${detailDoctor.firstName}`;
            nameEn = `${detailDoctor.positionData.valueEn}, ${detailDoctor.firstName} ${detailDoctor.lastName}`;
        }

        return (
            <>
                <HomeHeader isShowBanner={false} />
                <div className="doctor-detail-container">
                    <div className="intro-doctor">
                        <div
                            className="content-left "
                            style={{
                                backgroundImage: `url(${detailDoctor && detailDoctor.image ? detailDoctor.image : ''})`,
                                backgroundSize: 'contain',
                            }}
                        ></div>
                        <div className="content-right">
                            {/* <StarRating doctorId={this.state.currentDoctorId} /> */}

                            <div className="up">{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                            <div className="down">
                                {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.description && (
                                    <span>{detailDoctor.Markdown.description}</span>
                                )}
                            </div>
                            <iframe
                                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&width=450&layout&action&size&share=true&height=35&appId"
                                width="450"
                                height="35"
                                style={{ border: 'none', overflow: 'hidden', marginTop: '10px' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                    </div>
                    <div className="schedule-doctor">
                        <div className="content-left">
                            <DoctorSchedule doctorIdFromParent={this.state.currentDoctorId} />
                        </div>
                        <div className="content-right">
                            <DoctorExtraInfor doctorIdFromParent={this.state.currentDoctorId} />
                        </div>
                    </div>
                    <div className="detail-infor-doctor">
                        {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.contentHTML && (
                            <div //neu khong co thuoc tinh nay se in ra noi dung HTML
                                dangerouslySetInnerHTML={{
                                    __html: detailDoctor.Markdown.contentHTML,
                                }}
                            ></div>
                        )}
                    </div>
                    {/* <div className="comment-doctor" style={{ width: '1337px', margin: 'auto' }}>
                        
                    </div> */}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { language: state.app.language };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
