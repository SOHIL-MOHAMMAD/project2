

const Hero = () => {
  return (
    <div className="flex  p-8 justify-center md:gap-12 gap-8 h-screen items-center md:flex-row flex-col container mx-auto">
     <img src="https://plus.unsplash.com/premium_photo-1761297666287-134798741b2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500" className=" md:w-[600px] md:h-[400px] w-[300px] h-[300px]  m-2 rounded-full" alt="" />
     <div className=" tracking-wide p-1 m-8 ">
      <h1 className="text-3xl font-extrabold m-1 ">HEllO</h1>
      <h3 className="text-xl font-bold m-1">A Bit About ME</h3>
      <p className="text-sm leading-8 md:text-lg font-light m-1 mb-14">I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.</p>
     </div>
    </div>
  )
}

export default Hero
