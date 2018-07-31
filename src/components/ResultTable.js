import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ResultTableActions from './ResultTableActions';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});


const ResultTable = (props, context) => {
    const {classes, data, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage} = props;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Listing id</TableCell>
                            <TableCell numeric>Price</TableCell>
                            <TableCell numeric>Bedrooms</TableCell>
                            <TableCell>Property Type</TableCell>
                            <TableCell>Agent Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                            return (
                                <TableRow key={n.listingId}>
                                    <TableCell numeric>{n.listingId}</TableCell>
                                    <TableCell numeric>{n.price}</TableCell>
                                    <TableCell numeric>{n.bedrooms}</TableCell>
                                    <TableCell>{n.propertyType}</TableCell>
                                    <TableCell>{n.agentName}</TableCell>
                                </TableRow>
                            );
                        })}
                        {emptyRows > 0 && (
                            <TableRow style={{height: 48 * emptyRows}}>
                                <TableCell colSpan={6}/>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                colSpan={3}
                                count={data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={ResultTableActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </Paper>
    );
};

ResultTable.defaultProps = {
    handleChangePage: () => {
        throw new Error("handleChangePage is not implemented!");
    },
    handleChangeRowsPerPage: () => {
        throw new Error("handleChangeRowsPerPage is not implemented!");
    }
};

ResultTable.contextTypes = {
    t: PropTypes.func.isRequired
};

ResultTable.propTypes = {
    classes: PropTypes.object.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(ResultTable);