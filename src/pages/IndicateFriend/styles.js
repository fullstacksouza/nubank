import styled from 'styled-components/native';

export const Container = styled.Modal`
background-color: #FFF
`;

export const CloseModalView = styled.View``;
export const CloseModalContainer = styled.TouchableWithoutFeedback``;

export const CloseButtonText = styled.Text`
  font-size:30px;
`;

export const CloseButton = styled.TouchableOpacity``;

export const TopContent = styled.View`
  padding: 15px 20px 20px;
`;
export const TopText = styled.Text`
padding:10px 10px;
font-size:28px;
font-weight:normal;
`;

export const Strong = styled.Text`
font-weight:bold;
`;

export const OptionsContainer = styled.View`
background:#f7f7f7;
flex:8;
`;
export const OptionContainer = styled.TouchableOpacity`
align-items:center;
flex-direction:row;
padding:26px 15px;
border-bottom-width:1;
border-bottom-color:#cccccc
`;

export const OptionText = styled.Text`
margin-left:20px;
color:#404040;
font-size:18
`;

export const EmailBadge = styled.View`
background:#8d3dc8;
height:40px;
width:40px;
border-radius:20px;
align-content:center;
justify-content:center;
align-items:center;
right:15;
position: absolute
`;
export const EmailBadgeText = styled.Text`
color:#FFF
`;
export const Footer = styled.View`
flex:2;
background:#FFF;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:0 20px
`;

export const InvitedText = styled.Text`
font-size:16px;
color:#222;
font-size:19px

`;

export const ButtonBox = styled.TouchableOpacity`
border:1px #8d3dc8;
height:35px;
width:70px;
justify-content:center;
align-items:center;
border-radius:5
`;
export const ButtonBoxText = styled.Text`
color:#8d3dc8
`;
