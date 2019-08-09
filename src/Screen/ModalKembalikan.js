import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBorrow, patchBorrow } from '../Publics/action/borrow'
class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            borrow: []
        }
    }
    componentDidMount = async () => {
        await this.props.dispatch(getBorrow(this.props.id_pinjam,localStorage.token,localStorage.id))
        this.setState({ borrow: this.props.borrow.borrowList.result })
        
        let dateExpired = new Date(Date.parse(this.state.borrow.expired_at))
        let dateReturn = new Date()
        let denda = 0

        if(dateReturn > dateExpired){
            const diffTime = (Date.UTC(dateReturn.getFullYear(), dateReturn.getMonth(), dateReturn.getDate()) - Date.UTC(dateExpired.getFullYear(), dateExpired.getMonth(), dateExpired.getDate()) )
            const diffDays = diffTime / (1000 * 60 * 60 * 24)
            denda = diffDays * 2000
        }
        console.log('dwweee',this.props.id_pinjam)
        
        await this.props.dispatch(patchBorrow({denda:denda}, this.props.id_pinjam,localStorage.token,localStorage.id))
        await this.props.dispatch(getBorrow(this.props.id_pinjam,localStorage.token,localStorage.id))
        this.setState({ borrow: this.props.borrow.borrowList.result })
    }
    kembalikan = () =>{
        console.log(this.state.borrow.id_book)
        this.props.dispatch(patchBorrow({status:false,id_book:this.props.borrow.borrowList.result[0].id_book,returned_at:new Date()}, this.props.id_borrow,localStorage.token,localStorage.id))
        this.props.hideModalKembalikan()
    }
    render() {
        const borrow = this.props.borrow.borrowList.result[0]
        console.log(this.props.borrow.borrowList.result)
        
        return (
            <div className={this.props.modalKembalikan ? "modal display-block" : "modal display-none"}>
                <section className="modal-main">
                    <button onClick={this.props.hideModalKembalikan} className={'close'}>X</button>
                    <p>{`Kembalikan`}</p>
                    <div style={{ marginBottom: 100 }}>
                        <div className="inputGroup">
                            <div className="label">
                                <p>Card ID</p>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Card ID ..." id={'card_id'} disabled value={borrow ? borrow.card_id : ""} name="card_id" />
                            </div>
                        </div>
                        <div className="inputGroup">
                            <div className="label">
                                <p>Nama Peminjam</p>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="Name ..." disabled value={borrow ? borrow.name : ""} id={'name'} name="name" />
                            </div>
                        </div>
                        <div className="inputGroup">
                            <div className="label">
                                <p>Denda</p>
                            </div>
                            <div className="input">
                                <input type="text" disabled value={borrow ? borrow.penalty : ""} name="denda" />
                            </div>
                        </div>
                        <div>
                            <button className="save" onClick={this.kembalikan}>Kembalikan</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        borrow: state.borrow,
    }
}
export default connect(mapStateToProps)(Modal)