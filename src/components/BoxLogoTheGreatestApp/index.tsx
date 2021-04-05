import React from 'react';
import { Box_Logo, Div, MarkupBox, Text_Lottery, Text_TheGreatestApp, Text_For } from './styles';

const BoxLogoTheGreatestApp: React.FC = () => {

  return (
    <>
      <Box_Logo>
        <Div>
          <Text_TheGreatestApp>The</Text_TheGreatestApp>
          <Text_TheGreatestApp>Greatest</Text_TheGreatestApp>
          <Text_TheGreatestApp>App</Text_TheGreatestApp>
        </Div>
        <MarkupBox>
          <Text_For>for</Text_For>
        </MarkupBox>
        <Text_Lottery>Lottery</Text_Lottery>
      </Box_Logo>
    </>
  );
}

export default BoxLogoTheGreatestApp;
