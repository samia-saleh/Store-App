import Forminput from "../inputs/Forminput"
import PrimaryButton from "../buttons/primaryButton"
import {Almarai} from "next/font/google"
const almarai=Almarai({subsets:["arabic"],weight:["300","400","700","800"]})

const login = () => {
  return (
    <div className="FormContainer" >
    <form className="form">
      <label className={`FormContainer ${almarai.className}`}>تسجيل الدخول   </label>
      <div className="txtboxContainer">
      <label>رقم الجوال : </label>
      <Forminput Type={"text"}/>
      </div>
      <div className="txtboxContainer">
      <label>  كلمة المرور :</label>
      <Forminput Type={"password"}/>
       </div>
      <PrimaryButton txt={" تسجيل الدخول"}/>
    </form>
  </div>
  )
}

export default login
