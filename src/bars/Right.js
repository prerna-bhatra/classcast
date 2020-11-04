import React,{Fragment} from 'react'
import {Link,withRouter,Redirect} from 'react-router-dom'
import './bar.css'
import  chiken from './images/chiken.jpeg'
import  teddy from './images/teddy.jpeg'
import  user1 from './images/user.jpeg'
import  user2 from './images/user.png'
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
			<Link  to="/notifications">
			<i className="fa fa-bell"></i>
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
		<div className="row" id="data" >
			<div className="col-md-4">
					<h1>6:25</h1>
				<div className="row" id="clockp">
					<div className="col-md-1" id="clock">
					<i className="fa fa-clock-o"></i>
					</div>
					<div className="col-md-6" >
					<p>Hours</p>
					</div>
				</div>
			</div>
			<div className="col-md-4">
					<h1>120</h1>
				<div className="row" id="heartp">
					<div className="col-md-1" id="heart">
					<i className="fa fa-heartbeat"></i>
					</div>
					<div className="col-md-6" >
					<p>NPM</p>
					</div>
				</div>

			</div>
			<div className="col-md-4">
					<h1>1.84</h1>
				<div className="row" id="calp">
					<div className="col-md-1" id="cal">
					<i className="fa fa-apple"></i>
					</div>
					<div className="col-md-6" >
					<p>Kcal</p>
					</div>
				</div>
				
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
				<div className="col-md-2">
					<center>
					<h2>40</h2>
					<p>min</p>
					<p>Warn up</p>
				</center>
			</div>
		</div>
		<div className="row">
			<center><Link><i className="fa fa-ellipsis-h" id="ellipsis"></i></Link></center>
			<h5>Your trainers</h5>
			<div className="row" id="users">
			<div className="col-md-2">
				<img src={user1} id="user"></img>
			</div>
			<div className="col-md-8" id="names">
			<h6>Katrina Kaif</h6>
			<p>Diet Coach</p>
			</div>
			<div className="col-md-2">
				<Link><i className="fa fa-comment "></i></Link>
			</div>
			<div className="col-md-2">
				
			</div>
			</div>
			<div className="row" id="users">
			<div className="col-md-2">
				<img src={user1} id="user"></img>
			</div>
			<div className="col-md-8" id="names">
			<h6>Katrina Kaif</h6>
			<p>Diet Coach</p>
			</div>
			<div className="col-md-2">
				<Link><i className="fa fa-comment "></i></Link>
			</div>
			</div>
		</div>
		</div>
	</div>

	)
	
}



export default Right
















