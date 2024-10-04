import React from 'react'

const Print = () => {
  return (
    <div className='Printmodel' dir="rtl">
    <div className='modelTitel'>
     <h1> طباعة العنوان</h1>
    </div>
    <form>
    <div className='modelBody'>
    <div>
    <label>عدد النسخ</label>
    <input type='text'></input>
    </div>
     <div>
     <label> الطابعة </label>
     <input type='text'></input>
     </div>
    </div>
    </form>
    <button className="submitbutton">طباعة</button>
    <button className="submitbutton">مشاركة ملفpdf</button>
     </div>
  )
}

export default Print
