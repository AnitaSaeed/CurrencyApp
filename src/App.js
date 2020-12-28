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
          <div>
            <div>
            <div>دلار آمریکا</div>
            <div>{currencys.sana.data[0].p}</div>
            <div>{currencys.sana.data[16].p}</div>
            </div>

            <div>
            <div>یورو</div>
            <div>{currencys.sana.data[1].p}</div>
            <div>{currencys.sana.data[17].p}</div>
            </div>
            <div>
            <div>درهم امارات</div>
            <div>{currencys.sana.data[2].p}</div>
            <div>{currencys.sana.data[18].p}</div>
            </div>
            <div>
            <div>روپیه هند</div>
            <div>{currencys.sana.data[3].p}</div>
            <div>{currencys.sana.data[19].p}</div>
            </div>
            <div>
            <div>لیر ترکیه</div>
            <div>{currencys.sana.data[4].p}</div>
            <div>{currencys.sana.data[20].p}</div>
            </div>
            <div>
            <div>روبل روسیه</div>
            <div>{currencys.sana.data[5].p}</div>
            <div>{currencys.sana.data[21].p}</div>
            </div>
            <div>
            <div>یوان چین</div>
            <div>{currencys.sana.data[6].p}</div>
            <div>{currencys.sana.data[22].p}</div>
            </div>
            <div>
            <div>وون کره جنوبی</div>
            <div>{currencys.sana.data[7].p}</div>
            <div>{currencys.sana.data[23].p}</div>
            </div>
            <div>
            <div>فرانک سوئیس</div>
            <div>{currencys.sana.data[8].p}</div>
            <div>{currencys.sana.data[24].p}</div>
            </div>
            <div>
            <div>ین ژاپن</div>
            <div>{currencys.sana.data[9].p}</div>
            <div>{currencys.sana.data[25].p}</div>
            </div>
            <div>
            <div>دلار کانادا</div>
            <div>{currencys.sana.data[10].p}</div>
            <div>{currencys.sana.data[26].p}</div>
            </div>
            <div>
            <div>پوند انگلیس</div>
            <div>{currencys.sana.data[11].p}</div>
            <div>{currencys.sana.data[27].p}</div>
            </div>
            <div>
            <div>کرون سوئد</div>
            <div>{currencys.sana.data[12].p}</div>
            <div>{currencys.sana.data[27].p}</div>
            </div>
            <div>
            <div>کرون نروژ</div>
            <div>{currencys.sana.data[13].p}</div>
            <div>{currencys.sana.data[0].p}</div>
            </div>
            <div>
            <div>دینار عراق</div>
            <div>{currencys.sana.data[14].p}</div>
            <div>{currencys.sana.data[0].p}</div>
            </div>
            <div>دلار کانادا</div>
            <div>{currencys.sana.data[15].p}</div>
            <div>{currencys.sana.data[0].p}</div>
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
