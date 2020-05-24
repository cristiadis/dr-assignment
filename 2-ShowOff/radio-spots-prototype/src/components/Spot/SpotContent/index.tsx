import * as React from 'react';
import { Spot as SpotProps } from '../../../state/themeSpots/types';
import Icon from "../../Icon";

interface ComponentProps {
  spot: SpotProps;
}

const SpotContent: React.FC<ComponentProps> = (props) => {
  const { spot } = props;
  const isSeries = spot.Type === 'Series' || spot.PresentationType === 'Serie';
  const channelName = spot.PrimaryChannelSlug && (!spot.PrimaryChannelSlug.match(/special-radio|p6beat/g)) ? spot.PrimaryChannelSlug.slice(0, 2) : spot.PrimaryChannelSlug;

  return (
    <div className='spot-content'>
      <div className='spot-content__sub-title'>{ isSeries ? `Serie (${ spot.NumberOfItems } episoder)`: spot.ParentTitle }</div>
      <h3 className='spot-content__title'>{ spot.Title }</h3>
      <p className='spot-content__description'>{ spot.Description }</p>
      <footer className='spot-content__footer'>
        <div className='spot-content__channel-logo' aria-label={ spot.PrimaryChannelSlug }>
          <div className={`dre-channel-logo dre-channel-logo--channel-${ channelName } dre-channel-logo--x-small-lg dre-channel-logo--x-small-md dre-channel-logo--x-small-sm dre-channel-logo--xx-small-xs dre-channel-logo--xx-small-xxs`}>
            <Icon name={channelName} />
          </div>
        </div>
        <div className='spot-content__genre'>{ spot.OnlineGenreText }</div>
      </footer>
    </div>
  );
};

export default SpotContent;