import 'materialize-css/dist/css/materialize.min.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    .border-radius-6{
        border-radius: 6px !important
    }
    .container{
        width: 100%;
        max-width: 100% !important;
        margin: 0 auto;
        padding: 0 .5rem;
    }
    .row {
        margin-bottom: 0;
    }
    .row .col{
        padding: 0 1rem;
    }
    .login-bg
    {
        background-image: url('flat-bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .ml-4{
        margin-left: 4% !important
    }
    h5 {
        font-size: 1.64rem;
        line-height: 110%;
        margin: 0.82rem 0 0.656rem 0

    }
    .border-round{
        border-radius: 15px;
    }
    .gradient-45deg-purple-deep-orange {
        background: #8e24aa;
        background: -webkit-linear-gradient(45deg, #8e24aa, #ff6e40) !important;
        background: linear-gradient(45deg, #8e24aa, #ff6e40) !important;
    }
`;