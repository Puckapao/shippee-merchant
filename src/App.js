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

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CommentIcon from '@material-ui/icons/Comment';

import SALogo from './images/sa-logo.png';
import Item1 from './images/item-1.jpg';
import Item2 from './images/item-2.jpg';

const orderStatus = [
	{
		id: "001",
		name: {
			th: "ยังไม่จ่าย",
			en: "created",
		},
	},
	{
		id: "002",
		name: {
			th: "ที่ต้องจัดส่ง",
			en: "submitted",
		},
	},
	{
		id: "003",
		name: {
			th: "การจัดส่ง",
			en: "shipped",
		},
	},
	{
		id: "004",
		name: {
			th: "สำเร็จ",
			en: "success",
		},
	},
];

const paymentStatus = [
	{
		id: "001",
		name: {
			th: "ยังไม่ตรวจสอบยอด",
			en: "waitForConfirmation",
		},
	},
	{
		id: "002",
		name: {
			th: "ตรวจสอบยอดแล้ว",
			en: "comfirmed",
		},
	},
];

const originalOrders = [
	{
		orderID: "0001",
		url: "https://shippee.com/5b715fcf03656e1cf0beaaa6/5b8b631c0f611d2acc29f55f",
		status: "created",
		paymentStatus: "pending",
		name: "คุณขาว",
		customerName: "",
		address: {
			houseNo: "",
			road: "",
			subDistrict: "",
			district: "",
			province: "",
			postalCode: "",
		},
		additionalNote: "",
		phone: "",
		price: 1000,
		bankAccount: "SCB",
		shipping: "ALPHA",
		trackingNo: "",
		receipt: "",
		createdTime: "271020181325",
		updatedTime: "271020181325",
		submitTime: "",
		expiredAt: "031120181325",
		items: [
			{
				id: "1",
				name: "Lorem Ipsum",
				price: 250,
				amount: 2,
				image: Item2,
			},{
				id: 2,
				name: "Something",
				price: 450,
				amount: 1,
				image: Item2,
			}

		],
	},{
		orderID: "0002",
		url: "https://shippee.com/5b715fcf03656e1cf0beaaa6/5b8b631c0f611d2acc29f55f",
		status: "created",
		paymentStatus: "waitForConfirmation",
		name: "คุณแดง",
		customerName: "แดง แด๊ง แดง",
		address: {
			houseNo: "111",
			road: "สุขุมวิท 55",
			subDistrict: "คลองตันเหนือ",
			district: "วัฒนา",
			province: "กทม.",
			postalCode: "10110",
		},
		additionalNote: "ถ้ากดกริ่งแล้วไม่มีคนออกมา ให้ฝากไว้ที่ป้อมยาม",
		phone: "0888888888",
		price: 300,
		bankAccount: "KBANK",
		shipping: "EMS",
		trackingNo: "",
		receipt: Item1,
		createdTime: "291020181105",
		updatedTime: "291020181545",
		submitTime: "291020181545",
		expiredAt: "061120181105",
		items: [
			{
				id: "1",
				name: "Trouser",
				price: 100,
				amount: 2,
				image: Item2,
			},{
				id: 2,
				name: "T-Shirt",
				price: 100,
				amount: 1,
				image: Item2,
			},{
				id: 3,
				name: "Skirt",
				price: 100,
				amount: 1,
				image: Item2,
			}

		],
	},{
		orderID: "0003",
		url: "https://shippee.com/5b715fcf03656e1cf0beaaa6/5b8b631c0f611d2acc29f55f",
		status: "shipped",
		paymentStatus: "confirmed",
		name: "คุณดำ",
		customerName: "ดำ ด๊ำ ดำ",
		address: {
			houseNo: "222",
			road: "สุขุมวิท 49",
			subDistrict: "คลองตันเหนือ",
			district: "วัฒนา",
			province: "กทม.",
			postalCode: "10110",
		},
		additionalNote: "ไม่ออกมารับคือไม่เอาแล้ว",
		phone: "0877777777",
		price: 100,
		bankAccount: "SCB",
		shipping: "ALPHA",
		trackingNo: "1234567890",
		receipt: Item1,
		createdTime: "011120181533",
		updatedTime: "011120181833",
		submitTime: "011120181633",
		expiredAt: "081120181533",
		items: [
			{
				id: "1",
				name: "Trouser",
				price: 100,
				amount: 2,
				image: Item2,
			}
		],
	}
];

const styles = theme => ({
	layout: {
		width: '100%',
		marginBottom: theme.spacing.unit * 6,
	},
	grow: {
		flexGrow: 1,
	},
	paper: {
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 3,
	},
	card: {
		minWidth: 275,
		marginTop: theme.spacing.unit,
		display: 'flex',
		alignItems: 'flex-start',
	},
	cardContent: {
		width: '100%',
	},
	rowCheckbox: {
		paddingTop: 0,
		paddingLeft: 0,
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
	statusButton: {
		fontSize: '0.675rem',
		fontWeight: '300',
		padding: '0 5px',
		minWidth: 24,
		minHeight: 24,
	},
	checkbox: {
		paddingRight: 0,
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
	created: {
		backgroundColor: '#555',
	},
	submitted: {
		backgroundColor: 'red'
	},
	shipped: {
		backgroundColor: 'green',
	},
	success: {
		backgroundColor: 'grey',
	},
	pending: {
		display: 'none',
	},
	wait: {
		backgroundColor: 'blue',
	},
	confirmed: {
		backgroundColor: 'green',
	},
	paymentButton: {
		marginLeft: theme.spacing.unit,
	},
	receiptDetailLess: {
		marginTop: theme.spacing.unit,
		display: 'flex',
		justifyContent: 'space-between',
	},
	textLeft: {
		textAlign: 'left',
	},
	textRight: {
		textAlign: 'right',
	},
	marginLeft: {
		marginLeft: theme.spacing.unit * 2,
	},
	marginRight: {
		marginRight: theme.spacing.unit * 2,
	},
	selectAll: {
		display: 'flex',
		alignItems: 'center',
	},
})

function TabContainer(props) {
	return (
		<React.Fragment>
			{props.children}
		</React.Fragment>
	)
}

class App extends Component {
	state = {
		anchorEl: null,
		mobileMoreAnchorEl: null,
		value: 0,
		checked: [],
		orders: originalOrders,
		filteredOrders: [],
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
		this.setState({ filteredOrders: [] });
		this.setState({ value });
		this.filterOrders(value);
		this.setState({ checked: [] });
		this.handleMenuClose();
	};

	async handleStatusChange(id) {
		const { checked, orders, value } = this.state;
		const targetStatus = orderStatus.filter(status => status.id === id);
		for( let i = 0; i < checked.length; i++ ) {
			await this.setState({
				orders: this.state.orders.map(order => {
					if(order.orderID === checked[i]){
						return Object.assign({}, order, { status: targetStatus[0].name.en });
					} else {
						return order;
					}
				}),
			}, () => {
				//this.filterOrders(this.state.value);
			});
		}
		this.handleChange(null, this.state.value);
	};

	handleToggle = value => () => {
		const { checked } = this.state;
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if(currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		};

		this.setState({
			checked: newChecked,
		});
	};

	handleSelectAll = event => {
		const { checked } = this.state;
		if(event.target.checked) {
			this.setState(state => ({ checked: this.state.filteredOrders.map(o => o.orderID )}));
			return;
		};
		this.setState({ checked: [] });
	}

	filterOrders = (statusIndex) => {
		const { orders, filteredOrders } = this.state;
		const newOrder = orders.filter(order => order.status === orderStatus[statusIndex].name.en);
		this.setState({ filteredOrders: newOrder });
	};

	componentDidMount() {
		this.filterOrders(this.state.value);
	};

	render() {
		const { classes } = this.props;
		const { anchorEl, mobileMoreAnchorEl, value, orders, filteredOrders } = this.state;
		const isMenuOpen = Boolean(anchorEl);
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

		function statusColor(status) {
			switch(status) {
				case "created":
				return classes.created;
				case "submitted":
				return classes.submitted;
				case "shipped":
				return classes.shipped;
				case "success":
				return classes.success;
				default:
				return classes.created;
			};
		};

		function statusText(status) {
			const alternateStatus = orderStatus.filter(thaiStatus => thaiStatus.name.en === status);
			return alternateStatus[0].name.th;
		};

		function paymentColor(status, payment) {
			if(status === "submitted") {
				switch(payment) {
					case "pending":
					return classes.pending;
					case "waitForConfirmation":
					return classes.wait;
					case "comfirmed":
					return classes.confirmed;
					default:
					return classes.pending;
				};
			} else {
				return classes.pending;
			}
		};

		function paymentText(payment) {
			const alternatePayment = paymentStatus.filter(thaiPayment => thaiPayment.name.en === payment);
			if(alternatePayment.length !== 0) {
				return alternatePayment[0].name.th;
			} else {
				return "";
			}
		};

		const renderMenu = (
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMenuOpen}
				onClose={this.handleMenuClose}
				>
				{orderStatus.map( status => (
					<MenuItem onClick={this.handleStatusChange.bind(this, status.id)} key={status.id}>{status.name.en}</MenuItem>
				))}
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

		const table = (
			<Paper className={classes.paper}>
				{filteredOrders.length === 0 ?
					<div>Nothing here</div>
					:
					<div className={classes.selectAll}>
						<Checkbox
							checked={this.state.checked.length === filteredOrders.length}
							onChange={this.handleSelectAll}
							className={classes.checkbox}
							/>
					</div>
				}
				{filteredOrders.map(order => (
					<Card className={classes.card} key={order.orderID}>
						<Checkbox
							onChange={this.handleToggle(order.orderID)}
							checked={this.state.checked.indexOf(order.orderID) !== -1}
							value={order.orderID}
							className={classes.checkbox}
							/>
						<CardContent className={classes.cardContent}>
							<Button variant="contained" color="primary" className={classNames(statusColor(order.status), classes.statusButton)}>
								{statusText(order.status)}
							</Button>
							<Button variant="contained" color="primary" className={classNames(paymentColor(order.status, order.paymentStatus), classes.statusButton, classes.paymentButton)}>
								{paymentText(order.paymentStatus)}
							</Button>
							<div className={classes.receiptDetailLess}>
								<Typography variant="body2">{order.name}</Typography>
								<Typography variant="body1" className={classes.textRight}>{order.price} บาท</Typography>
							</div>
						</CardContent>
					</Card>
				))}
			</Paper>
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
							<Tabs value={value} onChange={this.handleChange} fullWidth>
								{orderStatus.map(status => (
									<Tab key={status.id} label={status.name.th} />
								))}
							</Tabs>
						</div>
						{value === 0 && <TabContainer>{table}</TabContainer>}
						{value === 1 && <TabContainer>{table}</TabContainer>}
						{value === 2 && <TabContainer>{table}</TabContainer>}
						{value === 3 && <TabContainer>{table}</TabContainer>}
					</div>
				</main>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(App);
