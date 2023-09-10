import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material";
import {
  FooterContiner,
  FooterLeft,
  FooterCenter,
  FooterRight,
} from "../../all-styled";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../../responsive";

const Logo = styled.h1`
margin-bottom: 0;
padding-bottom: 0;
${mobile({
  margin: "5px auto",
})}

${tablet({
  margin: "5px auto",
})}
`;

const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({
    margin: "10px 0px",
  })}

  ${tablet({
    margin: "10px 0px",
  })}
`;
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  ${mobile({
    marginBottom: "15px",
    textAlign: "center",
  })}

  ${tablet({
    marginBottom: "15px",
    textAlign: "center",
  })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <FooterContiner>
      <FooterLeft>
        <Logo>Ecommerce.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </FooterLeft>
      <FooterCenter>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to={"/"} className="clear">
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"/about"} className="clear">
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"/contact"} className="clear">
              Contact
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"/cart"} className="clear">
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"/profile"} className="clear">
              My Account
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"/terms"} className="clear">
              Terms & conditions
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"/policy"} className="clear">
              Privacy policy
            </Link>
          </ListItem>
        </List>
      </FooterCenter>
      <FooterRight>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> imperialit@co.uk
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </FooterRight>
    </FooterContiner>
  );
};

export default Footer;
