import React from 'react';



const Card = () => {
    return (
        <div className=' border-[1px] border-white max-w-[400px] inline-block rounded-[16px] p-[24px] flex-col'>
            <div>
                <p
                className='text-[14px]'
                >
                    Title
                </p>
            
            </div>

            <div className='flex flex-row justify-between items-center gap-2 flex-wrap'>
                <h3
                className='font-bold text-[24px]'
                >
                    1,908,099
                </h3>


                <div className='flex items-center gap-[4px]'>

                    <p className='text-[14px]'>+9.08%</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#50E3C2" className="w-5 h-5">
                        <path fillRule="evenodd" d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z" clipRule="evenodd" />
                    </svg>
                </div>

            
            </div>

        </div>
    );
}

export default Card;
