import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ModalAlert (props) {
  const [show, setShow] = useState(props.show)
  const close = () => {
    setShow(false)
    props.setModal()
  }
  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section className='modal-main'>
        <div>
          <div className='inputGroup'>
            <p className='confirmation'> {props.pesan} </p>
            {props.success ? <img src={'https://cdn.onlinewebfonts.com/svg/img_87563.png'} alt={'Success'} style={{ width: '300px', marginLeft: '50%', transform: 'translate(-50%)' }} />
              : props.error ? <img src={'https://image.flaticon.com/icons/svg/9/9188.svg'} alt={'Error'} style={{ width: '300px', marginLeft: '50%', transform: 'translate(-50%)' }} />
                : <img src={'https://cdn.onlinewebfonts.com/svg/img_87563.png'} alt={'Register'} style={{ width: '300px', marginLeft: '50%', transform: 'translate(-50%)' }} />}
          </div>
          <div>
            <Link to={props.link}><button className='delete' onClick={close} style={{ marginRight: '10px' }}>Ok</button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ModalAlert
