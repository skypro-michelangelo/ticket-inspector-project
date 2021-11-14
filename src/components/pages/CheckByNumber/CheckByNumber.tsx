import * as React from 'react';
import { Button } from '../../primitives/button/button';
import { Input } from '../../primitives/input/input';
import { useCallback, useState } from 'react';
import { Container } from '../../primitives/container/Container';
import { checkTicketThunk} from '../../../store/thunk';


export function CheckByNumber() {
    const [input, setInput] = useState('')
    const inputChangeHandle = useCallback((e) => {
    setInput(e.target.value)  
  }, [])
  
  const buttonClickHandle = useCallback(() => {
    checkTicketThunk(input)
  }, [input])


 return (
     <Container>
     <Input onChange={inputChangeHandle}/>
      <Button onClick={buttonClickHandle}>Проверить билет</Button>
    </Container>
 
     
  );
}
