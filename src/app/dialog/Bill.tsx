// import FileUploade from "../inputs/FileUploade"
"use client"
const Bill = ( ) => {
    return( <div className='Billmodel' dir="rtl">
      
      <div className='modelTitel'>
       <h1>بيانات الفاتورة</h1>
      </div>
      <form>
      <div className='modelBody'>
      <div>
      <label>التاريخ</label>
      <input type='text'></input>
      </div>
       <div>
       <label>رقم الفاتورة</label>
       <input type='text'></input>
       </div>
      <div>
      <label>قيمة الفاتورة</label>
      <input type='text'></input>
      </div>
      <div>
      <label>صورة الفاتورة</label>
      <input type="file"></input>
      </div>
   
      </div>
      </form>
      <button className="submitbutton">تاكيد</button>
       </div>)
  
}

export default Bill
