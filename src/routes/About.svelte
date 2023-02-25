<div class="about-main">


    <div class="people">
        <div class="person">
            <img src="images/freezedice.png" class="person-img"/>
            <div class="person-name">Arseny Dremin</div>
            <div class="person-nick">FreezedIce</div>

            <div class="icons">
                <div class="social">
                    <a href="https://www.freezedice.com/" target="_blank"> <img src="images/website.png"></a>
                </div>
                <div class="social">
                    <a href="https://twitter.com/freezed_ice" target="_blank"><img src="images/twitter.png"></a>
                </div>
            </div>
        </div>
        <div class="person">
            <img src="images/raindrinker.png" class="person-img"/>
            <div class="person-name">Ferran Ruiz Sala</div>
            <div class="person-nick">Raindrinker</div>

            <div class="icons">
                <div class="social">
                    <a href="https://www.raindrinker.com/" target="_blank"><img src="images/website.png"></a>
                </div>
                <div class="social">
                    <a href="https://twitter.com/Raindrinker_dev" target="_blank"><img src="images/twitter.png"></a>
                </div>
            </div>
        </div>
    </div>

    <div class="text">
        <b>Icedrop Games</b> is a remote two-person gamedev team that makes little interesting games.

        <br><br>

        We believe in games that are like a frozen raindrop or a jewel: <br>playful little crafted objects made with care that make you think and wonder.

        <br><br>

        We are working on a few <a href="/#/games" class="menu-option-link"><b>projects</b></a> we're very excited about!

        Please follow our socials, and feel free to <a href="mailto:icedropgames@gmail.com"><b>contact</b></a> us for any inquiries.
    </div>




</div>

<style>

    .about-main {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .text {
        padding: 62px;
        font-size: 28px;
        max-width: 1000px;
        text-align: center;
    }

    .people {
        display: flex;
        align-content: center;
        justify-content: center;
        padding-top: 32px;
    }

    .person {
        display: flex;
        flex-direction: column;
        width: 400px;
        justify-content: center;
        align-items: center;
    }

    .person-img {
        width: 200px;
    }

    .person-name {
        color: #4F778E;
    }

    .person-nick {
        font-size: 24px;
        font-weight: bold;
    }

    .person-role {
        padding-top: 8px;
    }

    .icons {
        display: flex;
    }

    .social img {
        width: 32px;
        filter: invert(94%) sepia(2%) saturate(4420%) hue-rotate(174deg) brightness(89%) contrast(100%);
        cursor: pointer;

        transition: 0.1s;
        padding: 8px;
    }

    .social img:hover {
        transform: scale(1.1);
        filter: invert(100%);
    }

</style>