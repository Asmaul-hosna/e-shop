import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
  width: 200vw;
  height: 200vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
      center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center; 
 `
 const Wrapper = styled.div`
 width: 25%;
 padding: 20px;
 background-color: pink;
 `
 const Title = styled.h1`
 font-size: 24px;
  font-weight: 300;
 `
 const Form = styled.form`
 display: flex;
  flex-direction: column;
 `
 const Input = styled.input`
 flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
 `
 const Button = styled.button`
 width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: skyblue;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
 `
 const Link = styled.a`
 margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
 `
const Login = () => {
    return (
        <Container>
          <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>  
        </Container>
    );
};

export default Login;
