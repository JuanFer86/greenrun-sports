import React, { FC } from "react";
import { useSpring, animated } from "@react-spring/web";
import { RippleContainer } from "../../styled";
import { Like } from "../../assets";

const Ripple: FC = () => {
  const styles = useSpring({
    loop: true,
    from: { scale: 0 },
    to: { scale: 1.5 },
    config: { duration: 5000 },
  });

  return (
    <>
      <RippleContainer>
        <animated.div className="first" style={{ ...styles }}>
          <animated.div className="second" style={{ ...styles }}>
            <animated.div
              className="third"
              style={{ ...styles }}
            ></animated.div>
          </animated.div>
        </animated.div>
        <div className="containerLike">
          <img src={Like} alt="like" />
        </div>
      </RippleContainer>
    </>
  );
};

export default Ripple;
