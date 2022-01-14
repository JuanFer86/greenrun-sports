import React, {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { animated, to as interpolate } from "@react-spring/web";
import { useBind, useLessCrowd } from "../../helpers";
import AppContext, { typeSports } from "../../context/AppContext";
import { Ripple } from "..";

interface coordsTypes {
  x: number,
  y: number,
  rot: number,
  scale: number,
  transY: number
}

interface CardProperties {
  [key: string]: string | any;
}

interface CardsProps {
  cards?: CardProperties[];
  setIndex: Dispatch<SetStateAction<number>>;
  setSports: Dispatch<SetStateAction<typeSports[]>>;
}

const SwipeCard: FC<CardsProps> = ({ cards = [], setIndex, setSports }) => {
  const { state } = useContext(AppContext);

  const trans = (r: number, s: number, t: number) =>
    `scale(${s}) translateY(${t}rem)`;

  const [gone, props, api, to] = useLessCrowd( cards );
  

  useEffect(() => {
    api.start((index: number) => ({
      x: cards[index]?.coords.x,
      rot: 0,
      scale: cards[index]?.coords.scale,
      transY: cards[index]?.coords.transY,
      y: cards[index]?.coords.y,
      config: { friction: 100, tension: 100 },
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  const bind = useBind( setIndex, cards, setSports, state, api, gone, to  );


  return (
    <>
      {props.map(({ x, y, rot, scale, transY }: coordsTypes, i: number) => (
        <Fragment key={i}>
          {(cards[i].isLike && cards[i].strSport !== "" ) && <Ripple />}
          <animated.div
            className={`CardSports ${cards[i].strSport === "" && "none"}`}
            style={{
              x,
              y,
              transform: interpolate([rot, scale, transY], trans),
            }}
          >
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <animated.div
              {...bind(i)}
              style={{
                backgroundImage: `url(${cards[i]?.strSportThumb})`,
              }}
            ></animated.div>
            <div className="IconGreen">
              <img src={cards[i]?.strSportIconGreen} alt="" />
            </div>
            <section>
              <h4>{cards[i]?.strSport}</h4>
            </section>
          </animated.div>
        </Fragment>
      ))}
    </>
  );
};

export default SwipeCard;
