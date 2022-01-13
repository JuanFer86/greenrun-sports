import React, { FC, useState } from "react";
import { animated, useSprings, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

interface CardProperties {
  [key: string]: string;
}

interface CardsProps {
  cards?: CardProperties[];
}

const SwipeCard: FC<CardsProps> = ({ cards = [] }) => {
  const to = (i: number) => ({
    x: 0,
    y: 0,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  });

  const from = (_i: number) => ({ x: 0, rot: 0, scale: 1, y: 0 });

  const trans = () => ``;

  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx, my],
      direction: [xDir, yDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.2; // If you flick hard enough it should trigger the card to fly out
      if (!active && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const y = isGone ? (200 + window.innerHeight) * yDir : active ? my : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = active ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          y,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="CardSports" key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i].strSportThumb})`,
            }}
          />
          <div className="IconGreen">
            <img src={cards[i].strSportIconGreen} alt="" />
          </div>
          <section>
            <h4>{cards[i].strSport}</h4>
          </section>
        </animated.div>
      ))}
    </>
  );
};

export default SwipeCard;
