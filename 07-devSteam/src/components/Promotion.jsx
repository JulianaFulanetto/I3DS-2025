import React from 'react'
import PromoCard from './PromoCard';

const Promotion = () => {
  return (
    <div id="promotion">
        <h2>Promotion</h2>
        <div id= "itensPromo" className='d-flex flex-wrap gap-4 justify-content-around'>
    {/* inserindo cards de promoções */}
            <PromoCard />
            <PromoCard />
            <PromoCard />
        </div>
    </div>
  );
};

export default Promotion;