import Image from "next/image"
import logo from"../images/store icon.png"
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li ><Image src={logo} width={60} height={60} alt="logo" className="inline"></Image></li>
        <li className="active">
            <a href="/"><label>الرئيسية</label></a>
        </li>
        <li>
            <a href="/products"><label>المنتجات</label></a>
        </li>
        <li>
           <a href="/offres"> <label>العروض</label></a>
        </li>
        <li>
           <a href="/register"> <label> اضافة محل </label></a>
        </li>
      </ul>
      <div>
        <a  href="/login"><FaUserCircle /></a>
      </div>
    </nav>
  )
}

export default Navbar
