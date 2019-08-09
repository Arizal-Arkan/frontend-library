import React, { Component } from 'react'
import { connect } from 'react-redux'
import { patchBook } from '../Publics/action/book'
import { getCategory } from '../Publics/action/category'
import { getBookById } from '../Publics/action/book'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: [],
            book:[]
        }
    }
    componentDidMount = async () => {
        await this.props.dispatch(getCategory())
        await this.props.dispatch(getBookById(this.props.match.params.bookid))
        console.log(this.props.match.params.bookid)
        this.setState({
            category: this.props.category,
            book:this.props.book.bookList.result
        })
    }
    changeHandle = (e) =>{
        const name = e.currentTarget.name
        const val = e.currentTarget.value
        this.state.book[name] = val
        this.setState({book:this.state.book})
    }
    update = () => {
        this.props.dispatch(
            patchBook(
                {
                    name: document.getElementById('name').value,
                    image_url: document.getElementById('image_url').value,
                    writer: document.getElementById('writer').value,
                    description: document.getElementById('description').value,
                    location: document.getElementById('location').value,
                    category: document.getElementById('category').value
                }
                ,this.props.match.params.bookid
            )
        )
        this.props.handleClose()
    }
    render() {
        const category = this.state.category.categoryList
        console.log(this.state.book)
        return (
            <div className={this.props.show ? "modal display-block" : "modal display-none"}>
                <section className="modal-main">
                    <button onClick={this.props.handleClose} className={'close'}>X</button>
                    <p>{`Edit Data`}</p>
                    <div>
                        <div className="inputGroup">
                            <div className="label">
                                <p>Url Image</p>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Url Image ..." id={'image_url'} name="image_url" value={this.state.book[0] ? this.state.book[0].image_url:""} onChange={this.changeHandle}  required />
                            </div>
                        </div>
                        <div className="inputGroup">
                            <div className="label">
                                <p>Title</p>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Title ..." id={'name'} name="title" value={this.state.book[0] ? this.state.book[0].name:""} required />
                            </div>
                        </div>
                        <div className="inputGroup">
                            <div className="label">
                                <p>Writer</p>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Writer ..." id={'writer'} name="writer" value={this.state.book[0] ? this.state.book[0].writer:""} onChange={this.changeHandle} required />
                            </div>
                        </div>
                        <div className="inputGroup">
                            <div className="label">
                                <p>Location</p>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Location ..." id={'location'} name="location" value={this.state.book[0] ? this.state.book[0].location:""} onChange={this.changeHandle} onChange={this.changeHandle} required />
                            </div>
                        </div>
                        <div className="inputGroup">
                            <div className="label">
                                <p>Category</p>
                            </div>
                            <div className="input">
                                <select id={'category'} name="category" onChange={this.changeHandle}>
                                    {!category ? "" : category.result.map((item, index) => {
                                        return (
                                            item.category_id === this.state.book.bookid?
                                            <option selected value={item.category_id}>{item.name}</option>:<option value={item.category_id}>{item.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="inputGroup">
                            <div className="label">
                                <p>Description</p>
                            </div>
                            <div className="input">
                                <textarea placeholder="Description" id={'description'} rows="5" name="description" value={this.state.book[0] ? this.state.book[0].description:""} onChange={this.changeHandle} required></textarea>
                            </div>
                        </div>
                        <div>
                            <button className="save" onClick={this.update}>Save</button>
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