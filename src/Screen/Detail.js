import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../Screen/Detail.css'
import { deleteBook, getBookById } from '../Publics/action/book'
import Borrow from './borrow'
import Return from './return'

// function convert (date) {
//   let data = Date.parse(date)
//   let newDate = new Date(data)
//   let day = newDate.getDate()
//   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//   let month = months[newDate.getMonth()]
//   var year = newDate.getFullYear()
//   return `${day} ${month} ${year}`
// }

class Detail extends Component{

  state = {
      book: []
  }
  componentDidMount = async () => {
    const bookid = this.props.match.params.bookid
    await this.props.dispatch(getBookById(bookid))
    this.setState({
      book: this.props.book
    })
  } 

  delete = async () => {
		await this.props.dispatch(deleteBook(this.props.match.params.bookid));
	}


render() {
  const {book} = this.state;
  let list = book.bookList;
  console.log(list);
  return (
    <div>  
    
        {list &&
          list.length > 0 &&
          list.map(item =>  {
  return (
    <div className='book-detail'>
      <div>
        <ul>
          <li><Link to='/book' className='back'>BACK</Link></li>
          <li className='button' onClick={this.props.showModal}>Edit</li>
          <li className='button'> <Link to={'/book'} onClick={this.delete.bind(this)}>Delete</Link></li>
        </ul>
        <img className={'imageHeader'} src={this.state.detailData.image_url} 
        alt={this.state.detailData.image_url} />
      </div>
      <div className='content'>
        <img className={'imageBook'} src={this.state.detailData.image_url} 
        alt={this.state.detailData.title} />
        <p>{item.StatusBorrow === 1 ?  <Return id={item.idBook}/>: <Borrow/> }</p>
        <p className='title'>{this.state.detailData.name}</p>
        <p>By: {this.state.detailData.writer}</p>
        {/* <p className='date'>{convert(this.state.detailData.update)}</p> */}
        <p className='text'>{this.state.detailData.description}</p>
      </div>

    </div>
  )
  }
          )
        }
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    book: state.book
  }
}

export default connect(mapStateToProps)(Detail)