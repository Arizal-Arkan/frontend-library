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
add = () => {
  this.props.dispatch(postBook({
      name: document.getElementById('name').value,
      image_url: document.getElementById('image_url').value,
      writer: document.getElementById('writer').value,
      description: document.getElementById('description').value,
      location: document.getElementById('location').value,
      category: document.getElementById('category').value
  }
  ))
  this.props.handleClose()
}
  render(){
    const category = this.state.category.categoryList
  return (
    <div className ={this.props.show ? "modal display-block" : "modal display-none"}>
      <section className='modal-main'>
        <button onClick={this.props.handleClose} className={'close'}>X</button>
        <p>{`Add Book`}</p>
        <div>
          <div className='inputGroup'>
            <div className='label'>
              <p>Url Image</p>
            </div>
            <div className='input'>
              <input type='text' placeholder='Url Image ...' id={'image_url'} name='image_url' required />
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
