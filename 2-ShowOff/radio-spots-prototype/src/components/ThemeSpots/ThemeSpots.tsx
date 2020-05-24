import * as React from 'react';
import { State as ThemeSpotsProps } from '../../state/themeSpots';
import Spot from '../Spot';

import './ThemeSpots.scss';

interface ComponentProps extends ThemeSpotsProps {}

const ThemeSpots: React.FC<ComponentProps> = (props) => {
  const { data: themes, loading, error } = props;

  return (
    <div>
      {
        loading ?
        'Really boring loader :-(' :
        error ?
          error :
          themes.map((theme, index) =>
            <section key={theme.Slug + index} className='spot-list'>
              <div className='spot-list__header'>
                <h2 className='spot-list__headline'>
                  <a href={'/radio/tema/' + theme.Slug}>
                    {
                      theme.IsFeatured && <span className='spot-list__headline__theme-label'>TEMA</span>
                    }
                    { theme.Title }
                  </a>
                </h2>
                <a href={'/radio/tema/' + theme.Slug} className='spot-list__link' aria-hidden='true'>Se alle</a>
              </div>
              <div className={'spot-list__content'}>
                <ul className={'spot-list__spots'}>
                  {
                    theme.Items.map( (spot, index) =>
                      <li key={ spot.Slug + index } className={'spot-list__spot'}>
                        <Spot spot={ spot } />
                      </li>
                    )
                  }
                </ul>
              </div>
            </section>
        )
      }
    </div>
  );
};

export default ThemeSpots;
