import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';
import Divider from '@material-ui/core/Divider';
import HomeHeader from '../HomeHeader';
import HomeFooter from '../HomeFooter';
import SearchBar from '../../../components/Searchbar';
import './ListOutStandingDoctor.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'sticky',
        top: '0px',
        zIndex: '100',
    },
    root2: {
        width: '100wh',
        height: '100vh',
    },
    menu: {
        backgroundColor: '#ffffff !important',
    },
    bgImageListSpecialty: {
        width: '100px',
        height: '67px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    listSpecialtyName: {
        marginLeft: '10px',
        fontSize: '14px',
        color: '#333',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const ListOutStandingDoctor = () => {
    const classes = useStyles();
    const [arrDoctors, setArrDoctors] = useState([]);
    const allDoctors = useSelector((state) => state.admin.allDoctors);
    const language = useSelector((state) => state.app.language);
    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchAllDoctors());
    }, []);
    useEffect(() => {
        setArrDoctors(allDoctors);
    }, [allDoctors]);

    let history = useHistory();

    const handleViewDetailDoctor = (doctor) => {
        history.push(`/detail-doctor/${doctor.id}`);
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    const filteredDoctors = arrDoctors.filter((doctor) => {
        const nameVi = `${doctor.positionData.valueVi}, ${doctor.lastName} ${doctor.firstName}`;
        const nameEn = `${doctor.positionData.valueEn}, ${doctor.firstName} ${doctor.lastName}`;
        const doctorName = language === LANGUAGES.VI ? nameVi : nameEn;
        return doctorName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <HomeHeader />
            <div className="wrap">
                <div className="header_left">
                    <div className="header_path">
                        <Link to="/home">{language === 'en' ? 'Home' : 'Trang chủ'}</Link>
                    </div>
                    <div className="vertical">
                        <p> | </p>
                    </div>
                    <div className="header_text">
                        <p>{language === 'en' ? 'Doctors' : 'Bác sĩ'}</p>
                    </div>
                </div>
                <div className="specialty__title">
                    <h2>{language === 'en' ? 'List of doctors' : 'Danh sách các bác sĩ'}</h2>
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}
                        placeholder={language === LANGUAGES.EN ? 'Search doctors...' : 'Tìm kiếm bác sĩ...'}
                    />
                </div>
                <Paper
                    className={classes.root2}
                    style={{
                        marginTop: '20px',
                        boxShadow: 'none',
                    }}
                >
                    <MenuList id="long-menu">
                        {filteredDoctors && filteredDoctors.length > 0 ? (
                            filteredDoctors.map((item, index) => {
                                let imageBase64 = '';
                                if (item.image) {
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                }
                                let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
                                let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
                                return (
                                    <div key={index} onClick={() => handleViewDetailDoctor(item)}>
                                        <MenuItem>
                                            <ListItemIcon>
                                                <div
                                                    className={classes.bgImageListSpecialty}
                                                    style={{
                                                        backgroundImage: `url(${imageBase64})`,
                                                    }}
                                                ></div>
                                            </ListItemIcon>
                                            <div className={classes.content}>
                                                <Typography variant="inherit" className={classes.listSpecialtyName}>
                                                    {language === LANGUAGES.VI ? nameVi : nameEn}
                                                </Typography>
                                                <Typography variant="inherit" className={classes.listSpecialtyName}>
                                                    {item.Doctor_Infor &&
                                                    item.Doctor_Infor.specialtyData &&
                                                    item.Doctor_Infor.specialtyData.name
                                                        ? item.Doctor_Infor.specialtyData.name
                                                        : ''}
                                                </Typography>
                                            </div>
                                        </MenuItem>
                                        <Divider />
                                    </div>
                                );
                            })
                        ) : (
                            <Typography
                                style={{
                                    padding: '20px',
                                    textAlign: 'center',
                                }}
                            >
                                {language === LANGUAGES.EN ? 'No doctors found' : 'Không tìm thấy bác sĩ nào'}
                            </Typography>
                        )}
                    </MenuList>
                </Paper>
            </div>
            <HomeFooter />
        </>
    );
};

export default ListOutStandingDoctor;
