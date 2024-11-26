import React from 'react'
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { Card } from 'react-bootstrap';

export default function SmallCard() {
  return (
    <div className='flex gap-2'>
       <Card className=' ml-2 my-3 h-72 w-40 align-middle justify-center text-center hover:scale-110'>
       <p className= 'from-neutral-500 text-left pl-1 text-sm'>Ad Spend</p>
       <span className='flex align-middle justify-center'>$ <h2 className='font-bold'>65.37 </h2></span>
       <span className='flex justify-center text-xs font-thin'><IoIosArrowRoundDown />170%</span>  
       <p className= 'text-sm'>vs previous 30 days</p> 
       
    </Card>
   <Card className='ml-2 my-3 h-72 w-40 align-middle justify-center text-center hover:scale-110'>
       <p className= 'from-neutral-500 text-left pl-1 text-sm'>Cost per thousand(CPT)</p>
       <span className='flex align-middle justify-center'>$ <h2 className='font-bold'>3.94 </h2></span>
       <span className='flex justify-center text-xs font-thin'><IoIosArrowRoundDown />$0,45</span>
       <p className= 'text-sm'>vs previous 30 days</p>
        
    </Card>
   <Card className=' ml-2 my-3 h-72 w-40 align-middle justify-center text-center hover:scale-110'>
       <p className= 'from-neutral-500 text-left pl-1 text-sm'>Cost per click(CPC)</p>
       <span className='flex align-middle justify-center'>$ <h2 className='font-bold'>0.15 </h2></span>
       <span className='flex justify-center text-xs font-thin'><IoIosArrowRoundDown />$0.02</span>
       <p className= 'text-sm'>vs pervious 30 days</p>
        
    </Card>
   <Card className=' ml-2 my-3 h-72 w-40 align-middle justify-center text-center hover:scale-110'>
       <p className= 'from-neutral-500 text-left pl-1 text-sm'>Click Through Rate(CTR)</p>
       <span className='flex align-middle justify-center'><h2 className='font-bold'>2.98</h2>%</span>
       <span className='flex justify-center text-xs font-thin'><IoIosArrowRoundUp />7%</span>
       <p className= 'text-sm'>vs pervious 30 days</p>
        
    </Card>
    </div>
  )
}
