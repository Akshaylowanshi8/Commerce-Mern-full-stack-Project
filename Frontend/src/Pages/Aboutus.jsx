
import React from 'react';
// import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/solid';
const About=()=>{


return(<>


<div className="container mx-auto mt-8 px-4">
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
            <img src="/team-member-1.jpg" alt="Team Member 1" className="w-full h-auto mb-2 rounded-lg" />
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

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
        <p className="text-lg mb-6">
          Our mission is to empower people with technology and enhance their lives through innovation and exceptional service.
        </p>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>Customer satisfaction is our top priority.</li>
          <li>We believe in transparency and honesty in all our dealings.</li>
          <li>We foster a culture of continuous learning and improvement.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex items-center mb-4 md:w-1/3">
            {/* <LocationMarkerIcon className="h-6 w-6 mr-2 text-gray-600" /> */}
            <p className="text-lg">123 Main Street, City, Country</p>
          </div>
          <div className="flex items-center mb-4 md:w-1/3">
            {/* <PhoneIcon className="h-6 w-6 mr-2 text-gray-600" /> */}
            <p className="text-lg">+123 456 7890</p>
          </div>
          <div className="flex items-center mb-4 md:w-1/3">
            {/* <MailIcon className="h-6 w-6 mr-2 text-gray-600" /> */}
            <p className="text-lg">info@example.com</p>
          </div>
        </div>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
        </form>
      </section>
    </div>
</>)

}


export default About;