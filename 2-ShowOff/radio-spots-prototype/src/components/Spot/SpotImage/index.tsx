import * as React from 'react';

interface ComponentProps {
  primaryImageUri: string;
}

const SpotImage: React.FC<ComponentProps> = (props) => {
  const { primaryImageUri } = props;
  const primaryImagePathname = encodeURIComponent(new URL(primaryImageUri).pathname);

  return (
    <div className='spot-header__image-wrapper'>
      <div className='spot-header__image' style={{backgroundImage: `url(//asset.dr.dk/ImageScaler/?server=www.dr.dk&amp;file=${ primaryImagePathname }&amp;w=320&amp;h=180&amp;scaleAfter=crop&amp;quality=75&amp;ratio=16-9)`}} />
    </div>
  );
};

export default SpotImage;