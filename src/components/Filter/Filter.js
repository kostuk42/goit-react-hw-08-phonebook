import propTypes from 'prop-types'

export default function Filter({ value, onChangeFilter }) {
	return (
		<div>
			<input
				type="text"
				className="input-filter"
				value={value}
				onChange={e => onChangeFilter(e.target.value)}
			></input>
		</div>
	);
}
Filter.propTypes = {
    onChangeFilter: propTypes.func
}