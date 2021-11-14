import * as React from 'react';
import { ButtonsBlock } from '../../ButtonsBlock/ButtonsBlock';
import { Header } from '../../primitives/Header/Header';
import { Scanner } from '../../primitives/scanner/scanner';
import { Text } from '../../primitives/text/text';
import { Title } from '../../primitives/title/title';

export const CheckByQrCode = () => {
  return (
    <div>
        <Scanner/>
        <Text>Наведите камеру на QR-код</Text>
    </div>
      
  );
}
