export const slideDownAnimation = {
	hidden: {
		opacity: 0,
		y: "-30px",
	},
	visible: {
		opacity: 1,
		y: "0",
	},
	exit: {
		opacity: 0,
		y: "-30px",
	},
	transition: { duration: 0.3, type: "tween", ease: "easeInOut" },
};
