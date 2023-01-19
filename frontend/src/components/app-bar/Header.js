import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";

const styles = {
	root: {
		flexGrow: 1
	},
	center: {
		textAlign: "center"
	},
	end: {
		justifyContent: "flex-end"
	}
};

function Header(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ background: 'black' }}>
				<ToolBar>
					{props.back ? (
						<IconButton href={props.toLocation}>
							<ArrowBack />
						</IconButton>
					) : (
						""
					)}
					<Typography variant="h6" color="inherit" style={{ color: 'white' }}>
						{props.headerLabel}
					</Typography>
				</ToolBar>
			</AppBar>
		</div>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);