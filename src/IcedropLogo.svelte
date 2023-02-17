<div class="logo-workshop">
    <div id="logo">
        <div id="tl_transform">
            <div id="icedrop_topleft" class="logo-part"></div>
        </div>
        <div id="tr_transform">
            <div id="icedrop_topright" class="logo-part"></div>
        </div>
        <div id="bl_transform">
            <div id="icedrop_bottomleft" class="logo-part"></div>
        </div>
        <div id="br_transform">
            <div id="icedrop_bottomright" class="logo-part"></div>
        </div>
        <div id="bc_transform">
            <div id="icedrop_bottomcenter" class="logo-part"></div>
        </div>
    </div>
</div>

<style>

    #logo {
        transform: translate(-190px) scale(1.5);
    }

    #icedrop_topleft {
        position: absolute;
        width: 0;
        height: 0;
        border-bottom: 130px solid white;
        border-left: 100px solid transparent;
        transform: skewX(0deg) skewY(-13deg);
    }

    @keyframes tl_move {
        0% {transform: translate(0)}
        50% {transform: translate(-5px, -5px)}
        0% {transform: translate(0)}
    }

    #tl_transform {
        animation: tl_move 2.5s alternate infinite ease-in-out;
    }

    @keyframes tr_move {
        0% {transform: translate(0)}
        50% {transform: translate(5px, -5px)}
        0% {transform: translate(0)}
    }

    #tr_transform {
        animation: tr_move 2.5s alternate infinite ease-in-out -2s;
    }

    @keyframes br_move {
        0% {transform: translate(0)}
        50% {transform: translate(5px, 5px)}
        0% {transform: translate(0)}
    }

    #br_transform {
        animation: br_move 2.5s alternate infinite ease-in-out -1.5s;
    }

    @keyframes bc_move {
        0% {transform: translate(0)}
        50% {transform: translate(0px, 7.5px)}
        0% {transform: translate(0)}
    }

    #bc_transform {
        animation: bc_move 2.5s alternate infinite ease-in-out -1s;
    }

    @keyframes bl_move {
        0% {transform: translate(0)}
        50% {transform: translate(-5px, 5px)}
        0% {transform: translate(0)}
    }

    #bl_transform {
        animation: bl_move 2.5s alternate infinite ease-in-out -0.5s;
    }

    #icedrop_topright {
        position: absolute;
        width: 0;
        height: 0;
        border-bottom: 130px solid white;
        border-right: 100px solid transparent;
        transform: translate(110px) skewX(0deg) skewY(13deg);
    }

    #icedrop_bottomleft {
        position: absolute;
        width: 0;
        height: 0;
        border-top: 65px solid white;
        border-right: 110px solid transparent;
        transform: translate(16px, 140px) skewX(35deg) skewY(-11deg);
    }

    #icedrop_bottomright{
        position: absolute;
        width: 0;
        height: 0;
        border-top: 65px solid white;
        border-left: 110px solid transparent;
        transform: translate(84px, 140px) skewX(-35deg) skewY(11deg);
    }

    @keyframes example {
        0% {border-top-color: grey;}
        50% {border-top-color: white;}
        100% {border-top-color: grey;}
    }

    @keyframes example2 {
        0% {border-bottom-color: grey;}
        50% {border-bottom-color: white;}
        100% {border-bottom-color: grey;}
    }

    #icedrop_bottomright {
        animation-name: example;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        animation-delay: -1.5s;
        animation-timing-function: ease-in-out;
    }

    #icedrop_bottomleft {
        animation-name: example;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        animation-delay: -0.5s;
        animation-timing-function: ease-in-out;
    }

    #icedrop_topleft {
        animation-name: example2;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        animation-delay: 0s;
        animation-timing-function: ease-in-out;
    }

    #icedrop_topright {
        animation-name: example2;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        animation-delay: -2s;
        animation-timing-function: ease-in-out;
    }

    #icedrop_bottomcenter {
        animation-name: example2;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        animation-delay: -1s;
        animation-timing-function: ease-in-out;
    }

    #icedrop_bottomcenter {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 90px solid white;
        transform: translate(55px, 133px);
    }


    .logo-workshop {
        position: relative;
        justify-content: center;
        align-items: center;
    }

    #logo {
        top: 50px; left: 135px;
        width: 100px;
        height: 100px;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    #logo div {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>