import React,{ Component } from 'react'

export default class App extends Component{

	render(){
		const { data } = this.props
		
		return (
				<figure className="grid-figure">
					<div className="grid-photo-wrap">
						<a href={ data.github }>
							<img src={data.img}  className="grid-photo" />
						</a>
					</div>

					<figcaption>
						<p>{ data.name }</p>
						<div className="control-buttons">
							<a href={ data.url } className="button" target="_blank">DEMO</a>
							<a href={ data.github }className="button" target="_blank">GITHUB</a>
						</div>
					</figcaption>
				</figure>
			)
	}
}