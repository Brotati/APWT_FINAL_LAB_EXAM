<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //
    function addProduct(Request $req)
    {

        $product= new Product;
        $product->name=$req->input('name');
        $product->description=$req->input('description');
        $product->price=$req->input('price');
        $product->file_path=$req->file('file')->store('Products');
        $product->save();
        return $product;
    }
}
