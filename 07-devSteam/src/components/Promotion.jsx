import React from 'react'
import PromoCard from './PromoCard';

const Promotion = () => {
  return (
    <div id="promotion">
        <h2>Promotion</h2>
        <div id= "itensPromo">
    {/* inserindo cards de promoções */}
            <PromoCard />
        </div>
    </div>
  );
};

export default Promotion