import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postBorrow } from '../Publics/action/borrow'
import { Link } from 'react-router-dom'
class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            book: []
        }
    }
    borrow = async (e) => {
        e.preventDefault()
        await this.props.dispatch(postBorrow({
            id_user: localStorage.id,
            id_book: this.props.match.params.bookid
        })) 
        this.props.hideModalPinjam()
    }
render() {
    const book = this.props.book.bookEdit.result
    return(
        <div className={this.props.modalPinjam ? 'modal display-block' : 'modal display-none'}>
            <section className='modal-main'>
                <button onClick={this.props.hideModalPinjam} className={'close'}>X</button>
                <p>{'Loan'}</p>
                <div>
                    <form onSubmit={this.borrow}>
                        <div className='inputGroub'>
                            <div className='label'>
                                <p>Card Id</p>
                            </div>
                            <div className='input'>
                                <input type='text' placeholder='Card Id ...' id={'card_id'} name='card_id' value={localStorage.no_ktp} disabled requried/>
                            </div>
                        </div>
                        <div className='inputGroub'>
                            <div className='label'>
                                <p>Nama Peminjam</p>
                            </div>
                            <div className='input'>
                                <input type='text' placeholder='Name ...' id={'name'} value={localStorage.fullname} disabled name='name' requried/>
                            </div>
                        </div>
                        <div className='inputGroub'>
                            <div className='label'>
                                <p>Nama Buku</p>
                            </div>
                            <div className='input'>
                                <input type='text' disabled value={book ? book.name : ''} name='bookName' requried/>
                            </div>
                        </div>
                        <div>
                                <a href="/book"><button className="save" style={{ marginTop: 70}}>Save</button></a>
                        </div>
                    </form>
                    </div>
                    </section>
                    </div>
     )
  }
}
const mapStateToProps = (state) => {
    return{
        book: state.book
    }
}
export default connect(mapStateToProps)(Modal)