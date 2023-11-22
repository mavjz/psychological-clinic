import Profile from 'components/items/Profile';
import React from 'react';
import { ProfilesType } from './models';
import WrapperWidth from 'components/wrappers/WrapperWidth';

const Profiles = ({ items }: ProfilesType) => {
    return (
        <WrapperWidth>
            <div className="profiles">
                {items.map((item, index) => (
                    <Profile key={index} image={item?.image} name={item?.name} text={item?.text} />
                ))}
            </div>
        </WrapperWidth>
    );
};

export default Profiles;
