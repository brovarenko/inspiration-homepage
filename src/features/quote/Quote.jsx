import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './quote.css';
import { selectQuote, selectQuoteStatus, fetchQuotes } from './quoteSlice';

export function Quote() {
  const dispatch = useDispatch();
  const quote = useSelector(selectQuote);
  const quoteStatus = useSelector(selectQuoteStatus);
  useEffect(() => {
    if (quoteStatus === '') {
      dispatch(fetchQuotes());
    }
  }, [quoteStatus, dispatch]);

  return (
    <div type="button" className="quoteConteiner" onClick={() => dispatch(fetchQuotes())} onKeyPress={() => dispatch(fetchQuotes())} role="button" tabIndex="0">
      <div className={`quote ${quoteStatus === 'loading' ? '' : 'animation'}`}>
        {quote.content}
      </div>
      <i className={`author ${quoteStatus === 'loading' ? '' : 'animation'}`}>
        -
        {quote.author}
      </i>
    </div>
  );
}

export default Quote;
