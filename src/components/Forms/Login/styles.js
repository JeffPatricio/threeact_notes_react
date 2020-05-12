import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1c8760;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 32%;
`;

export const Title = styled.h2`
  color: #FFF;
  margin-bottom: 20%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
`;

export const Input = styled.input`
	background-color: #fff;
	border-radius: 3px;
	margin-bottom: 5%;
	border: 0;
	width: 85%;
	padding: 10px;
	max-height: 40px;
	font-size: 16px;
`;

export const Submit = styled.button`
	background-color: #1c8760;
	color: #fff;
	border: 1px solid #fff;
  width: 60%;
	padding: 10px;
	margin-top: 10%;
	border-radius: 4px;
	font-weight: bold;
	cursor: pointer;
`;

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  width: 85%;
  margin-top: 10%;
`;

export const Action = styled.p`
   color: #FFF;
   cursor: pointer;
   font-size: 13px;
`;