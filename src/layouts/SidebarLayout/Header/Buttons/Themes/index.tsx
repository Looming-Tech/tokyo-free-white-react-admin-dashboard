import { IconButton, Tooltip } from '@mui/material';
import { useContext, useState } from 'react';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import { ThemeContext } from '../../../../../theme/ThemeProvider';

function HeaderThemes() {
  const themeContext = useContext(ThemeContext);
  const initialTheme = localStorage.getItem('appTheme');

  const [element, setElement] = useState<any>(
    initialTheme === 'PureLightTheme' || !initialTheme ? (
      <LightModeTwoToneIcon />
    ) : (
      <DarkModeTwoToneIcon />
    )
  );

  function getTheme() {
    const appTheme = localStorage.getItem('appTheme');

    switch (appTheme) {
      case 'PureLightTheme': {
        return 'NebulaFighterTheme';
      }
      case 'NebulaFighterTheme': {
        return 'PureLightTheme';
      }
      default: {
        return 'NebulaFighterTheme';
      }
    }
  }

  const handleChange = (): void => {
    const theme = getTheme();
    localStorage.setItem('appTheme', theme);
    themeContext(theme);
    setElement(
      theme === 'PureLightTheme' ? (
        <LightModeTwoToneIcon />
      ) : (
        <DarkModeTwoToneIcon />
      )
    );
  };

  return (
    <>
      <Tooltip arrow title="Theme mode">
        <IconButton color="primary" onClick={handleChange}>
          {element}
        </IconButton>
      </Tooltip>
    </>
  );
}

export default HeaderThemes;
