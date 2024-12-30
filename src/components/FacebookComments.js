import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const FacebookComments = ({ doctorId }) => {
    useEffect(() => {
        // Load Facebook SDK script if not already loaded
        if (!document.getElementById('facebook-jssdk')) {
            const script = document.createElement('script');
            script.id = 'facebook-jssdk';
            script.src = 'https://connect.facebook.net/en_US/sdk.js';
            script.async = true;
            script.onload = () => {
                window.FB.init({
                    appId: '3520966881534142',
                    xfbml: true,
                    version: 'v20.0',
                });
                window.FB.XFBML.parse();
            };
            document.body.appendChild(script);
        } else {
            window.FB.XFBML.parse();
        }
    }, []);

    // Public URL for the comments plugin
    const commentUrl = `http://localhost:3000/detail-doctor/${doctorId}`;

    return (
        <div>
            <div className="fb-comments" data-href={commentUrl} data-numposts="5" data-width="100%"></div>
        </div>
    );
};

FacebookComments.propTypes = {
    doctorId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default FacebookComments;
