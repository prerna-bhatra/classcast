import React from  'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Right from './bars/Right'
import Left from './bars/Left'
import Common from './Common'
import  './bars/bar.css'


const Routes=()=>{
	return (
		<BrowserRouter>
		<div id="bars" className="container" >
			<div className="row">
			<div className="col-md-2">
				<Left/>
			</div>
			<div className="col-md-6">
				<Common/>
			</div>
			<div className="col-md-4">
				<Right/>
			</div>
			</div>
		</div>
			<Switch>
		
			</Switch>
		</BrowserRouter>
		)
}


export default Routes;