import React, {useState , useEffect} from 'react'
import './App.css'

function App() {
  const api="https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json"
  
  const[currencys,setCurrencys] = useState([])

  useEffect(() =>{
    fetch(`${api}`)
       .then(res => res.json())
       .then((result) =>{
         setCurrencys(result);
        })
      }
     , [])
  
  return (
    <div className="app">
      <div className="main">
        <div className="header">سامانه نرخ ارز سنا</div>
        <div>
        {(typeof currencys.sana != "undefined") ? 
        (<div>
          <div className="box-body">
            <div className="box">
            <div>دلار آمریکا</div>
            <div>خرید: {currencys.sana.data[0].p}</div>
            <div>فروش: {currencys.sana.data[16].p}</div>
            </div>

            <div className="box">
            <div>یورو</div>
            <div>خرید:{currencys.sana.data[1].p}</div>
            <div>فروش: {currencys.sana.data[17].p}</div>
            </div>
            <div  className="box">
            <div >درهم امارات</div>
            <div>خرید:{currencys.sana.data[2].p}</div>
            <div>فروش: {currencys.sana.data[18].p}</div>
            </div>
            <div className="box">
            <div>روپیه هند</div>
            <div>خرید:{currencys.sana.data[3].p}</div>
            <div>فروش: {currencys.sana.data[19].p}</div>
            </div>
            <div className="box">
            <div>لیر ترکیه</div>
            <div>خرید:{currencys.sana.data[4].p}</div>
            <div>فروش: {currencys.sana.data[20].p}</div>
            </div>
            <div className="box">
            <div>روبل روسیه</div>
            <div>خرید:{currencys.sana.data[5].p}</div>
            <div>فروش: {currencys.sana.data[21].p}</div>
            </div>
            <div className="box">
            <div>یوان چین</div>
            <div>خرید:{currencys.sana.data[6].p}</div>
            <div>فروش: {currencys.sana.data[22].p}</div>
            </div>
            <div className="box">
            <div>وون کره جنوبی</div>
            <div>خرید:{currencys.sana.data[7].p}</div>
            <div>فروش: {currencys.sana.data[23].p}</div>
            </div>
            <div className="box">
            <div>فرانک سوئیس</div>
            <div>خرید:{currencys.sana.data[8].p}</div>
            <div>فروش: {currencys.sana.data[24].p}</div>
            </div>
            <div className="box">
            <div>ین ژاپن</div>
            <div>خرید:{currencys.sana.data[9].p}</div>
            <div>فروش: {currencys.sana.data[25].p}</div>
            </div>
            <div className="box">
            <div>دلار کانادا</div>
            <div>خرید:{currencys.sana.data[10].p}</div>
            <div>فروش: {currencys.sana.data[26].p}</div>
            </div>
            <div className="box">
            <div>پوند انگلیس</div>
            <div>خرید:{currencys.sana.data[11].p}</div>
            <div>فروش: {currencys.sana.data[27].p}</div>
            </div>
            <div className="box">
            <div>کرون سوئد</div>
            <div>خرید:{currencys.sana.data[12].p}</div>
            <div>فروش: {currencys.sana.data[27].p}</div>
            </div>
            <div className="box">
            <div>کرون نروژ</div>
            <div>خرید:{currencys.sana.data[13].p}</div>
            <div>فروش: {currencys.sana.data[0].p}</div>
            </div>
            <div className="box">
            <div>دینار عراق</div>
            <div>خرید:{currencys.sana.data[14].p}</div>
            <div>فروش:</div>
            </div>
            <div className="box">
            <div>دلار استرالیا</div>
            <div>{currencys.sana.data[15].p}</div>
            <div>فروش:</div>
            </div>
            </div>

        </div>
       
        )
        
        : ('')}
        
        </div>
      </div> 
     
    </div>
  );
}

export default App;
