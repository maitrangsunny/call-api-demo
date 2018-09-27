import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import {Link} from 'react-router-dom';
class ProductActionPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			txtName : "",
			txtPrice: "",
			chbStatus: ''
		}
	}
	componentDidMount(){
		var { match } = this.props;
		if(match){
			var id = match.params.id;
			console.log(id);
			callApi(`products/${id}`,'GET',null).then(res=>{
				var data = res.data
				this.setState({
					id: data.id,
					txtName : data.name,
					txtPrice: data.price,
					chbStatus: data.status
				})
				
			})
		}
	}
	onChange = (e) => {
		var target = e.target,
			name = target.name,
			value = target.type === "checkbox" ? target.checked : target.value;
		this.setState({
			[name] : value
		})
	}
	onSave = (e) => {
		var { history } = this.props;
		var {id, txtName,txtPrice,chbStatus} = this.state;
		e.preventDefault();
		if(id){
			callApi(`products/${id}`,'PUT',{
				name : txtName,
				price: txtPrice,
				status: chbStatus
			}).then(res=>{
				history.goBack();
			});
		}else {
			callApi("products","POST",{
				name:  txtName,
				price: txtPrice,
				status: chbStatus
			}).then(res=>{
				history.goBack();
			})
		}
		
	}
  	render() {
		var {txtName,txtPrice,chbStatus} = this.state;
		var { match, history } = this.props;
		console.log(match);
		return (
			<div className="container">			
				<div className="row">			
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">						
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title">Add new</h3>
						</div>
						<div className="panel-body">
							<form onSubmit= {this.onSave}>							
							
								<div className="form-group">
									<label>Name:</label>
									<input type="text" 
											className="form-control"
											placeholder="Name" 
											name="txtName" 
											value={txtName}
											onChange = {this.onChange}
											/>
								</div>
								<div className="form-group">
									<label>Price</label>
									<input type="text" 
									className="form-control" 
									placeholder="Price" 
									name="txtPrice"
									value={txtPrice}
									onChange = {this.onChange}
									/>
								</div>
								<div className="form-group">
									<label>Status</label>							
								</div>
								
								<div className="checkbox">
									<label>
										<input type="checkbox" 
										value="" name="chbStatus"
										value={chbStatus}
										onChange = {this.onChange}
										checked = {chbStatus}
										/>
										Available
									</label>
								</div>
								<button type="submit" className="btn btn-primary">Save</button>
								<Link to = "/product-list" className="btn btn-default">Cancle</Link>
							</form>
						</div>
						</div>
					</div>
				</div>
			</div>
		)
  	}
}
export default ProductActionPage;
