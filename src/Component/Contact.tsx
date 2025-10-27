

const Contact = () => {
  return (
    <div className="h-[90vh] grid justify-center items-center container mx-auto md:mb-0 mb-30">
       <form action="" className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-8 text-lg font-light p-4 " >
        <div className="">
           <div className="mb-2">
            <label htmlFor="" className="">First name</label>
          </div>
          <div>
            <input type="text" className="outline h-10 p-2" />
          </div>
        </div>
        <div>
          <div className="mb-2">
            <label htmlFor="">Last name</label>
          </div>
          <div>
            <input type="text" className="outline h-10 p-2" />
          </div>
        </div>
        <div>
           <div className="mb-2">
            <label htmlFor="">Email</label>
          </div>
          <div>
            <input type="email" className="outline h-10 p-2"/>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <label htmlFor="">Subject</label>
          </div>
          <div>
            <input type="text" className="outline h-10 p-2" />
          </div>
        </div>
        <div className="md:col-span-2 col-span-1">
          <div className="mb-2">
            <label htmlFor="">message</label>
          </div>
          <div>
            <textarea id="message" className="outline h-20 w-full p-2"></textarea>
          </div>
        </div>
        <button className="bg-orange-400 hover:bg-amber-500 h-12 md:col-span-2 col-span-1 font-extrabold border-2 rounded-3xl"> 
          Submit
        </button>
       </form>
    </div>
  )
}

export default Contact
