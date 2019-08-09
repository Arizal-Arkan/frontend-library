import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../Screen/Detail.css'
import { deleteBook, getBookById } from '../Publics/action/book'
import ModalAlert from '../Screen/modalAlert'
import Activity from './activity'


function convert (date) {
  let data = Date.parse(date)
  let newDate = new Date(data)
  let day = newDate.getDate()
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let month = months[newDate.getMonth()]
  var year = newDate.getFullYear()
  return `${day} ${month} ${year}`
}

class Detail extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      book: [],
      modal: ''
    }
  }
  setModal = () => {
    this.setState({ modal: '' })
  }
  componentDidMount = async () => {
    console.log(this.props.match.params.bookid);
    
    const bookid = this.props.match.params.bookid
    await this.props.dispatch(getBookById(bookid))
    this.setState({
      book: this.props.book
    })
  } 

  deleteData = () => {
    this.props.dispatch(deleteBook(this.props.match.params.bookid))
    window.location='/'
  }
  pinjam = () => {
    if (localStorage.id) {
      this.props.showModalPinjam()
    } else {
      const modal = <ModalAlert show={true} pesan={"Login Dulu Dong"} error={true} link={"/login"} setModal={this.setModal} />
      this.setState({ modal: modal })
    }
  }

render() {
  
  const {book} = this.state;
  let list = book.bookList;
  console.log(list);
  if(book.isFulfilled){
  return (
    <div>  

        {list &&
          list.result.length > 0 &&
          list.result.map(item =>  {
  return (
    <div className='book-detail'>
      <div>
          <ul>
            <li><Link to="/" className="back">Back</Link></li>
            {localStorage.role === "admin" ? <li className="button" onClick={this.props.showModal}>Edit</li> : ""}
            {localStorage.role === "admin" ? <li className="button" onClick={this.deleteData}>Delete</li> : ""}
          </ul>
        <img className={'imageHeader'} src={item.image_url} 
        alt={item.image_url} />
      </div>
      <div className='content'>
        <img className={'imageBook'} src={item.image_url} 
        alt={item.title} />
        <button className={"btn-pinjam"} onClick={this.pinjam}>Pinjam </button>
        <p className='title'>{item.name}</p>
        <p>By: {item.writer}</p>
        <p className='date'>{convert(item.update)}</p>
        <p className='text'>{item.description}</p>
      </div>

    </div>
  )
  }
          )
        }
    </div>
  )
} else {
  return <div style={{ textAlign: "center", marginTop: 500 }}><Activity/></div>
}
}
}

const mapStateToProps = (state) => {
  return {
    book: state.book
  }
}

export default connect(mapStateToProps)(Detail)