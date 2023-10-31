import Lottie from "lottie-react";
import race from "./race.json";

const RaceAnimation = () => {
	return (
		<Lottie animationData={race} style={{ height: 600, marginRight: "30%" }} />
	);
};

export default RaceAnimation;
