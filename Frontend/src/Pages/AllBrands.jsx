
const AllBrands=()=>{
return(
    <>

<section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">About Our Shop</h1>
        <p className="text-lg mb-6">
          Welcome to our electronic item shop! We specialize in providing the latest mobile phones, laptops, and accessories to meet all your tech needs.
        </p>
        <p className="text-lg mb-6">
          Our mission is to offer high-quality products at competitive prices, along with excellent customer service.
        </p>
        <p className="text-lg mb-6">
          At our shop, we believe in staying ahead with the latest technology trends and providing innovative solutions to our customers.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add team member cards here */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <img src="https://source.unsplash.com/400x400/?person" alt="Team Member 1" className="w-full h-auto mb-2 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-lg">CEO</p>
          </div>
          {/* Add more team member cards */}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our History</h2>
        <p className="text-lg">
          Our shop was founded in 20XX by a group of tech enthusiasts with a vision to make the latest gadgets accessible to everyone.
        </p>
        <p className="text-lg mt-4">
          Over the years, we have grown into a trusted destination for tech enthusiasts, offering a wide range of products and exceptional customer service.
        </p>
      </section>

    </>
)


}

export default AllBrands;