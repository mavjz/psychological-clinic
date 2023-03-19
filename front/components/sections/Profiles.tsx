import Profile from 'components/items/Profile'
import WrapperWidth from 'components/wrappers/Wrapperwidth'
import React from 'react'
import { ProfileType } from 'types/items/profile'

const Profiles = ({items}: ProfilesType) => {
    return (
        <WrapperWidth>
            <div className='counters'>
                {items.map((item, index) =>
                    <Profile
                        key={index}
                        image={item?.image}
                        name={item?.name}
                        text={item?.text}
                    />
                )}
            </div>
        </WrapperWidth>
    )
}

export default Profiles

type ProfilesType = {
    items: Array<ProfileType>,
}