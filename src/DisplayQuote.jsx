import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
      return (
            <div>
                <p>{quote.quote}</p>
                <p>{quote.character}</p>
                <img src={quote.image}  alt=""  />
            </div>
      );
};

export  default  DisplayQuote;
