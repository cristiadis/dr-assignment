import * as React from 'react';
import formatDuration from '../../../helpers/formatDuration';
import { Spot as SpotProps } from '../../../state/themeSpots/types';
import { ReactComponent as SoundIcon } from '../../../assets/icons/sound.svg';
import PlayButton from '../../PlayButton';

interface ComponentProps {
  spot: SpotProps;
}

const SpotHeader: React.FC<ComponentProps> = (props) => {
  const { spot } = props;
  const primaryImagePathname = encodeURIComponent(new URL(spot.PrimaryImageUri).pathname);
  const formattedDuration = spot.DurationInMilliseconds && formatDuration(spot.DurationInMilliseconds);
  const isSeries = spot.Type === 'Series' || spot.PresentationType === 'Serie';

  return (
    <div className={`spot-header ${ !isSeries ? 'js-play-trigger' : '' }`}>
      <div className='spot-header__image-wrapper'>
        <div className='spot-header__image' style={{backgroundImage: `url(//asset.dr.dk/ImageScaler/?server=www.dr.dk&amp;file=${ primaryImagePathname }&amp;w=320&amp;h=180&amp;scaleAfter=crop&amp;quality=75&amp;ratio=16-9)`}} />
      </div>
      {
        !isSeries &&
        <>
          <div className='spot-header__sound-icon'>
            <div className='dre-icon dre-icon--medium-xxs' style={{color:'black'}}>
              <SoundIcon />
            </div>
          </div>
          {
            formattedDuration &&
            <div className='spot-header__duration'>{ formattedDuration }</div>
          }
          <div className='spot-header__play-icon'>
            <PlayButton spot={spot} />
          </div>
        </>
      }
    </div>
  );
};

export default SpotHeader;