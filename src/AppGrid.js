import React,{ Component } from 'react'
import datas from './data.js'
import App from './App.js'

export default class AppGrid extends Component{
	static defaultProps = {
		datas
	}

	render(){
		return (
				<div>
					<h1> MicroProjects </h1>
					
					<div className="photo-grid">
						{ this.props.datas.map((data,i) => <App key={i} data={data} /> )}
					</div>
				</div>
			)
	}
}