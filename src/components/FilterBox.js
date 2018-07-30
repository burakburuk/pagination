import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        marginTop: 27,
    },
});


const FilterBox = (props, context) => {
    const {classes} = props;
    return (
        <div>
            <form className={classes.container} noValidate autoComplete="off">
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            label={context.t("min-price")}
                            value=""
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            label={context.t("min-beds")}
                            value=""
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary" className={classes.button}>
                            {context.t("submit")}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

FilterBox.contextTypes = {
    t: PropTypes.func.isRequired
};

FilterBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterBox);