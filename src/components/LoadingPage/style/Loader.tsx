import styled from "styled-components";

interface IProps {
  txt: string;
  txtSize: string;
  transitionTime: string;
  fontColor: string;
  loadingColor: string;
}
export const Loader = styled.span.attrs<IProps>((props) => {
  return {
    txt: props.txt,
    txtSize: props.txtSize,
    transitionTime:props.transitionTime,
    fontColor:props.fontColor,
    loadingColor:props.loadingColor
  };
})<IProps>`
font-size: ${props=>props.txtSize};
display: inline-block;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
color: ${props=>props.loadingColor};
letter-spacing: 2px;
position: relative;
box-sizing: border-box;

::after {
content: '${props=>props.txt}';
position: absolute;
left: 0;
top: 0;
color: ${props=>props.fontColor};
text-shadow: 0 0 2px #FFF, 0 0 1px #FFF, 0 0 1px #FFF;
width: 100%;
height: 100%;
overflow: hidden;
box-sizing: border-box;
animation: animloader ${props=>props.transitionTime} linear infinite;
}

@keyframes animloader {
0% {
  height: 100%;
}
100% {
  height: 0%;
}
}
`