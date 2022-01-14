import React, { FC, useContext, useEffect, useState } from 'react'
import { Like, Dislike } from '../../assets';
import AppContext from '../../context/AppContext';
import { HistoryInfo } from '../../styled';

interface propsCard {
    isLike: boolean,
    idSport: string,
}

const HistoryCards: FC<propsCard> = ({ isLike, idSport }) => {

    const [srcImg, setSrcImg] = useState()

    const { state: { sports, theme } } = useContext(AppContext);

    useEffect(() => {
        const src = sports.find(( obj: any ) => obj.idSport === idSport )
        setSrcImg(src.strSportThumb)
    }, [])

    return (
        <HistoryInfo theme={{ isDark: theme }}>
            <div className='imageSport'>
                <img src={srcImg} className='imageSport' alt="sport" />
            </div>
            <div>
                <img src={ isLike ? Like : Dislike } alt="" />
                {/* <img src="" alt="" srcset="" /> */}
            </div>
        </HistoryInfo>
    )
}

export default HistoryCards
