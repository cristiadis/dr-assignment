import * as React from 'react';
import { Spot as SpotProps } from '../../state/themeSpots/types';
import SpotHeader from './SpotHeader';
import SpotContent from './SpotContent';

import './Spot.scss';

interface ComponentProps {
  spot: SpotProps;
}

const Spot: React.FC<ComponentProps> = (props) => {
  const { spot } = props;
  const isSeries = spot.Type === 'Series' || spot.PresentationType === 'Serie';

  return (
    <li className={'spot-list__spot'}>
      <article className={`spot ${isSeries ? 'spot--series' : '' }`}>
        {
          isSeries ?
            <a
              href={new URL(spot.PresentationUri).pathname}
              className='spot__link'
              aria-label={ spot.Title }
              data-urn={ spot.Urn }
            >
              <SpotHeader spot={spot} />
              <SpotContent spot={spot} />
            </a> :
            <>
              <SpotHeader spot={spot} />
              <a
                href={new URL(spot.PresentationUri).pathname}
                className='spot__link'
                aria-label={`${ spot.ParentTitle } - ${ spot.Title }`}
                data-urn={ spot.Urn }
              >
                <SpotContent spot={spot} />
              </a>
            </>
        }
      </article>
    </li>
  );
};

export default Spot;