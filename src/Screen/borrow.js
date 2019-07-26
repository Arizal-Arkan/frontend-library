import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Col,
  Input
} from 'reactstrap'
import './button.css'
import { postBorrow } from '../Publics/action/borrow'

class Borrow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modal: false,
      borrow: []
    }

    this.toggle = this.toggle.bind(this)
    this.toggleDrop = this.toggleDrop.bind(this)
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }
  toggleDrop () {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render () {
    const borrowAdd = () => {
      this.state.borrow.push({
        cardId: this.state.card_id,
        bookid: this.state.bookid

      })
      add()
      this.setState((prevState) => ({
        modal: !prevState.modal
      }))
      console.log(this.state.book)
    }
    let add = async () => {
      await this.props.dispatch(postBorrow(this.state.borrow[0]))
    }
    return (
      <div>
        <button class='buttonB' onClick={this.toggle}>BORROW
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className='{this.props.className} modal-lg'>
          <ModalHeader toggle={this.toggle}>
            <b>Add Data</b>
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label sm={3} size='lg'>ID KTP
                </Label>
                <Col sm={9}>
                  <Input
                    type='text'
                    name='name'
                    onChange={(e) => this.setState({ cardId: e.target.value })}
                    id='name'
                    placeholder='ID Number...'
                    bsSize='lg'
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={3} size='lg'>ID Book
                </Label>
                <Col sm={9}>
                  <Input
                    type='text'
                    name='name'
                    onChange={(e) => this.setState({ cardId: e.target.value })}
                    id='name'
                    placeholder='ID Book...'
                    bsSize='lg'
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <a href={'/book'}><button class='buttonSave' onClick={borrowAdd.bind(this)}>SAVE
            </button></a>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    borrow: state.borrow
  }
}
export default connect(mapStateToProps)(Borrow)
