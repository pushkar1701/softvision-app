import React from 'react';

const Header = (props) => {
    return (
        <div className={'list-header'}>
            {props.name}
        </div>
    );
};

export default Header;