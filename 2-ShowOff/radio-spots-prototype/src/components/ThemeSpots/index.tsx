import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchThemeSpots } from '../../state/themeSpots';
import { RootState } from '../../store';
import ThemeSpots from './ThemeSpots';

const ThemeSpotsContainer: React.FC = () => {
  const themes = useSelector((state: RootState) => state.themeSpots.data);
  const loading = useSelector((state: RootState) => state.themeSpots.loading);
  const error = useSelector((state: RootState) => state.themeSpots.error);
  const dispatch = useDispatch();

  // Fetch the theme spots when the component is mounted
  useEffect(() => {
    dispatch(fetchThemeSpots());
  }, [dispatch]);

  return (
    <ThemeSpots data={ themes } loading={ loading } error={ error } />
  );
};

export default ThemeSpotsContainer;