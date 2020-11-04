import React,{Fragment} from 'react'
import {Link,withRouter,Redirect} from 'react-router-dom'
import './bar.css'
import  chiken from './images/chiken.jpeg'
import  teddy from './images/teddy.jpeg'
const Right=()=>{

return (
	<div id="right">
		<div className="right-top">
		<ul>
		<li id="right-top-img">
			<img id="chiken"  src={chiken} ></img>
		</li>
		<li id="right-top-name">
			<h6>Prerna Bhatra</h6>
			<p>Free Account</p>
		</li>
		<li id="bell">
			<Link className="nav-link"  to="/notifications">
			<button><i className="fa fa-bell"></i></button>
					<sup>
						<small className="cart-badge">
							10
						</small>
					</sup>
				</Link>
		</li>
		<li id="icon">
			<button><i className="fa fa-cog "></i></button>
		</li>
		</ul>
		</div> 
		<div className="right-bottom">
		<h4>Health</h4>
		<div className="row">
			<div className="col-md-4">
			<h1>6:25</h1>


			</div>
			<div className="col-md-4">
				<h1>120</h1>
			</div>
			<div className="col-md-4">
				<h1></h1>
			</div>
		</div>
		<div className="row" id="teddy">
			<div className="col-md-4">
			<img src={teddy}></img>
			</div>
			<div className="col-md-8" id="Signup">
			<center>
				<p>Signup for Personal </p>
				<p>trainer to improve </p>
				<p>your results </p>
				<button className="btn ">Signup</button>
			</center>
		</div>
		</div>
		<h5 id="head">Today training</h5>
		<div className="row" id="training">
			<div className="row" >
				<div className="col-md-4">
					<h3>Box</h3>
					<p>Sports Club</p>
					<button className="btn">10:00</button>
				</div>
				<div className="col-md-4" id="warmup">
				<center>
				<h2>40</h2>
				<p>min</p>
				<p>Warn up</p>
				</center>
				</div>
				<div className="col-md-4">
					<center>
				<h2>20</h2>
				<p>min</p>
				<p>Stretch</p>
				</center>
				</div>
			</div>
		</div>
		<div className="row" id="crossfit">
				<div className="col-md-5">
					<h4>Crossfit</h4>
					<p>Sports Club</p>
					<button className="btn">12:00</button>
				</div>
				<div className="col-md-4">
				<center>
				<h2>40</h2>
				<p>min</p>
				<p>Warn up</p>
				</center>

				</div>
				<div className="col-md-3">
				<center>
				<h2>40</h2>
				<p>min</p>
				<p>Warn up</p>
				</center>

				</div>
		</div>
		</div>
	</div>

	)
	
}



export default Right