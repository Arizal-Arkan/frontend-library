import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../Screen/search.css'
import { getBook } from '../Publics/action/book'
class Search extends Component {
    search = async (e) => {
        await this.props.dispatch(getBook(e.currentTarget.value))
        console.log(this.props)
        this.props.setSearch(this.props.book)

    }
    componentDidMount = async () => {
        await this.props.dispatch(getBook(''))
        this.props.setSearch(this.props.book)
        console.log(this.props.book)
        
    }
    render() {
        return (
            <input type="text" id="search" onChange={this.search} placeholder="Search Book ... " />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.book
    }
}

export default connect(mapStateToProps)(Search)