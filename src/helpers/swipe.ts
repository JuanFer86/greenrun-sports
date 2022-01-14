import { Dispatch, SetStateAction, useState } from "react";
import { useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { handleLike } from ".";
import { typeSports, typeState } from '../context/AppContext';

interface cardsArg {
  [key: string]: string;
}

export const useLessCrowd = (cards: cardsArg[]): [ any, any , any , any ] => {
  const to = (i: number) => ({
    x: 0,
    y: 0,
    scale: 1,
    transY: 0,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  });

  const from = (_i: number) => ({ x: 0, rot: 0, scale: 1, y: 0, transY: 0 });

  const [gone] = useState(() => new Set());

  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  return [gone, props, api, to];
};

export const useBind = (setIndex: Dispatch<SetStateAction<number>>, cards: cardsArg[], setSports: Dispatch<SetStateAction<typeSports[]>>, state: typeState, api:any, gone:any, to:any ) => {

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
    
          api.start((i: number) => {
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
              api.start((i: number) => to(i));
            }, 1000);
        }
      );

      return bind;

}
