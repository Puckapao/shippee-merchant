import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import withTheme from '@material-ui/core/styles/withTheme';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing.unit * 3,
		marginLeft: theme.spacing.unit,
	},
})

class TestButton extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.buttons}>
				<Button className={classes.button}>
					Back
				</Button>
				<Button className={classes.button}>
					Next
				</Button>
				<Button className={classes.button}>
					Test
				</Button>
			</div>
		);
	}

}

export default withStyles(styles, { withTheme: true })(TestButton);
