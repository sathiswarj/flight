import React from 'react'
import './Note.css'
const Note = () =>{
	return(
		<div className="note-div">
         <ul>
           <li><h4>These are the flights only available</h4></li>
           <li>JFK->LHR</li>
           <li>JFK->DEL</li>
           <li>JFK->SYD</li>
           <li>DEL->SYD</li>
           <li>DEL->DOH</li>
           <li>SYD->SIN</li>
           <li>SYD->JFK</li>
            <li>SYD->DEL</li>
           <li>BOM->SIN</li>
            <li>BNE->JFK</li>
           <li>BNE->SYD</li>
            <li>BLR->DEL</li>
         </ul>
		</div>
		)
}

export default Note