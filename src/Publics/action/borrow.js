import axios from 'axios'

export const postBorrow = (data,token,idUser) => {
  return {
    type: 'POST_BORROW',
    payload: axios.post(`https://library-apii.herokuapp.com/pinjam`,data,{
      headers:{
        'x-access-token':`bearer ${localStorage.token}`,
        'authorization': 'Allow',
        'x-control-user': localStorage.id
      }
    })
  }
}

export const getBorrows = () => {
  return {
    type: 'GET_BORROWS',
    payload: axios.post(`https://library-apii.herokuapp.com/pinjam/get`,{id:localStorage.id,role:localStorage.role},{
      headers:{
        'x-access-token':`bearer ${localStorage.token}`,
        'authorization': 'Allow',
        'x-control-user': localStorage.id
      }
    })
  }
}

export const getBorrow = (id,token,idUser) => {
  return {
    type: 'GET_BORROW',
    payload: axios.post(`https://library-apii.herokuapp.com/pinjam/get/${id}`, null,{
      headers:{
        'x-access-token':`bearer ${localStorage.token}`,
        'authorization': 'Allow',
        'x-control-user': localStorage.id
      }
    })
  }
}

export const patchBorrow = (data,id,token,idUser) => {
  return{
    type: 'PATCH_BORROW',
    payload: axios.patch(`https://library-apii.herokuapp.com/pinjam/${id}`,data,{
      headers:{
        'x-access-token':`bearer ${localStorage.token}`,
        'authorization': 'Allow',
        'x-control-user': localStorage.id
      }
    })
  }
}