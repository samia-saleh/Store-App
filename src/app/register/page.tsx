import Forminput from "../inputs/Forminput"
import PrimaryButton from "../buttons/primaryButton"

const page = () => {
  return (
    <div className="FormContainer" >
      <form className="form">
        <label>تسجيل محل جديد </label>
        <div className="txtboxContainer">
        <label> الاسم :</label>
        <Forminput Type={"text"}/>
         </div>
        <div className="txtboxContainer">
        <label>رقم الجوال : </label>
        <Forminput Type={"text"}/>
        </div>
        <div className="txtboxContainer">
        <label>  كلمة المرور :</label>
        <Forminput Type={"password"}/>
         </div>
        <PrimaryButton txt={"تسجيل"}/>
      </form>
    </div>
  )
}

export default page
