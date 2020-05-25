import * as React from 'react';
import './Loader.scss';

interface ComponentProps {
  text?: string;
}

const Loader: React.FC <ComponentProps> = (props) => {
  const { text } = props;

  return (
    <div className='loader' role='alert' aria-label={ text }>
      <div className='loader__icon'>
        <span />
      </div>
      <span className='loader__text'>{ text }</span>
    </div>
  );
};

export default Loader;