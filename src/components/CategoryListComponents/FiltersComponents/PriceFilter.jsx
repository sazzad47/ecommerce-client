import React from 'react'
import Slider from '@mui/material/Slider';
import { Container , Wrapper , Head , HeadButton , HeadTitle , Title , Button ,InputContainer , Input} from './MainStyledComponent';
import { currencySymbol } from '../../../constants';


const PriceFilter = () => {
    const [value, setValue] = React.useState([0,30]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <Container>
        <Wrapper>
            <Head>
                <HeadTitle>
                        <Title>
                            PRICE ({currencySymbol})
                        </Title>
                </HeadTitle>
                <HeadButton>
                        <Button onClick={() => {console.log("ppp")}}>
                            APPLY
                        </Button>
                </HeadButton>
            </Head>
            <div style={{"width" : "90%" , "margin" : "auto"}}>
            <Slider aria-label="Volume" valueLabelDisplay="auto" value={value} onChange={handleChange} />
            </div>
            <InputContainer>
                    <Input disabled value={value[0] + ` ${currencySymbol}`} width="70px"/>
                    <Input disabled value={value[1] + ` ${currencySymbol}`} width="70px"/>
            </InputContainer>
        </Wrapper>
        <hr style={{"width" : "100%" , "margin" : "10px auto"}} />
    </Container>
  )
}

export default PriceFilter