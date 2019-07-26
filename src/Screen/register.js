import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../Publics/action/user'
import ModalAlert from '../Screen/modalAlert'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: ''
    }
  }
    setModal = () => {
      this.setState({ modal: '' })
    }
    register = async (e) => {
      e.preventDefault()
      if(document.getElementById('password').value === document.getElementById('confirm_password').value) {
        await this.props.dispatch(register({
          no_ktp: document.getElementById('no_ktp').value,
          fullname: document.getElementById('nama_lengkap').value,
          email: document.getElementById('email').value,
          password: document.getElementById('password').value
        }))
      } else {
        const modal = <ModalAlert show={true} pesan={' Password and confirm password must be the same'} error={true} link={'/register'} setModal={this.setModal} />
        this.setState({ modal: modal })
      }
      if (this.props.user.userList.code === 'ER_DUP_ENTRY') {
        const modal = <ModalAlert show={true} pesan={'Sorry the email is registered, please enter a new one'} error={true} link={'/register'} setModal={this.setModal} />
        this.setState({ modal: modal })
      } else {
        const modal = <ModalAlert show={true} pesan={'Sign Up Successful'} success={true} link={'/'} setModal={this.setModal} />
        this.setState({ modal: modal })
      }
    }

  render () {
    return (
      <div>
        {this.state.modal}
        <div style={{ marginBottom: 100, borderRadius: 5, width: 500, marginLeft: '50%', transform: 'translateX(-50%)', overflow: 'hidden', boxShadow: 'px 0px 1px #ddd', paddingBottom: 20 }}>
          <div style={{ padding: '10px 40px', width: '100%', boxSizing: 'border-box', boxShadow: '0px 0px 1px #ddd' }}>
            <h2>Sign Up</h2>
          </div>
          <div style={{ padding: '10px 40px', width: '100%', overflow: 'hidden', boxSizing: 'border-box', boxShadow: '0px 0px 0.5px #ddd' }}>
            <form onSubmit={this.register}>
            <div>
              <p>Nomor KTP</p>
              <input style={{ padding: '10px 20px', fontSize: '10pt', borderRadius: 5, border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} id={'no_ktp'} required />
            </div>
            <div>
              <p>Nama Lengkap</p>
              <input style={{ padding: '10px 20px', fontSize: '10pt', borderRadius: 5, border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} id={'nama_lengkap'} required />
            </div>
            <div>
              <p>Email</p>
              <input style={{ padding: '10px 20px', fontSize: '10pt', borderRadius: 5, border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} id={'email'} required />
            </div>
            <div>
              <p>Password</p>
              <input style={{ padding: '10px 20px', fontSize: '10pt', borderRadius: 5, border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} id={'password'} required />
            </div>
            <div>
              <p>Confirm Password</p>
              <input style={{ padding: '10px 20px', fontSize: '10pt', borderRadius: 5, border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} id={'confirm_password'} required />
            </div>
            <div>
              <p />
              <button style={{ padding: 15, width: '100%', borderRadius: '5px', border: '0px', backgroundColor: '#000000', color: 'white', fontSize: '15pt', cursor: 'pointer' }}>Sign Up</button>
              <p style={{ textAlign: 'center' }}>Already Have Account ? <Link to={'/login'} style={{ textDecoration: 'none', color: '#000000' }}><i>Login</i></Link></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(Register)