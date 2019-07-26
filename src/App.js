import React, { Component } from 'react'
import './App.css'
import Nav from './Screen/Navbar'
import Search from './Screen/search'
import Book from './Screen/books'
import Data from './data'
import BookDetail from './Screen/Detail'
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Modal from './Screen/modal'
import store from './Publics/store'
import { Provider } from 'react-redux'
import ModalEdit from './Screen/edit'
import Login from './Screen/login'
import Register from './Screen/register'

export default class App extends Component {
  constructor() {
    super()
    this.state = { Data, show: false }
  }
  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }
  addData = (dataAdded) => {
    this.state.Data.push(dataAdded)
    console.log(this.state.Data)
  }
  deleteData = (deleteData) => {
    console.log(deleteData)
    this.state.Data.splice(deleteData, 1)
  }
  editData = (index, editData) => {
    this.setState(Data[index] = editData)
  }
  render() {
    return (
      <Provider store={store}>
      <div id="app">
        <Router>
          <Redirect exact from="/" to="/book" />
          <Route exact path={"/book"} component={Nav} />
          <Route exact path={"/book"} component={Search} />
          <Route exact path={"/book"} render={() => <Book prop={this.state} showModal={this.showModal} />} />
          <Route exact path={"/book/:bookid"} render={(props) => <BookDetail data={this.state} showModal={this.showModal} deleteData={this.deleteData}{...props} />} />
          <Route exact path={"/book"} render={() => <Modal dataState={this.state} show={this.state.show} handleClose={this.hideModal} dataAdded={this.addData} />} />
          <Route exact path={"/book/:bookid"} render={(props) => <ModalEdit dataState={this.state} show={this.state.show} handleClose={this.hideModal} dataEdited={this.editData} {...props} />} />
          <Route exact path={'/login'} render={() => <Nav />} />
          <Route exact path={'/login'} render={() => <Login />} />
          <Route exact path={'/register'} render={() => <Nav />} />
          <Route exact path={'/register'} render={() => <Register />} />
        </Router>
      </div>
      </Provider>
    )
  }
}
