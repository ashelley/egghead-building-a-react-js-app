import React from 'react'
import Router from 'react-router'

export default class SearchGithub extends React.Component {
	getRef(ref) {
		this.userNameRef = ref
	}
	handleSubmit() {
		var username = this.userNameRef.value
		this.userNameRef.value = ''
		this.context.router.push("/profile/" + username)
	}
	render() {
		return (
			<div className="col-sm-12">
				<form onSubmit={() => this.handleSubmit()}> 
					<div className="form-group col-sm-7">
						<input type="text" className="form-control" ref={ref => this.getRef(ref)}/>
					</div>
					<div className="form-group col-sm-5">
						<button type="submit" className="btn btn-block btn-primary">Search Github</button>
					</div>
				</form>
			</div>
		)
	}
}

SearchGithub.contextTypes = {
	router: React.PropTypes.object.isRequired
}