import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Screen/books.css'
import { connect } from 'react-redux'
import { getBook } from '../Publics/action/book'

function text(text) {
  if (text.length > 20) {
    let textSplit = text.substr(0, 20)
    return `${textSplit} ...`
  } else {
    let textSplit = text
    return `${textSplit}`
  }
}
class book extends Component {
  componentDidMount = async () => {
    await this.props.dispatch(getBook())
    console.log(this.props.book);
  }
  render() {
    return (
      <div className='list'>
        <button className='add' onClick={this.props.showModal}>ADD</button>
        <div className='list-item'>
          {!this.props.book.bookList.result ? "" :
            this.props.book.bookList.result.map(
              item => {
                return (
                  <Link to={`/book/${item.id}`}>
                    <div className='item' id='items' id={item.id}>
                      <img src={item.image_url} alt='gambar' />
                      <div>
                        <p>{text(item.name)}</p>
                      </div>
                    </div>
                  </Link>
                )
              }
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    book: state.book
  }
}

export default connect(mapStateToProps)(book)