import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Screen/books.css'
import { connect } from 'react-redux'
import { getBook } from '../Publics/action/book'
import search from './search';
import Activity from './activity'

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
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      book: this.props.search
    }
  }

  render() {

    const book = this.props.search
    console.log(book)
    if(book.isFulfilled){
        return (
            <div className='list'>
              {localStorage.id ? localStorage.role === 'member'  ? '': <button className='add' onClick={this.props.showModal}>{'ADD'}</button>:<p>{''}</p>}
              {localStorage.id ? localStorage.role === 'admin'  ? '': <button className='add' onClick={this.props.showModal}>{'DONASI'}</button>:<p>{''}</p>}
              <div className='list-item'>{
              !book.bookList ? "" : !book.bookList.result.length > 0 ? "" : book.bookList.result.map(
                                  (item) => {
                                      const tersedia =
                                          <Link to={`/${item.id}`}>
                                              <div className='item' id='items' bookid={item.id}>
                                                  <div style={{ padding: 0, position: 'relative' }}>
                                                      <div style={{ padding: 0, height: '200px', borderRadius: 10, background: 'black' }}>
                                                          <img src={item.image_url} alt='gambar' />
                                                      </div>
                                                      <p style={{ position: 'absolute', bottom: -60, right: 10, width: 'auto', color: 'green', textShadow: '1px 1px 1px black' }}>Avaible</p>
                                                  </div>
                                                  <div>
                                                      <p>{text(item.name)}</p>
                                                  </div>
                                              </div>
                                          </Link>
                                      const tidak =
                                          <div className='item' id='items' bookid={item.id}>
                                              <div style={{ padding: 0, position: 'relative' }}>
                                                  <div style={{ padding: 0, height: '200px', borderRadius: 10, background: 'black' }}>
                                                      <img src={item.image_url} alt='gambar' />
                                                  </div>
                                                  <p style={{ position: 'absolute', bottom: -60, right: 10, width: 'auto', color: 'red', textShadow: '1px 1px 1px black' }}>Not Avaible</p>
                                              </div>
                                              <div>
                                                  <p>{text(item.name)}</p>
                                              </div>
                                          </div>
                                      if (item.status === 1) {
                                          return (tidak)
                                      } else {
                                          return (tersedia)
                                      }
                                  }
                              )
                          }
                      </div>
                  </div>
              )
          }
      
    else{
        return <div style={{ textAlign: "center", marginTop: 500 }}><Activity/></div>
    }
}
}
const mapStateToProps = (state) => {
    return {
        book: state.book,
        user:state.user
    }
}

export default connect(mapStateToProps)(book)