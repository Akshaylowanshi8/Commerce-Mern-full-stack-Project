const NewArrivals=()=>{
return(<>


<div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      <div className="flex flex-col">
        {/* Cart items */}
      
        {/* End of cart items */}

        {/* Cart summary */}
        <div className="mt-8 bg-white shadow rounded-md p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-semibold">$X.XX</p>
          </div>
          <div className="flex justify-between">
            <a href="#" className="text-gray-600 hover:underline">Continue Shopping</a>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">Checkout</button>
          </div>
        </div>
      </div>
    </div>

</>)
}

export default NewArrivals;
