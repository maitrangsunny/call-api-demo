import React, { Component } from 'react';
class ProductActionPage extends Component {

  	render() {
		return (
			<div className="container">			
				<div className="row">			
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">						
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title">Add new</h3>
						</div>
						<div className="panel-body">
							<form action="" method="POST" role="form">							
							
								<div className="form-group">
									<label>Name:</label>
									<input type="text" className="form-control" id="" placeholder="Name"/>
								</div>
								<div className="form-group">
									<label>Price</label>
									<input type="text" className="form-control" id="" placeholder="Price"/>
								</div>
								<div className="form-group">
									<label>Status</label>							
								</div>
								
								<div className="checkbox">
									<label>
										<input type="checkbox" value=""/>
										Available
									</label>
								</div>
								<button type="submit" className="btn btn-primary">Save</button>
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
