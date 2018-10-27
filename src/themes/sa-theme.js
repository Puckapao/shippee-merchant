import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';

export default createMuiTheme({
	palette: {
		primary: red,
		secondary: pink,
	},
	typography: {
		fontFamily: [
			'Mitr',
			'Roboto',
		].join(','),
	},
	overrides: {
		MuiButton: {
			root: {
				color: 'white',
				backgroundColor: pink[300],
				'&:hover': {
					backgroundColor: pink[200],
				},
				padding: '12px 16px',
				fontSize: '1rem',
				'&$sizeSmall': {
					fontWeight: '400',
					color: '#888',
				}
			},
		},
		MuiStepLabel: {
			iconContainer: {
				paddingRight: 0,
			},
		},
		MuiStepIcon: {
			root: {
				color: '#999',
				'&$active': {
					color: pink[100],
				},
				'&$completed': {
					color: pink[500],
				},
				'&$error': {
					color: pink[100],
				}
			},
		},
		MuiIconButton: {
			root: {
				padding: '12px',
			},
		},
		MuiTabScrollButton: {
			root: {
				display: 'none',
			},
		},
	},
});
