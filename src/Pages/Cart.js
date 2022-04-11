import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';
import { mobile } from '../responsive';

const Container = styled.div`
`
const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}
`
const Title = styled.div`
font-weight: 800;
text-align: center;
`
const Top = styled.div`
   display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color:${(props) => props.type === "filled" ? "green" : "transparent"};
color:${(props) => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
`
const TopText = styled.span`
 text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`
const Bottom = styled.div`
 display: flex;
 justify-content: space-between;
 ${mobile({ flexDirection: "column" })}
 `
const Info = styled.div`
 flex: 3;

 `
const Product = styled.div`
 display: flex;
 justify-content: space-between;
 ${mobile({ flexDirection: "column" })}
 `
const ProductDetail = styled.div`
 flex: 2;
 display: flex;
 `
const Image = styled.img`
 width: 150px;
 `
const Details = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 `
const ProductName = styled.span`
 `
const ProductId = styled.span`
 `
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color:${(props) => props.color};

 `
const ProductSize = styled.span`
 `
const PriceDetail = styled.span`
 flex: 1;
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 `
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:20px;
 `
const ProductAmount = styled.span`
  font-size: 24px;
   margin: 5px;
   ${mobile({ margin: "5px 15px" })}
  `
const ProductPrice = styled.span`
font-size:30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}
`
const Hr = styled.hr`
 background-color: #eee;
  border: none;
  height: 1px;
`
const Summary = styled.div`
 flex: 1;
 border:0.5px solid lightgrey;
 border-radius: 10px;
 padding: 20px;
 height: 50vh;
 `
const SummaryTitle = styled.h1`
  `
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight:${props=>props.type === "total" && "800"};
font-size:${props=>props.type === "total" && "24px"}
   `
const SummaryItemText = styled.span`
   `
const SummaryItemPrice = styled.span`
   `
const Button = styled.button`
width: 100%;
padding: 10px;
  background-color: green;
  color: white;
  font-weight: 600;

   `
const Cart = () => {
    return (
        <Container>
            <Navber />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.pngitem.com/pimgs/m/109-1093644_sepatu-nike-air-max-png-nike-air-max.png" />
                                <Details>
                                    <ProductName><b>Product:</b>NICK PUZZLE SHOE </ProductName>
                                    <ProductId><b>Id:</b>rt345768898 </ProductId>
                                    <ProductColor color="chocolate" />
                                    <ProductSize><b>Size:</b>36.5 </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIklMJEWMsNF8rZi3zL14_tHm1I3aqGZ1ArS1EfMQtVxvNGC-UTqd5uCUEgonPVl1w-8&usqp=CAU" />
                                <Details>
                                    <ProductName><b>Product:</b>Chicago T-Shirt </ProductName>
                                    <ProductId><b>Id:</b>ut245767098 </ProductId>
                                    <ProductColor color="grey" />
                                    <ProductSize><b>Size:</b>L</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>

            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;