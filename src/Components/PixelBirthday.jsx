import { motion } from "framer-motion";

const PixelBirthday = () => {
  const words = ["Happy", "Birthday", "Arushi"];

  // Animation variants for the letters
  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "steps(2)", // Makes the entry look "jerky" and pixelated
        duration: 0.1,
      },
    },
  };

  // Floating animation for the whole container
  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "steps(5)", // Moves up/down in discrete "pixel" jumps
      },
    },
  };

  return (
    <motion.div
      variants={floatVariants}
      animate="animate"
      className="flex flex-col items-center justify-center space-y-4 font-pixel font-extrabold text-center">
      {words.map((word, wordIdx) => (
        <motion.div
          key={wordIdx}
          className="flex"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: wordIdx * 0.5 }}>
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={charIdx}
              variants={letterVariants}
              /* Using a vibrant but deep pink to sit between the bg and the dark stroke */
              className="text-5xl md:text-6xl doto-font text-rose-400"
              style={{
                display: "inline-block",
                marginRight: "2px",
                /* The Anchor: Matching your button text (rose-950) */
                WebkitTextStroke: "1.5px #FF2056",
                /* The Glow: Matching your button bg (amber-200) */
                /* The Depth: Again, rose-950 for that crisp pixel shadow */
                filter:
                  "drop-shadow(2px 2px 0px #fde68a) drop-shadow(4px 4px 0px #4c0519)",
              }}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PixelBirthday;
