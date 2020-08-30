import PropTypes from 'prop-types';
import React from 'react';

/**
 * CityInfo displays info about the current city that
 * is selected/hovered over
 */
const CityInfo = ({ graph, currentCityNumber }) => {
	const currentCity = graph.N.cities[currentCityNumber - 1];
	return (
		<div className="row">
			<div className="col-xs-12">
				<h2>Current city: {currentCityNumber}</h2>
			</div>
			<div className="col-xs-6">Coordinates:</div>
			<div className="col-xs-6">{`(${currentCity.coord.x}, ${currentCity.coord.y})`}</div>
			<div className="col-xs-6">Demand:</div>
			<div className="col-xs-6">{currentCity.demand}</div>
			<div className="col-xs-6">Due Date:</div>
			<div className="col-xs-6">{currentCity.dueDate}</div>
			<div className="col-xs-6">Ready Time:</div>
			<div className="col-xs-6">{currentCity.readyTime}</div>
			<div className="col-xs-6">Service Time:</div>
			<div className="col-xs-6">{currentCity.serviceTime}</div>
		</div>
	);
};

CityInfo.propTypes = {
	currentCityNumber: PropTypes.number.isRequired,
	graph: PropTypes.object.isRequired,
};

export default CityInfo;
