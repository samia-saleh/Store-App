import React from 'react'

const Shippin = () => {
  return (
    <div className='Shippinmodel' dir="rtl">
    <div className='modelTitel'>
     <h1> بيانات الشحن</h1>
    </div>
    <form>
    <div className='modelBody'>
    <div>
    <label>التاريخ</label>
    <input type='text'></input>
    </div>
     <div>
     <label>رقم فاتورة الشحن </label>
     <input type='text'></input>
     </div>
    <div>
    <label> شركة النقل</label>
    <input type='text'></input>
    </div>
    <div>
    <label>صورة الفاتورة</label>
    <input type="file"></input>
    </div>
 
    </div>
    </form>
    <button className="submitbutton">تاكيد</button>
     </div>
  )
}

export default Shippin
