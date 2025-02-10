import React, { useState, useEffect, useRef } from 'react';

const CounterComponent = ({
    initialValue,
	targetValue,
	text,
}) => {
  const [count, setCount] = useState(initialValue);
  const duration = 1000; // 4 seconds
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
    let startValue = initialValue;
    const interval1 = Math.floor(duration / (targetValue - initialValue));
      if (entries[0].isIntersecting) {
        let interval = setInterval(() => {
          setCount((prevCount) => {
            startValue += 1
            console.log(startValue)
            if (prevCount < targetValue) {
              return prevCount + 1;
            } else {
              clearInterval(interval);
              return prevCount;
            }
          });
        }, interval1); 
      }
    }, { threshold: 1 });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <div className="container1" ref={countRef}>
        <h1 className="num">{count}+</h1>
        <h3 className="text">{text}</h3>
    </div>
  );
};

export default CounterComponent;