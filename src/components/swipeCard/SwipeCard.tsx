import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { animated, useSprings, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { handleLike } from "../../helpers";
import AppContext from "../../context/AppContext";
import { Ripple } from "..";

interface CardProperties {
  [key: string]: string | any;
}

interface CardsProps {
  cards?: CardProperties[];
  setIndex: Dispatch<SetStateAction<number>>;
  setSports: Dispatch<SetStateAction<any>[]>;
}

const SwipeCard: FC<CardsProps> = ({ cards = [], setIndex, setSports }) => {
  const { state } = useContext(AppContext);

  const to = (i: number) => ({
    x: 0,
    y: 0,
    scale: 1,
    transY: 0,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  });

  const from = (_i: number) => ({ x: 0, rot: 0, scale: 1, y: 0, transY: 0 });

  const trans = (r: number, s: number, t: number) =>
    `scale(${s}) translateY(${t}rem)`;

  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  useEffect(() => {
    api.start((index) => ({
      x: cards[index]?.coords.x,
      rot: 0,
      scale: cards[index]?.coords.scale,
      transY: cards[index]?.coords.transY,
      y: cards[index]?.coords.y,
      config: { friction: 100, tension: 100 },
    }));
  }, [cards]);

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx, my],
      direction: [xDir, yDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.2;
      if (!active && trigger) {
        gone.add(index);
        setIndex((i) => i - 1);

        if (mx > 100) {
          handleLike(setSports, index, setIndex, {
            idSport: cards[index].idSport,
            isLike: true,
            uid: state.uid,
          });
        } else if (mx < 100) {
          handleLike(setSports, index, setIndex, {
            idSport: cards[index].idSport,
            isLike: false,
            uid: state.uid,
          });
        }
      }

      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
        const y = isGone ? (200 + window.innerHeight) * yDir : active ? my : 0;
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0);
        const scale = active ? 1 : 1;
        const transY = active ? 3 : 0;
        return {
          x,
          y,
          rot,
          scale,
          transY,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 1000);
    }
  );

  return (
    <>
      {props.map(({ x, y, rot, scale, transY }, i) => (
        <>
          {(cards[i].isLike && cards[i].strSport !== "" ) && <Ripple />}
          <animated.div
            className={`CardSports ${cards[i].strSport === "" && "none"}`}
            key={i}
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
        </>
      ))}
    </>
  );
};

export default SwipeCard;
