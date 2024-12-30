import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { getAllSpecialty } from '../../../services/userService';
import HomeHeader from '../HomeHeader';
import HomeFooter from '../HomeFooter';
import SearchBar from '../../../components/Searchbar'; // Import the new SearchBar component
import './ListSpecialty.scss';

const useStyles = makeStyles((theme) => ({
    root2: {
        width: '100%',
        minHeight: '100vh',
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

const ListSpecialty = () => {
    const classes = useStyles();
    const [dataSpecialty, setDataSpecialty] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');//search
    const [filteredSpecialty, setFilteredSpecialty] = useState([]);//search

    const { language } = useSelector((state) => ({
        language: state.app.language,
    }));

    const history = useHistory();

    useEffect(() => {
        const fetchAllSpecialty = async () => {
            let res = await getAllSpecialty({});
            if (res && res.errCode === 0) {
                setDataSpecialty(res.data || []);
                setFilteredSpecialty(res.data || []);
            }
        };
        fetchAllSpecialty();
    }, []);

    const handleSearchChange = (value) => { //search
        setSearchTerm(value.toLowerCase());
        const filteredData = dataSpecialty.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredSpecialty(filteredData);
    };

    const handleViewDetailSpecialty = (item) => {
        history.push(`/detail-specialty/${item.id}`);
    };

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
                        <p>{language === 'en' ? 'Specialty' : 'Khám chuyên khoa'}</p>
                    </div>
                </div>
                <div className="specialty__title">
                    <h2>{language === 'en' ? 'List of specialties' : 'Danh sách các chuyên khoa'}</h2>
                    <SearchBar
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}
                        placeholder={language === 'en' ? 'Search specialties...' : 'Tìm kiếm chuyên khoa...'}
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
                        {filteredSpecialty.length > 0 ? (
                            filteredSpecialty.map((item, index) => (
                                <div key={index} onClick={() => handleViewDetailSpecialty(item)}>
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
                            <Typography style={{ padding: '20px', textAlign: 'center' }}>
                                {language === 'en' ? 'No specialties found' : 'Không tìm thấy chuyên khoa nào'}
                            </Typography>
                        )}
                    </MenuList>
                </Paper>
            </div>
            <HomeFooter />
        </>
    );
};

export default ListSpecialty;
