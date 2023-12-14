import "./MotionValue2.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function MotionValue2() {
  const motionValue = useMotionValue(0);
  const scale = useTransform(motionValue, [-300, 0, 300], [0.7, 1, 0.7]);
  const opacity = useTransform(motionValue, [-300, 0, 300], [0.7, 1, 0.7]);
  const background = useTransform(
    motionValue,
    [-200, 200],
    [
      "linear-gradient(92deg, rgb(0,210,238), rgb(0,83,238)",
      "linear-gradient(92deg, rgb(0,238,155), rgb(238,178,0)",
    ]
  );
  return (
    <>
      <div className="container">
        <div className="bigBox">
          <motion.div
            className="box"
            drag="x"
            dragSnapToOrigin
            style={{ x: motionValue, background, scale }}
          >
            <p className="text">Drag Me</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
