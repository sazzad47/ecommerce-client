import React from 'react'
import { Container , Wrapper , Head , HeadButton , HeadTitle , Title , Button ,InputContainer , Input} from './MainStyledComponent';

const DiscountFilter = () => {
  return (
    <Container>
        <Wrapper>
            <Head>
                <HeadTitle>
                    <Title>
                        DISCOUNT
                    </Title>
                </HeadTitle>
                <HeadButton>
                    <Button>
                        RESET
                    </Button>
                </HeadButton>
            </Head>
            <InputContainer>
                <Input type={"number"} placeholder={"from"} width="40%"/>
                %
                <Input type={"number"} placeholder={"to"} width="40%"/>
                %
            </InputContainer>
        </Wrapper>
        <hr style={{"width" : "100%" , "margin" : "10px auto"}} />
    </Container>
  )
}

export default DiscountFilter