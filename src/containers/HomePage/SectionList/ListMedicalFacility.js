import React, { useState, useEffect } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { getAllClinic } from '../../../services/userService';
import HomeHeader from '../HomeHeader';
import HomeFooter from '../HomeFooter';
import SearchBar from '../../../components/Searchbar'; // Importing the SearchBar component
import './ListMedicalFacility.scss';

const useStyles = makeStyles((theme) => ({
    root2: {
        width: '100wh',
        height: '100vh',
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
}));

const ListMedicalFacility = () => {
    const classes = useStyles();
    const [dataClinics, setDataClinics] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term

    const { language } = useSelector((state) => ({
        language: state.app.language,
    }));

    useEffect(() => {
        const fetchDataAllClinic = async () => {
            let res = await getAllClinic({});
            if (res && res.data) {
                setDataClinics(res.data);
            }
        };
        fetchDataAllClinic();
    }, []);

    let history = useHistory();

    const handleViewDetailClinic = (clinic) => {
        history.push(`/detail-clinic/${clinic.id}`);
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    const filteredClinics = dataClinics.filter((clinic) =>
        clinic.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

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
                        <p>{language === 'en' ? 'Medical facility' : 'Cơ sở y tế'}</p>
                    </div>
                </div>
                <div className="specialty__title">
                    <h2>{language === 'en' ? 'Outstanding medical facilities' : 'Cơ sở y tế nổi bật'}</h2>
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}
                        placeholder={language === 'en' ? 'Search medical facilities...' : 'Tìm kiếm cơ sở y tế...'}
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
                        {filteredClinics && filteredClinics.length > 0 ? (
                            filteredClinics.map((item, index) => (
                                <div key={index} onClick={() => handleViewDetailClinic(item)}>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <div
                                                className={classes.bgImageListSpecialty}
                                                style={{
                                                    backgroundImage: `url(${item.image})`,
                                                }}
                                            ></div>
                                        </ListItemIcon>
                                        <Typography variant="inherit" className={classes.listSpecialtyName}>
                                            {item.name}
                                        </Typography>
                                    </MenuItem>
                                    <Divider />
                                </div>
                            ))
                        ) : (
                            <Typography
                                variant="body1"
                                style={{
                                    textAlign: 'center',
                                    marginTop: '20px',
                                }}
                            >
                                {language === 'en' ? 'No medical facilities found' : 'Không tìm thấy cơ sở y tế nào'}
                            </Typography>
                        )}
                    </MenuList>
                </Paper>
            </div>
            <HomeFooter />
        </>
    );
};

export default ListMedicalFacility;
