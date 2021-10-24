import React, { useState } from 'react';

const list = [
	'https://d2407na1z3fc0t.cloudfront.net/Slider/banner_614f72a24f3bb',
	'https://d2407na1z3fc0t.cloudfront.net/Slider/banner_6150d4181ac98',
	'https://d2407na1z3fc0t.cloudfront.net/Slider/banner_6150d492d77ed',
	'https://d2407na1z3fc0t.cloudfront.net/Slider/banner_6150d3eccc150',
];

function Component() {
	const [index, setIndex] = useState(0);
	const handleLeftClick = () => {
		if (index == 0) {
			setIndex(3);
		} else {
			setIndex(index - 1);
		}
	};

	const handleRightClick = () => {
		if (index === 3) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	};
	return (
		<div>
			<p
				onClick={handleLeftClick}
				style={{ position: 'relative', top: 250 }}
			>
				<i classname='bi bi-arrow-left-circle-fill'></i>
			</p>

			<img alt='img' src={list[index]}></img>

			<p
				onClick={handleRightClick}
				style={{ position: 'absolute', right: 10, bottom: 400 }}
			>
				{' '}
				<i classname='bi bi-arrow-right-circle-fill'></i>
			</p>
		</div>
	);
}

export default Component;
