import React from 'react'
import * as PropTypes from 'prop-types'
import ButtonMui from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import styles from './style'

const Button = props => {
	const {
		classes,
		width,
		height,
		size,
		fontSize,
		text,
		onClick,
		background,
		type,
	} = props

	return (
		<ButtonMui
			className={classes.cssRoot}
			style={{ width, height, background, fontSize }}
			onClick={onClick && (() => onClick())}
			type={type}
			size={size}
		>
			{text}
		</ButtonMui>
	)
}

Button.defaultProps = {
	width: 'auto',
	height: 'auto',
	size: 'medium',
	fontSize: 13,
	text: 'Button',
	onClick: null,
	background: '',
	type: '',
}

Button.propTypes = {
	classes: PropTypes.instanceOf(Object).isRequired,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	fontSize: PropTypes.number,
	text: PropTypes.string,
	onClick: PropTypes.func,
	background: PropTypes.string,
	type: PropTypes.string,
}

export { Button }

export default withStyles(styles)(Button)
