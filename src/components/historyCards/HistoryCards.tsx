import React, { FC, useContext } from 'react'
import { Like } from '../../assets';
import AppContext from '../../context/AppContext';
import { HistoryInfo } from '../../styled';

const HistoryCards: FC = () => {

    const { state: { sports } } = useContext(AppContext)

    return (
        <HistoryInfo>
            <div className='imageSport'>
                <img src={sports[0].strSportThumb} className='imageSport' alt="sport" />
            </div>
            <div>
                <img src={ Like } alt="" />
                {/* <img src="" alt="" srcset="" /> */}
            </div>
        </HistoryInfo>
    )
}

export default HistoryCards
