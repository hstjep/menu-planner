import React from 'react';
import { connect } from 'react-redux';
import Pager from './../components/common/Pager';
import { changePage } from '../actions/queryUtilityActions';

function withPagination(WrappedComponent, pagingOptions, fetchingFuncion) {

    const mapDispatchToProps = dispatch => ({
        dispatch
    });

    class Pagination extends React.Component {
        handlePageChange = (page) => {
            this.props.dispatch(changePage(page));
            this.props.dispatch(fetchingFuncion({ page: page, pageSize: pagingOptions.pageSize, embed: pagingOptions.embed }))
        }

        render() {
            return (
                <div>
                    <WrappedComponent {...this.props} />
                    <Pager pageSize={pagingOptions.pageSize} totalCount={pagingOptions.totalCount} page={pagingOptions.page} handlePageChange={this.handlePageChange} />
                </div>
            )
        }
    }

    return connect(null, mapDispatchToProps)(Pagination);
}

export default withPagination;