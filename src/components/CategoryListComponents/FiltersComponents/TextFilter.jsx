import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useContext } from "react";
import {
  Container,
  Wrapper,
  Head,
  HeadTitle,
  Title,
} from "./MainStyledComponent";
import { PropHooks } from "../../../Features";
import { FilterContext } from "../Filter";
const TextFilter = ({ title, id, type }) => {
  const { useProperties } = PropHooks;
  const { propData, propDataLoading } = useProperties(id, type);
  const { setFilter, filter } = useContext(FilterContext);
  const handleChange = (e, prop) => {
    if (e.target.checked) {
      if (filter[title]) {
        setFilter({
          ...filter,
          [title]: [...filter[title], prop.value],
        });
      } else {
        setFilter({
          ...filter,
          [title]: [prop.value],
        });
      }
    } else {
      const selectedValues = filter[title];
      const newValues = selectedValues.filter((val) => val != e.target.name);
      setFilter({
        ...filter,
        [title]: [...newValues],
      });
    }
  };
  return (
    <Container>
      <Head>
        <HeadTitle>
          <Title>{title}</Title>
        </HeadTitle>
      </Head>
      <Wrapper>
        <FormGroup>
          {!propDataLoading
            ? propData?.data.map((prop) => {
                return (
                  <FormControlLabel
                  key={prop.id}
                    control={<Checkbox inputProps={{ "data-key": "type" }} />}
                    label={prop.value}
                    name={prop.value}
                    onChange={(e) => handleChange(e, prop)}
                    checked={
                      filter[title]?.indexOf(prop.value) != -1 &&
                      filter[title] != undefined
                    }
                  />
                );
              })
            : ""}
        </FormGroup>
      </Wrapper>
      <hr style={{ width: "100%", margin: "10px auto" }} />
    </Container>
  );
};

export default TextFilter;
