import React from 'react'
import styled from 'styled-components';
import { Container , Wrapper , Head , HeadButton , HeadTitle , Title , Button } from './MainStyledComponent';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Rating from '@mui/material/Rating';


const RatingFilter = () => {
    const Nums = [1,2,3,4,5];
    const RatingComponent = (vl) => {
        return(
            <>
            <Rating name="disabled" disabled value={vl}/>
            </>
        );
    }
  return (
    <Container>
        <Wrapper>
                <Head>
                    <HeadTitle>
                            <Title>
                                PRODUCT RATING
                            </Title>
                    </HeadTitle>
                    <HeadButton>
                            <Button>
                                RESET
                            </Button>
                    </HeadButton>
                </Head>
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
          {Nums.map(e => {
              return(
                  <>
                    <FormControlLabel value={e.toString()} control={<Radio />} label={RatingComponent(e)} />
                  </>
              )
          })}
      </RadioGroup>
    </FormControl>
        </Wrapper>
        <hr style={{"width" : "100%" , "margin" : "10px auto"}} />
    </Container>
  )
}

export default RatingFilter