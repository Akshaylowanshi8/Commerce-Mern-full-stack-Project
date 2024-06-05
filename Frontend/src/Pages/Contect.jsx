import { useEffect, useState } from "react";
import axios from "axios";

const Contect=()=>{

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
       
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit =async() => {
        e.preventDefault();
        // Here you can add your logic for form submission, like sending data to a server or processing it in some way
        let api = "http://localhost:8000/Admin/contect"
        await axios.post(api,formData).then((res) => {
            alert(res.data);
            console.log(input);
          
          })
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }; 
    return (
        <>
<div className="container my-12 mx-auto px-2 md:px-4">
  <section className="mb-32">
    <div className="flex justify-center">
      <div className="text-center md:max-w-xl lg:max-w-3xl">
        <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
      </div>
    </div>
    <div className="flex flex-wrap">
      <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
        <div className="mb-3 w-full">
          <label
            className="block font-medium mb-[2px] text-teal-700"
            htmlfor="exampleInput90"
          >
            Name
          </label>
          <input
            type="text"
            className="px-2 py-2 border w-full outline-none rounded-md"
            id="exampleInput90"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="mb-3 w-full">
          <label
            className="block font-medium mb-[2px] text-teal-700"
            htmlfor="exampleInput90"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="px-2 py-2 border w-full outline-none rounded-md"
            id="exampleInput90"
            placeholder="Enter your email address"
            value={formData.email}
              onChange={handleChange}
              required 
          />
        </div>
        <div className="mb-3 w-full">
          <label
            className="block font-medium mb-[2px] text-teal-700"
            htmlfor="exampleInput90" >
            Message
          </label>
          <textarea
            className="px-2 py-2 border rounded-[5px] w-full outline-none"
            defaultValue={""}
            type="text" placeholder="Type your message here..."  
                        id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
          />
        </div>
        <button
        onClick={handleSubmit}
          className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
        >
          Send
        </button>
      </form>
      <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold">Technical support</p>
                <p className="text-neutral-500 ">support@example.com</p>
                <p className="text-neutral-500 ">+1 234-567-89</p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold ">Sales questions</p>
                <p className="text-neutral-500 ">sales@example.com</p>
                <p className="text-neutral-500 ">+1 234-567-89</p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold ">Press</p>
                <p className="text-neutral-500 ">press@example.com</p>
                <p className="text-neutral-500 ">+1 234-567-89</p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold">Bug report</p>
                <p className="text-neutral-500 ">bugs@example.com</p>
                <p className="text-neutral-500">+1 234-567-89</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>



        {/* <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
         
        <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
            className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">

            <div className="text-center pb-6">
                <h1 className="text-3xl">Contact Us!</h1>

                <p className="text-gray-300">
                    Fill up the form below to send us a message.
                </p>
            </div>

            <form onSubmit={handleSubmit} >

                <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="name"
                        name="name"
                       value={formData.name}
                       onChange={handleChange}
                         required 

                         />

                <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required placeholder="Email"


              />

                <input
                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Subject" name="_subject"/>

                <textarea
                        className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Type your message here..."  
                        id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}></textarea>

                <div className="flex justify-between">
                    <input
                        className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit" value="Send ➤"/>
                    <input
                        className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="reset"/>
                </div>

            </form>
        </div>
    </div>
</div>
          */}

    </>
      );

}

export default Contect;


