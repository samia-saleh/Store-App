"use client"
import Bill from "../dialog/Bill"
import Shippin from "../dialog/Shippin"
import Print from "../dialog/Print"

const preparOrder = () => {

  return (
    <div>
      <h1 >تجهيز الطلب</h1>
      <div className="flex gap-x-3 ">
      <button className="submitbutton " >الفاتورة</button>
      <button className="submitbutton" >ارسال الطلب</button>
      <button className="submitbutton" >طباعة عنوان الطلب</button>
      </div>
     <div >
     <Bill/>
      <Shippin />
      <Print />
     </div>

    </div>
  )
}

export default preparOrder
