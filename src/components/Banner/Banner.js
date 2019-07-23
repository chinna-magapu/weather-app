import React from 'react';

const banner = (props) => {
    return (
            <div class="hero" data-bg-image={require("../../assets/images/banner.png")}>
                {props.children}
		    </div>
    );
}

export default banner;