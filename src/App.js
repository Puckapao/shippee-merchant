import React, { Component } from 'react';

import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import AddCirleIcon from '@material-ui/icons/AddCircle';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SALogo from './images/sa-logo.png';
import Item1 from './images/item-1.jpg';
import Item2 from './images/item-2.jpg';

const items = [
	{
		id: 1,
		name: "สินค้าที่ชื่อยาวที่สุดในโลกที่คุณไม่เคยเห็นมาก่อนแล้วคุณจะตกใจว่าทำไมมันยาวได้ขนาดนี้",
		price: 499.49,
		amount: 1,
		image: Item1,
	},
	{
		id: 2,
		name: "Lorem Ipsum",
		price: 299.50,
		amount: 2,
		image: Item2,
	},
];

const styles = theme => ({
	layout: {
		width: '100%',
		marginBottom: theme.spacing.unit * 6,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: theme.spacing.unit * 2 ,
	},
	avatar: {
		backgroundColor: fade(theme.palette.common.white, 0.85),
	},
	menuIcon: {
		paddingLeft: 0,
		paddingRight: 8,
	},
	appBarButton: {
		padding: '0 12px',
		marginRight: theme.spacing.unit * 2,
	},
	lastItem: {
		marginRight: 0,
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.35),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.55),
		},
		marginRight: theme.spacing.unit * 2,
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit * 3,
			width: 'auto',
		},
	},
	searchIcon: {
		width: 40,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 5,
		transition: theme.transitions.create('width'),
		fontWeight: 300,
		fontSize: '0.875rem',
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200,
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	flexColumn: {
		flexDirection: 'column',
	},
})

function TabContainer(props) {
	return (
		<Typography component="div" variant="body1" style={{ padding: 24 }}>
			{props.children}
		</Typography>
	)
}

class App extends Component {
	state = {
		anchorEl: null,
		mobileMoreAnchorEl: null,
		value: 0,
	};

	handleStatusMenuOpen = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleMenuClose = () => {
		this.setState({ anchorEl: null });
		this.handleMobileMenuClose();
	};

	handleMobileMenuOpen = event => {
		this.setState({ mobileMoreAnchorEl: event.currentTarget });
	};

	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null });
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	componentDidMount() {
	};

	render() {
		const { classes } = this.props;
		const { anchorEl, mobileMoreAnchorEl, value } = this.state;
		const isMenuOpen = Boolean(anchorEl);
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

		const renderMenu = (
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMenuOpen}
				onClose={this.handleMenuClose}
				>
				<MenuItem onClick={this.handleMenuClose}>ใบสั่งสินค้า</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>ตรวจสอบยอด</MenuItem>
				<MenuItem onClick={this.handleMenuClose}>รอจัดส่ง</MenuItem>
			</Menu>
		);

		const renderMobileMenu = (
			<Menu
				anchorEl={mobileMoreAnchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMobileMenuOpen}
				onClose={this.handleMobileMenuClose}
				>
				<MenuItem onClick={this.handleStatusMenuOpen}>
					<CreateIcon className={classes.menuIcon} />
					<p>เปลี่ยนสถานะ</p>
				</MenuItem>
			</Menu>
		);

		return (
			<React.Fragment>
				<main className={classes.layout}>
					<AppBar position="static" color="secondary">
						<Toolbar>
							<IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
								<Avatar
									alt="Something Apparel"
									src={SALogo}
									className={classes.avatar}
									/>
							</IconButton>
							<Typography className={classes.title} variant="body2" color="inherit" noWrap>
								Shippee Shop Name
							</Typography>
							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<SearchIcon />
								</div>
								<InputBase
									placeholder="ค้นหาบิล..."
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
									/>
							</div>
							<div className={classes.grow} />
							<div className={classes.sectionDesktop}>
								<Button
									aria-owns={isMenuOpen ? 'material-appbar' : null}
									aria-haspopup="true"
									onClick={this.handleStatusMenuOpen}
									color="inherit"
									className={classes.appBarButton}
									>
									<CreateIcon className={classes.menuIcon} />
									<Typography className={classes.title} variant="body1" color="inherit" noWrap>เปลี่ยนสถานะ</Typography>
								</Button>
								<Button
									aria-haspopup="true"
									color="inherit"
									className={classNames(classes.appBarButton, classes.lastItem)}
									>
									<AddCirleIcon className={classes.menuIcon} />
									<Typography className={classes.title} variant="body1" color="inherit" noWrap>เปลี่ยนสถานะ</Typography>
								</Button>
							</div>
							<div className={classes.sectionMobile}>
								<IconButton aria-haspopup="true" onClick={this.handleStatusMenuOpen} color="inherit">
									<CreateIcon />
								</IconButton>
								<IconButton aria-haspopup="true" color="inherit">
									<AddCirleIcon />
								</IconButton>
							</div>
						</Toolbar>
					</AppBar>
					{renderMenu}
					{renderMobileMenu}

					<div className={classNames(classes.sectionMobile, classes.flexColumn)}>
						<div className={classes.tabBar}>
							<Tabs value={value} onChange={this.handleChange} scrollable>
								<Tab label="ทั้งหมด" />
								<Tab label="ใบสั่งสินค้า" />
								<Tab label="ตรวจสอบยอด" />
								<Tab label="รอจัดส่ง" />
								<Tab label="จัดส่งแล้ว" />
								<Tab label="สำเร็จ" />
							</Tabs>
						</div>
						{value === 0 && <TabContainer>ทั้งหมด</TabContainer>}
						{value === 1 && <TabContainer>ใบสั่งสินค้า</TabContainer>}
						{value === 2 && <TabContainer>ตรวจสอบยอด</TabContainer>}
						{value === 3 && <TabContainer>รอจัดส่ง</TabContainer>}
						{value === 4 && <TabContainer>จัดส่งแล้ว</TabContainer>}
						{value === 5 && <TabContainer>สำเร็จ</TabContainer>}
					</div>
				</main>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(App);
