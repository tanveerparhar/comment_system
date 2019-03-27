//Article page
import React from 'react';
import CommentList from "./CommentList";
const Article = ({username,routeChange,commentEnter,commentEnter2,postIt,sortRecentComments,list,sortrecentbuttonclicked,listsorted}) =>{
	//console.log(comment)
	
	//console.log('article sbc',sortrecentbuttonclicked,list)

	const d = new Date().toDateString();
return (
	<div className="bg-washed-green">
	<div className="flex w-100 space-between  mb0">
	<p className='f3 b pa3 bg-light-gray w-100'>Article</p>
	  <p className=" f3 bg-light-gray link dim black underline pa3 pointer" 
	     onClick={() => routeChange('home')} >Home</p>
      </div>
      <p className ="pa2">
      		<strong>The Photo-Secession</strong><br/>
			At the turn of the 20th century, one of the most influential Pictorialist groups was the Photo-Secession, founded in New York City in 1902 by photographer Alfred Stieglitz. The Secession’s name was taken from the avant-garde secessionist movements in Europe that sought to differentiate themselves from what they considered outmoded ways of working and thinking about the arts. With the help of Edward Steichen, Stieglitz opened the Little Galleries of the Photo-Secession—popularly known as “291” after its address on Fifth Avenue—which exhibited the work of Modernist painters and sculptors as well as that of photographers who used a wide variety of printing processes, including gum-bichromate and bromoil printing. These procedures required considerable handwork and resulted in one-of-a-kind prints that in
			Dunes, Oceano, photograph by Edward Weston, 1936.
			Dunes, Oceano, photograph by Edward Weston, 1936.
			© Edward Weston
	  </p>
        <div className="flex">
        	<img style={{height:'6rem' , width:'6rem'}}
        	//robohash api to generate robotic images on demand 
        	     src={`https://robohash.org/${username}`} 
        	     alt='robohash' />
            <div className="w-100">
        	<div className="flex justify-between" >
	        	<p className='f3 b ttu'>{username}</p> 
	        	<p className="f5 gray ">{d}</p>
        	</div> 
            <input     onChange={commentEnter}
                       onKeyPress={commentEnter2} //for keypress (to be made)
                       className='w-100 pa3 f4 dim br3 ba b--silver' 
             	       type ="text" 
             	       placeholder="enter here"/>
            </div>
        </div>
        <div className='flex justify-end'>
        <button  onClick={postIt} //calls  function to ppost comment
                 className=" mt2 pl3 pr3 pt2 pb2 br4 bg-light-blue pointer link">
                      Post it</button>
        </div>
        <h2 className="bt bb w-100">All comments</h2>
        <button onClick={sortRecentComments}
                className="br2 pointer">most recent</button>
       {
         //sorting to be improved
       	sortrecentbuttonclicked === true ? <CommentList list ={list} 
                     />:
                     <CommentList  
                     list={listsorted}/>}
   }
        </div>
    );
}
export default Article;