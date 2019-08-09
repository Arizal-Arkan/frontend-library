import React, { Component } from 'react'
import './App.css'
import Nav from './Screen/Navbar'
import Search from './Screen/search'
import SearchList from './Screen/searchList'
import Book from './Screen/books'
import Data from './data'
import BookDetail from './Screen/Detail'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Modal from './Screen/modal'
import store from './Publics/store'
import { Provider } from 'react-redux'
import ModalEdit from './Screen/edit'
import Login from './Screen/login'
import Register from './Screen/register'
import Pinjam from './Screen/borrow'
import ModalKembalikan from './Screen/ModalKembalikan'
import ModalPinjam from './Screen/ModalBorrow'
import ModalDelete from './Screen/modalDelete'


export default class App extends Component {
  constructor() {
    super()
    this.state = { Data, show: false,modalEdit:false, idPinjam: 0, modalPinjam: false, modalKembalikan: false, modalDelete: false, search: []}
  }
  showModal = () => {
    this.setState({ show: true })
  }
  hideModal = () => {
    this.setState({ show: false })
  }
  showModalEdit = () => {
    this.setState({ modalEdit: true })
  }
  hideModalEdit = () => {
    this.setState({ modalEdit: false })
  }
  showModalDelete = () => {
    this.setState({ modalDelete: true })
  }
  hideModalDelete = () => {
    this.setState({ modalDelete: false })
  }
  showModalPinjam = () => {
    this.setState({ modalPinjam: true })
  }
  hideModalPinjam = () => {
    this.setState({ modalPinjam: false })
  }
  showModalKembalikan = (id) => {
    this.setState({ modalKembalikan: true, idPinjam: id })
  }
  hideModalKembalikan = () => {
    this.setState({ modalKembalikan: false })
  }
  setSearch = (search) => {
    this.setState({ search: search})
    console.log(search)
    
  }
  render() {
    
    return (
      <Provider store={store}>
      <div id="app">
        <Router>
          <Switch>
            <Route exact path={'/'}>
              <Route component={Nav} />
              <Route render={() => <Search setSearch={this.setSearch} />} />
              <Route render={() => <Book showModal={this.showModal} setSearch={this.setSearch} search={this.state.search}/>}/>
              <Route render={() => <Modal show={this.state.show} handleClose={this.hideModal}/>}/>
            </Route>
            <Route path ={'/pinjam'}>
              <Route component={Nav} />
              <Route render={() => <Pinjam showModalKembalikan={this.showModalKembalikan}/>}/>
              {
                this.state.modalKembalikan ?
                  <Route render={() => <ModalKembalikan modalKembalikan={this.state.modalKembalikan} hideModalKembalikan={this.hideModalKembalikan} id_pinjam={this.state.idPinjam}/>}/>
                  : ''
              }
            </Route>
            <Route path={'/login'}>
              <Route render={() => <Nav />}/>
              <Route render={() => <Login />}/>
            </Route>
            <Route path={'/register'}>
              <Route render={() => <Nav />}/>
              <Route render={() => <Register />}/>
            </Route>
            <Route path={'/:bookid'}>
                <Route render={(props) => <BookDetail showModal={this.showModalEdit} showModalDelete={this.showModalDelete} showModalPinjam={this.showModalPinjam} {...props} />} />
                <Route render={(props) => <ModalDelete modalDelete={this.state.modalDelete} hideModalDelete={this.hideModalDelete} {...props} />} />
                <Route render={(props) => <ModalPinjam modalPinjam={this.state.modalPinjam} hideModalPinjam={this.hideModalPinjam} {...props} />} />
                <Route render={(props) => <ModalEdit show={this.state.modalEdit} handleClose={this.hideModalEdit} {...props} />} />
            </Route>
          </Switch>
        </Router>
      </div>
     </Provider>
    )
  }
}
