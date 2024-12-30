import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeFooter.scss';
import { Link } from 'react-router-dom';
import dadangky from '../../assets/footer/dadangky.svg';
import dmca from '../../assets/footer/dmca.png';
import img_hello_doctor from '../../assets/footer/hello_doctor.png';
import img_bernard from '../../assets/footer/bernard.png';
import img_doctor_check from '../../assets/footer/doctor_check.png';
import { MdOutlineLocationOn } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { CgMail } from 'react-icons/cg';
import { CiBookmarkCheck } from 'react-icons/ci';
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

class HomeFooter extends Component {
    render() {
        return (
            <>
                <div className="home-footer">
                    <div className="wrap">
                        <div className="footer__content row">
                            <div className="col-lg-5 footer__content_about">
                                <h5>Công ty Cổ phần Công nghệ BookingCare</h5>
                                <ul>
                                    <li>
                                        <MdOutlineLocationOn />
                                    </li>
                                    <li>
                                        Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành
                                        phố Hà Nội, Việt Nam
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <CiBookmarkCheck />
                                    </li>
                                    <li>ĐKKD số. 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</li>
                                </ul>
                                <ul>
                                    <li>
                                        <FiPhone />
                                    </li>
                                    <li>Liên hệ: (028) 3915 2459</li>
                                </ul>
                                <ul>
                                    <li>
                                        <CgMail />
                                    </li>
                                    <li>support@bookingcare.vn (7h - 18h)</li>
                                </ul>

                                <h5 style={{ marginTop: '10px' }}>Văn phòng tại TP Hồ Chí Minh</h5>
                                <ul>
                                    <li>
                                        <MdOutlineLocationOn />
                                    </li>
                                    <li>Tòa nhà H3, 384 Hoàng Diệu, Phường 6, Quận 4, TP.HCM</li>
                                </ul>
                                <ul>
                                    <li>
                                        <img src={dadangky} alt="" />
                                    </li>
                                    <li>
                                        <img src={dmca} alt="" />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 ">
                                <div className="footer__content_widget">
                                    <h5>Hỗ trợ</h5>
                                    <ul>
                                        <li>
                                            <Link to="">Điều Khoản Sử Dụng</Link>
                                        </li>
                                        <li>
                                            <Link to="">Chính Sách Bảo Mật</Link>
                                        </li>
                                        <li>
                                            <Link to="">Chính sách giải quyết khiếu nại</Link>
                                        </li>
                                        <li>
                                            <Link to="">Quy chế hoạt động</Link>
                                        </li>
                                        <li>
                                            <Link to="">Câu hỏi thường gặp</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 ">
                                <div className="footer__content_partner">
                                    <h5>Đối tác bảo trợ nội dung</h5>
                                    <Link to="https://hellodoctors.vn/">
                                        <ul>
                                            <li>
                                                <img src={img_hello_doctor} alt="" />
                                            </li>
                                            <li>
                                                <h6>Hello Doctor</h6>
                                                <p>Bảo trợ chuyên mục nội dung "sức khỏe tinh thần"</p>
                                            </li>
                                        </ul>
                                    </Link>
                                    <Link to="https://bernard.vn/">
                                        <ul>
                                            <li>
                                                <img src={img_bernard} alt="" />
                                            </li>
                                            <li>
                                                <h6>Hệ thống y khoa chuyên sâu quốc tế Bernard</h6>
                                                <p>Bảo trợ chuyên mục nội dung "y khoa chuyên sâu"</p>
                                            </li>
                                        </ul>
                                    </Link>
                                    <Link to="https://www.doctorcheck.vn/">
                                        <ul>
                                            <li>
                                                <img src={img_doctor_check} alt="" />
                                            </li>
                                            <li>
                                                <h6>Doctor Check - Tầm Soát Bệnh Để Sống Thọ Hơn</h6>
                                                <p>Bảo trợ chuyên mục nội dung "sức khỏe tổng quát"</p>
                                            </li>
                                        </ul>
                                    </Link>
                                </div>
                                <div className="footer__social">
                                    <h6>Kết nối với chúng tôi: </h6>

                                    <div>
                                        <AiOutlineFacebook />
                                    </div>
                                    <div>
                                        <AiOutlineInstagram />
                                    </div>
                                    <div>
                                        <AiOutlineLinkedin />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__license">
                    <div className="container">
                        <div className="footer__license_content">
                            <h5>© Bản quyền thuộc về TDMU | Lê Tấn Phước.</h5>
                            <h5>D20CNTT02</h5>
                        </div>
                    </div>
                </div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
