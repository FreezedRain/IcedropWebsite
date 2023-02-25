<div>
    <div class="logo-svg">
        <div class="tl">
            <img src="images/icedrop_new_tl.svg" class="logo-part"/>
            <img src="images/icedrop_new_shine.svg" class="logo-shine"/>
        </div>
        <div class="tr">
            <img src="images/icedrop_new_tr.svg" class="logo-part"/>
        </div>
        <div class="bl">
            <img src="images/icedrop_new_bl.svg" class="logo-part"/>
        </div>
        <div class="bc">
            <img src="images/icedrop_new_bc.svg" class="logo-part"/>
        </div>
        <div class="br">
            <img src="images/icedrop_new_br.svg" class="logo-part"/>
        </div>

        <img src="images/icedrop_new_text_nogames.svg" class="logo-part-text"/>
    </div>
</div>

<style>
    .logo-svg {
        position: relative;

        width: 750px;
        height: 750px;
    }

    .logo-part-text {
        height: 750px;
    }

    @keyframes color {
        0% {filter: invert(44%) sepia(8%) saturate(1920%) hue-rotate(158deg) brightness(80%) contrast(89%);}
        50% {filter: invert(44%) sepia(8%) saturate(1000%) hue-rotate(158deg) brightness(150%) contrast(89%);}
        100% {filter: invert(44%) sepia(8%) saturate(1920%) hue-rotate(158deg) brightness(80%) contrast(89%);}
    }

    @keyframes shine {
        0% {opacity: 0.2}
        50% {opacity: 1}
        100% {opacity: 0.2}
    }

    .logo-part {
        position: absolute;
        top: 0;
        left: 0;
        height: 750px;
        filter: invert(99%) sepia(16%) saturate(4156%) hue-rotate(174deg) brightness(96%) contrast(84%);

        animation: color 2.5s alternate infinite ease-in-out;
    }

    .tr .logo-part {
        animation-delay: -2s;
    }

    .br .logo-part {
        animation-delay: -1.5s;
    }

    .bc .logo-part {
        animation-delay: -1s;
    }

    .bl .logo-part {
        animation-delay: -0.5s;
    }

    .logo-shine {
        position: absolute;
        top: 0;
        left: 0;
        height: 750px;
        opacity: 0;

        animation: shine 2.5s alternate infinite ease-in-out;
    }



    @keyframes tl_move {
        0% {transform: translate(0)}
        50% {transform: translate(-5px, -5px)}
    }

    @keyframes tr_move {
        0% {transform: translate(0)}
        50% {transform: translate(5px, -5px)}
    }

    @keyframes bl_move {
        0% {transform: translate(0)}
        50% {transform: translate(-5px, 5px)}
    }

    @keyframes bc_move {
        0% {transform: translate(0)}
        50% {transform: translate(0px, 7.5px)}
    }

    @keyframes br_move {
        0% {transform: translate(0)}
        50% {transform: translate(5px, 5px)}
    }

    .tl {
        position: relative;

        animation: tl_move 2.5s alternate infinite ease-in-out;
    }

    .tr {
        animation: tr_move 2.5s alternate infinite ease-in-out -2s;
    }

    .bl {
        animation: bl_move 2.5s alternate infinite ease-in-out -0.5s;
    }

    .bc {
        animation: bc_move 2.5s alternate infinite ease-in-out -1s;
    }

    .br {
        animation: br_move 2.5s alternate infinite ease-in-out -1.5s;
    }

    @media only screen and (max-width: 800px) {

        .logo-svg {
            transform: scale(0.8);
        }
    }



</style>