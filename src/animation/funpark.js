import Lottie from "lottie-react";
import funpark from "./funpark.json";

const FunParkAnimation = () => {
	return <Lottie animationData={funpark} style={{ height: 100 }} />;
};

export default FunParkAnimation;
