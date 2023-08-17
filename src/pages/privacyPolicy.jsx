import { styled } from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:2rem 2rem;
  align-items:center;
`

const Caption1 = styled.div`
  color:#ff4d4d;
  font-size:1.75rem;
  font-weight:600;
  text-align:center;
`
const Caption2 = styled.div`
  color:#fff;
  margin-top:0.5rem;
  font-weight:500;
  font-size:1.1rem;
`

const Banner = styled.div`
  background-color:#ff4d4d;
  padding: 0.5rem 2rem;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`

const Section1 = styled.div`
  background-color:#f6f1eb;
  padding:2rem;
  padding-top:0rem;
`

const Red = styled.span`
  color:#ff4d4d;
`

const RedLarge = styled.span`
  color:#ff4d4d;
  font-weight:600;
  font-size:1.1rem;
`

const PrivacyPolicy = () => {
  return (
    <>
      <Header/>
      <Container>
        <Caption1>Privacy Policy and Terms & Conditions</Caption1>
        
      </Container>
      <Banner><Caption2>VediHeal</Caption2></Banner>
      <Section1>
        <p>The privacy policy outlines how <Red>"Vediheal"</Red> uses and protects any information provided by users on its website.</p>
        
        <p> <Red>"Vediheal"</Red> is committed to ensuring that your privacy is protected. Should we request for certain information to identify you on your next visit, you can be assured that it will only be used in accordance with this privacy statement.</p>
        
        <p><Red>"Vediheal"</Red> may change this policy from time to time by updating this page. You should check this page to ensure that you are happy with the changes.</p>
        <RedLarge>What we collect</RedLarge>
        <ul>
          <li>Name and Address for Delivery</li>
          <li>Contact information including email address</li>
          <li>Other information relevant to customer surveys and/or offers</li>
        </ul>
        <RedLarge>What we do with the information we gather</RedLarge>
        <p>We require this information primarily to provide better service by understanding your needs along with the following reasons:</p>
        <ul>
          <li>Internal record keeping</li>
          <li>Improvement of our services and products</li>
          <li>Marketing purposes to send periodically promotional emails about new products, special offers or other information of interest to you. We may contact you by email or phone for the same.</li>
        </ul>
        <RedLarge>Security</RedLarge>
        <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure this information.</p>
        <RedLarge>Controlling your personal information</RedLarge>
        <p>You may choose to restrict sharing or use of your personal information in the following ways:</p>
        <ul>
          <li>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information from time-to-time about third parties which might be of interest to you, provided you express the same to us.</li>
        </ul>
      </Section1>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;