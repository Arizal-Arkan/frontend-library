import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getByEmail } from '../Publics/action/user'
import ModalAlert from '../Screen/modalAlert'

class login extends Component {
  constructor (props) {
    super(props)
    this.state = {
        modal: ''
    }
  }
  setModal = () =>{
    this.setState({ modal: '' })
  }

  login = async (e) => {
    e.preventDefault()
    await this.props.dispatch(getByEmail({
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }))
    if (this.props.user.userList === 'Password Worng') {
        const modal = <ModalAlert show={true} pesan={"Password Worng"} error={true} link={"/login"} setModal={this.setModal} />
        this.setState({ modal: modal })
    } else if (this.props.user.userList === "Email Not Found") {
        const modal = <ModalAlert show={true} pesan={"Email Not Found"} error={true} link={"/login"} setModal={this.setModal} />
        this.setState({ modal: modal })
    } else {
        const modal = <ModalAlert show={true} pesan={"Login Success"} success={true} link={"/book"} setModal={this.setModal}/>
        this.setState({ modal: modal })
    }
}
  
  render(){
      return(
          <div>
            {this.state.modal}
              <div style={{ borderRadius: 5, width: 500, marginLeft: '50%', transform: 'translateX(-50%)', overflow: 'hidden', boxShadow: 'px 0px 1px #ddd', paddingBottom: 20 }}>
                 <div style={{ padding: '10px 40px', width: "100%", boxSizing: 'border-box', boxShadow: '0px 0px 1px #ddd' }}>
                    <h2 textAlign= 'center'>Login</h2>
          </div>
          <div style={{ padding: '10px 40px', width: '100%', overflow: 'hidden', boxSizing: 'border-box', boxShadow: '0px 0px 0.5px #ddd' }}>
            <form onSubmit={this.login}>
            <div>
                <p>Email</p>
                <input style={{ padding: '10px 20px', fontSize: '10pt', borderRadius: 5, border:'1px solid #ddd', width: '100%', boxSizing: 'border-box' }} id={'email'} />
          </div>
          <div>
            <p>Password</p>
            <input type={'password'} style={{ padding: '10px 20px', fontSize: '10pt', borderRadius: 5, border:'1px solid #ddd', width: '100%', boxSizing: 'border-box' }} id={'password'} />                
          </div>
          <div>
            <p></p>
            <button style={{ padding: 15, width: '100%', borderRadius: '5px', border: '0px', backgroundColor: '#000000', color: 'white', fontSize: '15pt', cursor: 'pointer' }}>Login</button>
            <p style={{ textAlign: 'center' }}>Don't Have an Account ? <Link to={'/register'} style={{ textDecoration: 'none', color: '#000000' }}><i>Sign Up</i></Link></p>
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
export default connect(mapStateToProps)(login)