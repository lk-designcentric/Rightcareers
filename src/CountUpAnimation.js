import { useEffect, useRef, useState } from "react";

export const CountUpAnimation = ({
	initialValue,
	targetValue,
	text,
}) => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const [count, setCount] = useState(initialValue);
	const duration = 500; // 4 seconds
	const ref = useRef(null);
	let status_isIntersecting = false;
	
	if (isIntersecting) {
		status_isIntersecting = true;
	}
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			}
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		console.log(isIntersecting)
		return () => observer.disconnect();

	}, []);
	useEffect(() => {
		let startValue = initialValue;
		const interval = Math.floor(duration / (targetValue - initialValue));
		if (isIntersecting && startValue < targetValue) {
			const counter = setInterval(() => {
				startValue += 1;
				setCount(startValue);
				if (startValue >= targetValue) {
					clearInterval(counter);
					setIsIntersecting(false)
				}
			}, interval);

			return () => {
				clearInterval(counter);
			};
		};
	}, [initialValue, targetValue])

	return (
		<div className="container1" ref={ref}>
			<h1 className="num">{count}+</h1>
			<h3 className="text">{text}</h3>
		</div>
	);
};