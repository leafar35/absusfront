import styled from 'styled-components';

export const Container = styled.div`
    /*----------------------------------------
    Modern Dashboard
    ------------------------------------------*/
    .chartist-tooltip
    {
        z-index: 10000 !important;
    }

    .total-transaction-tooltip,
    .current-balance-tooltip,
    .user-statistics-tooltip,
    .conversion-ratio-tooltip
    {
        color: #fff;
        background: #7b1fa2;
    }

    .total-transaction-tooltip:before,
    .current-balance-tooltip:before,
    .user-statistics-tooltip:before,
    .conversion-ratio-tooltip:before
    {
        border-top-color: #7b1fa2;
    }

    .card .card-content .card-title i.material-icons
    {
        cursor: pointer;
    }

    .current-balance-container
    {
        position: relative;

        height: 170px;
    }

    .current-balance-container > *
    {
        position: absolute;

        width: 100%;
    }

    #current-balance-donut-chart
    {
        height: 170px;

        -webkit-filter: drop-shadow(0px 10px 4px rgba(133, 3, 168, .2));
                filter: drop-shadow(0px 10px 4px rgba(133, 3, 168, .2));
    }

    #current-balance-donut-chart .ct-series-a .ct-slice-donut
    {
        stroke: #ff4bac;
    }

    #current-balance-donut-chart .ct-series-b .ct-slice-donut
    {
        stroke: #f6f6f6;
    }

    .total-transaction-container
    {
        position: relative;

        height: 240px;
    }

    .total-transaction-container > *
    {
        position: absolute;

        width: 100%;
    }

    #total-transaction-line-chart
    {
        height: 240px;
    }

    #total-transaction-line-chart .ct-series-a.ct-series .ct-line
    {
        stroke: #0CC162 !important;
        stroke-width: 3px;
    }

    #total-transaction-line-chart .ct-series-a .ct-point
    {
        fill: transparent;
        stroke: transparent;
    }

    #total-transaction-line-chart .ct-series-a .ct-point:hover
    {
        fill: url(#lineLinearStats) !important;
        stroke-width: 4;
        stroke: #fff;
    }

    #total-transaction-line-chart .ct-series-a .ct-point-circle
    {
        fill: #fff;
        stroke-width: 4;
        stroke: #7b1fa2;
    }

    #total-transaction-line-chart .ct-grid
    {
        stroke: rgba(0, 0, 0, .05);
        stroke-width: 1px;
        stroke-dasharray: 0;
    }

    .total-transaction-shadow
    {
        -webkit-filter: drop-shadow(0px 30px 4px rgba(133, 3, 168, .25));
                filter: drop-shadow(0px 30px 4px rgba(133, 3, 168, .25));
    }

    .user-statistics-card .collection .collection-item
    {
        min-height: auto;
    }

    .user-statistics-container
    {
        position: relative;

        height: 150px;
    }

    .user-statistics-container > *
    {
        position: absolute;

        width: 100%;
    }

    #user-statistics-bar-chart
    {
        height: 150px;

        -webkit-filter: drop-shadow(4px 10px 4px rgba(133, 3, 168, .2));
                filter: drop-shadow(4px 10px 4px rgba(133, 3, 168, .2));
    }

    #user-statistics-bar-chart .ct-series-a .ct-bar
    {
        stroke: url(#barGradient1);
    }

    #user-statistics-bar-chart .ct-series-a .ct-slice-pie
    {
        fill: #ff4bac;
    }

    #user-statistics-bar-chart .ct-series-b .ct-bar
    {
        stroke: url(#barGradient2);
    }

    #user-statistics-bar-chart .ct-series-b .ct-slice-pie
    {
        fill: #8133ff;
    }

    .recent-buyers-card .collection
    {
        border: none;
    }

    .recent-buyers-card .collection .collection-item
    {
        min-height: auto;
        padding-left: 55px;

        border-bottom: none;
    }

    .recent-buyers-card .collection .collection-item.avatar:not(.circle-clipper) > .circle
    {
        left: 0;
    }

    .recent-buyers-card .collection .collection-item.avatar .secondary-content
    {
        right: 0;

        color: #3f51b5;
    }

    #conversion-ration-bar-chart
    {
        -webkit-filter: drop-shadow(0px 20px 10px rgba(129, 51, 255, .4));
                filter: drop-shadow(0px 20px 10px rgba(129, 51, 255, .4));
    }

    #conversion-ration-bar-chart .ct-series-a .ct-bar
    {
        stroke: url(#barGradient2);
    }

    #conversion-ration-bar-chart .ct-series-b .ct-bar
    {
        stroke: url(#barGradient1);
    }

    #conversion-ration-bar-chart .ct-series-c .ct-bar
    {
        stroke: #e4e4e4;
    }

    .subscriber-list-card table th
    {
        font-size: .9rem;
        font-weight: 800;

        text-transform: uppercase;
    }

    .subscriber-list-card table td:first-child,
    .subscriber-list-card table th:first-child
    {
        padding: 15px 5px 15px 25px;
    }

    .subscriber-list-card table td:last-child,
    .subscriber-list-card table th:last-child
    {
        padding: 15px 25px 15px 5px;
    }

    #user-statistics-bar-chart .ct-series-a .ct-slice-pie
    {
        -webkit-animation: barChart .2s forwards ease-in;
                animation: barChart .2s forwards ease-in;
        -webkit-animation-delay: .9s;
                animation-delay: .9s;

        opacity: 0;
    }

    #user-statistics-bar-chart .ct-series-b .ct-slice-pie
    {
        -webkit-animation: barChart .2s forwards ease-in;
                animation: barChart .2s forwards ease-in;
        -webkit-animation-delay: .9s;
                animation-delay: .9s;

        opacity: 0;
    }

    @-webkit-keyframes barChart
    {
        to
        {
            opacity: 1;
        }
    }

    @keyframes barChart
    {
        to
        {
            opacity: 1;
        }
    }

    .vertical-modern-menu .vertical-modern-dashboard
    {
        margin-top: 28px;
    }

    body:not(.vertical-modern-menu) .content-wrapper-before.blue-grey.lighten-5
    {
        background-color: transparent !important;
    }

`;