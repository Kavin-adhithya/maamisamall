import { Component } from 'react';
import Footer from '../footer';
import Header from '../header';
import Banner from './component';
import Items from './items';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							alt='ico'
							style={{ height: 66, width: 66, margin: 10 }}
							src='https://dao54xqhg9jfa.cloudfront.net/Category/f78249a3-c0c5-caae-a743-5b3669471b19/original/1601901874.191--2020-10-0518_14_34--472.png'
						></img>{' '}
						<p>Happy Hours</p>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							alt='ico'
							style={{ height: 66, width: 66, margin: 10 }}
							src='https://dao54xqhg9jfa.cloudfront.net/Category/a2996820-bac5-5eb5-edf8-eae5bff352ce/original/1592902158.6637--2020-06-2314_19_18--472.png'
						></img>{' '}
						<p>Chicken</p>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							alt='ico'
							style={{ height: 66, width: 66, margin: 10 }}
							src='https://dao54xqhg9jfa.cloudfront.net/Category/574f3ef3-e983-e441-ac54-af394e1dc0d1/original/1592241659.9546--2020-06-1522_50_59--472.png'
						></img>{' '}
						<p>Fish & Sea Food</p>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							alt='ico'
							style={{ height: 66, width: 66, margin: 10 }}
							src='https://dao54xqhg9jfa.cloudfront.net/Category/493a653d-56cb-fc9a-7a33-5b30c1a3d27e/original/1592241599.8492--2020-06-1522_49_59--472.png'
						></img>{' '}
						<p>Mutton</p>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							alt='ico'
							style={{ height: 66, width: 66, margin: 10 }}
							src='https://s3-ap-southeast-1.amazonaws.com/licious/cat/4/web_icon/1618835088.2308--2021-04-1917:54:48--472'
						></img>{' '}
						<p>Ready To Cook</p>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							alt='ico'
							style={{ height: 66, width: 66, margin: 10 }}
							src='https://dao54xqhg9jfa.cloudfront.net/Category/06eb2239-1fcc-a5de-2d57-a0081bca5c80/original/1592241843.644--2020-06-1522_54_03--472.png'
						></img>{' '}
						<p>Eggs</p>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							alt='ico'
							style={{ height: 66, width: 66, margin: 10 }}
							src='https://dao54xqhg9jfa.cloudfront.net/Category/1aebd012-022b-0e44-a673-21818a98320c/original/1592241756.9036--2020-06-1522_52_36--472.png'
						></img>{' '}
						<p>Spreads</p>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							alt='ico'
							style={{ height: 66, width: 66, margin: 10 }}
							src='https://s3-ap-southeast-1.amazonaws.com/licious/cat/37/web_icon/1612872334.9746--2021-02-0917:35:34--472'
						></img>{' '}
						<p>Combos</p>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							alt='ico'
							style={{ height: 66, width: 66, margin: 10 }}
							src='https://s3-ap-southeast-1.amazonaws.com/licious/cat/42/web_icon/1612850724.2211--2021-02-0911:35:24--472'
						></img>{' '}
						<p>Prawns</p>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							alt='ico'
							style={{ height: 66, width: 66, margin: 10 }}
							src='https://s3-ap-southeast-1.amazonaws.com/licious/cat/39/web_icon/1615189641.1944--2021-03-0813:17:21--472'
						></img>{' '}
						<p>Kebabs & Tandoor</p>
					</div>
				</div>

				<Banner />
				<Items />
				<Footer />
			</div>
		);
	}
}

export default Home;
