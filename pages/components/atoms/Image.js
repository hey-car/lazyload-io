import React from 'react';

// polyfill for IE.
import 'intersection-observer';
import { useInView } from 'react-intersection-observer';

export const Image = ({srcUrl}) => {
    const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '200px' });
    return (
        <div className='image-wrapper'>
            {!inView ? <img src='/loader_2.gif' /> : '' }
            <img ref={ref} src={inView ? srcUrl : ''} />
        </div>
    )
}