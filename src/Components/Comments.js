import React from 'react';
// comment component
const Comments = ({username,comment,commentDate,id}) =>{

return (
	 <div className="ba b--black-10 mt2">
       <div className="flex">
            <img style={{height:'5rem' , width:'5rem'}} 
                 src={`https://robohash.org/${id}`}
                 alt='robohash' />
            <div className="w-100">
            <div className="flex justify-between" >
                <p className='f4 b'>{username}</p> 
                <p className="f6 gray ">{commentDate}</p>
            </div> 
            <p className='w-100 pa4 f5 br3 ba b--silver'> 
             {comment} </p>
            </div>
        </div>
        
        </div>
       
        
    );
}
export default Comments;