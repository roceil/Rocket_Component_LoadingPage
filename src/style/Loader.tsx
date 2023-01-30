import styled from "styled-components";
// export const Loader = styled.span`
// height: "50px",
// width: "50px",
// .loader:before,
// .loader:after {
//   border-radius: 50%;
//   content: "";
//   display: block;
//   height: 20px;
//   width: 20px;
// }
// .loader:before {
//   animation: ball1 1s infinite;
//   background-color: #fff;
//   box-shadow: 30px 0 0 #ff3d00;
//   margin-bottom: 10px;
// }
// .loader:after {
//   animation: ball2 1s infinite;
//   background-color: #ff3d00;
//   box-shadow: 30px 0 0 #fff;
// }

// @keyframes rotate {
//   0% { transform: rotate(0deg) scale(0.8) }
//   50% { transform: rotate(360deg) scale(1.2) }
//   100% { transform: rotate(720deg) scale(0.8) }
// }

// @keyframes ball1 {
//   0% {
//     box-shadow: 30px 0 0 #ff3d00;
//   }
//   50% {
//     box-shadow: 0 0 0 #ff3d00;
//     margin-bottom: 0;
//     transform: translate(15px, 15px);
//   }
//   100% {
//     box-shadow: 30px 0 0 #ff3d00;
//     margin-bottom: 10px;
//   }
// }

// @keyframes ball2 {
//   0% {
//     box-shadow: 30px 0 0 #fff;
//   }
//   50% {
//     box-shadow: 0 0 0 #fff;
//     margin-top: -20px;
//     transform: translate(15px, 15px);
//   }
//   100% {
//     box-shadow: 30px 0 0 #fff;
//     margin-top: 0;
//   }
// }
// `

export const Loader = styled.span`
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