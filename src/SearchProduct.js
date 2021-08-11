import React from 'react'
import Header from './Header'

export default function SearchProduct() {
    return (
        <div>
            <Header />
            <h1>Search Products</h1>
            <div className="col-sm-6 offset-sm-3">
            <input className="form-control" type="text" placeholder="Search Product"/>
        </div>
        </div>
    )
}
