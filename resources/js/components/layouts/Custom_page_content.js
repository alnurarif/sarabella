import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import parse from 'html-react-parser';
class Custom_page_content extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="full fix">
				<div className="fix div_mid nine_by_ten border_box bg_white pt_10 pb_10 pl_10 pr_10 mt_10 mb_10">
					{(this.props.allState.page.content !== undefined) && parse(`${this.props.allState.page.content}`)}
				</div>
			</div>
		)
	}
}

export default Custom_page_content