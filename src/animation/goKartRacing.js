import Lottie from "lottie-react";
import race from "./goKartRacing.json";

const GoKartRaceAnimation = () => {
	return (
		<Lottie animationData={race} style={{ height: 100, marginRight: "30%" }} />
	);
};

export default GoKartRaceAnimation;
