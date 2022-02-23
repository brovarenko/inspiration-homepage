import React, { useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import styles from './Quote.module.css';

import { selectQuote, selectQuoteStatus, fetchQuotes } from './quoteSlice';

export const Quote = () => {
    const dispatch = useDispatch()
    const quote = useSelector(selectQuote)
   
    const quoteStatus = useSelector(selectQuoteStatus)

    useEffect(() => {
        if (quoteStatus === '') {
          dispatch(fetchQuotes())
        }
      }, [quoteStatus, dispatch])
        
      return( 
          <div className={styles.quoteConteiner} onClick={() => dispatch(fetchQuotes())}>
          <div className={`${styles.quote} ${quoteStatus==="loading"?'':styles.animation}`}> {quote.content}</div>
          <i className={`${styles.author} ${quoteStatus==="loading"?'':styles.animation}`}>-{quote.author}</i>
          
          </div>
          
      )
}

export default Quote;