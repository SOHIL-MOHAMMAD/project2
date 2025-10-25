import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="Nav flex justify-between container mx-auto p-4">
      <div className="sec1 flex gap-4">
        <div> <Link to='/' className="flex gap-2"><div className="bg-red-800 h-[20px] w-[20px] rounded-2xl"></div> <h1> Nicol Rider </h1> </Link></div>
        <p>Editor</p>
      </div>
      <div className="sec2 ">
        <ul className="flex gap-8">
          <li> <Link to='/resume'>resume</Link>  </li>
          <li> <Link to='/contact'>contact</Link></li>
          <li> <Link to='/project'>project</Link></li>
        </ul>
      </div>      
    </div>
  )
}

export default Navbar
