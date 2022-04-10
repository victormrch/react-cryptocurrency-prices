import {
	ResultContainer,
	ResultPrice,
	ResultText,
	ResultImage,
} from './Result.style';

const Result = ({ result }) => {
	const {
		PRICE,
		HIGHDAY,
		LOWDAY,
		CHANGEPCT24HOUR,
		IMAGEURL,
		LASTUPDATE,
		MKTCAP,
	} = result;

	return (
		<ResultContainer>
			<ResultImage
				src={`https://cryptocompare.com/${IMAGEURL}`}
				alt='crypto image'
			/>
			<div>
				<ResultPrice>
					Price: <span>{PRICE}</span>
				</ResultPrice>
				<ResultText>
					24h High: <span>{HIGHDAY}</span>
				</ResultText>
				<ResultText>
					24H Low: <span>{LOWDAY}</span>
				</ResultText>
				<ResultText>
					Price Change: <span>{CHANGEPCT24HOUR}%</span>
				</ResultText>
				<ResultText>
					Market Cap: <span>{MKTCAP}</span>
				</ResultText>
				<ResultText>
					Last Update: <span>{LASTUPDATE}</span>
				</ResultText>
			</div>
		</ResultContainer>
	);
};

export default Result;
