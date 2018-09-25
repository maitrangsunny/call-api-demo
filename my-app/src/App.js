import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (     
		<div>
			<div className="navbar navbar-default">
				<a className="navbar-brand">Call API</a>
				<ul className="nav navbar-nav">
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>List</a>
					</li>
				</ul>
			</div>
			<div className="container">
				
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">						
						<button type="button" className="btn btn-info">Add Product</button>						
						<div className="panel panel-info">
							  <div className="panel-heading">
									<h3 className="panel-title">List</h3>
							  </div>
							  <div className="panel-body">									
									<table className="table table-bordered table-hover">
										<thead>
											<tr>
												<th>No</th>
												<th>ID</th>
												<th>Name</th>
												<th>Price</th>
												<th>Status</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td></td>
												<td></td>
												<td></td>
												<td></td>
												<td>
												<span class="label label-warning">Available</span>
												</td>
												<td>													
													<button type="button" class="btn btn-primary">Edit</button>
													<button type="button" class="btn btn-danger">Delete</button>
													
												</td>
											</tr>
										</tbody>
									</table>
							  </div>
						</div>
					</div>
				</div>
			</div>
		</div> 	
    );
  }
}
export default App;
