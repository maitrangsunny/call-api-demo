import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
      var {product,index} = this.props;
      var statusName = product.status ? 'Available' : 'Sold out';
      var statusClassName = product.status ? 'label-success' : 'label-warning';
        return (        				
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label ${statusClassName} `}>{statusName}</span>
                </td>
                <td>													
                    <button type="button" className="btn btn-primary">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;
