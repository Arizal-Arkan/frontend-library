import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postBook } from '../Publics/action/book'
import { getCategory } from '../Publics/action/category'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { category: [] }
  }
  componentDidMount = async () => {
    await this.props.dispatch(getCategory())
    this.setState({ category: this.props.category })
  }
add = (e) => {
  e.preventDefault()
  const formdata = new FormData()
  formdata.append('writer', document.getElementById('writer').value)
  formdata.append('name', document.getElementById('name').value)
  formdata.append('image_url', document.getElementById('image_url').files[0])
  formdata.append('description', document.getElementById('description').value)
  formdata.append('location', document.getElementById('location').value)
  formdata.append('category', document.getElementById('category').value)
  this.props.dispatch(postBook(formdata))
      document.getElementById('name').value = ''
      document.getElementById('image_url').value = ''
      document.getElementById('writer').value = '' 
      document.getElementById('description').value = ''
      document.getElementById('location').value = ''
      document.getElementById('category').value = ''
      this.props.handleClose()
}
  render(){
    const category = this.state.category.categoryList
  return (
    <div className ={this.props.show ? "modal display-block" : "modal display-none"}>
      <section className='modal-main'>
        <button onClick={this.props.handleClose} className={'close'}>X</button>
        {localStorage.id ? localStorage.role === 'member'  ? '': <p>{'Add Book'}</p>:<p>{'Donation Book'}</p>}
        {localStorage.id ? localStorage.role === 'admin'  ? '': <p>{'Donation Book'}</p>:<p>{'Add Book'}</p>}
        <div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Url Image</p>
            </div>
            <div className='input'>
              <input type='file' placeholder='Url Image ...' id={'image_url'} name='image_url' required />
            </div>
          </div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Name</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Name ...' id={'name'} name='name' required />
            </div>
          </div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Writer</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Writer ...' id={'writer'} name='writer' required />
            </div>
          </div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Location</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Location ...' id={'location'} name='location' required />
            </div>
          </div>
          <div className='inputGroup'>
                            <div className='label'>
                                <p>Category</p>
                            </div>
                            <div className='input'>
                                <select id={'category'} name='category'>
                                    {!category ? "" : category.result.map((item, index) => {
                                        return (
                                            <option value={item.category_id}>{item.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Description</p>
            </div>
            <div className='input'>
              <textarea placeholder='Description' id={'description'} rows='5' name='description' required />
            </div>
          </div>
          <div>
            <button className='save' onClick={this.add}>Save</button>
          </div>
        </div>
      </section>
    </div>
  )
}

}
const mapStateToProps = (state) => {
  return {
    book: state.book,
    category: state.category
  }
}

export default connect(mapStateToProps)(Modal)
