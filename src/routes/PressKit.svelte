<div class="about">
    <div class="presskit-main">
        <div class="presskit-col-1">
            <div class="t2">Fact Sheet</div>

            <div class="t3">Studio Name</div>
            <div class="presskit-p">Icedrop Games</div>
            <div class="t3">Website</div>
            <div class="presskit-p">icedropgames.com</div>
            <div class="t3">Founders</div>
            <div class="presskit-p">Arseny Dremin 'FreezedIce'</div>
            <div class="presskit-p">Ferran Ruiz Sala 'Raindrinker'</div>
            <div class="t3">Founding date</div>
            <div class="presskit-p">Start of 2023</div>
            <div class="t3">Info/Press Contact</div>
            <div class="presskit-p">icedropgames@gmail.com</div>
            <div class="t3">Studio Socials</div>
            <div class="presskit-p"><a href="https://twitter.com/icedropgames" target="_blank"><u>twitter.com/icedropgames</u></a></div>
            <div class="t3">Founder Socials</div>
            <div class="presskit-p"><a href="https://twitter.com/freezed_ice" target="_blank"> <u>twitter.com/freezed_ice</u></a></div>
            <div class="presskit-p"><a href="https://twitter.com/raindrinker_dev" target="_blank"><u>twitter.com/raindrinker_dev</u></a></div>

        </div>
        <div class="presskit-col-2">
            <div class="t1">Icedrop Games</div>
            <div class="t3">Studio Bio</div>
            <div class="presskit-p block">
                <b>Icedrop Games</b> is a remote two-person gamedev team that makes little interesting games.
                <br>
                We believe in games that are like a frozen raindrop or a jewel: playful little crafted objects made with care that make you think and wonder.
                <br>
                We met online through game jams and decided to join efforts to take on projects that are slightly bigger and a lot more polished.
                </div>
            <div class="t3">Founder Bios</div>
            <div class="presskit-p block">
                <b>Arseny Dremin 'FreezedIce'</b> is a game programmer with a keen eye for game design and technical art.
                He learnt game development through game jams and is currently working as a gameplay programmer at Italic Pig on their upcoming game Paleo Pines.
            </div>
            <div class="presskit-p block">
                <b>Ferran Ruiz Sala 'Raindrinker'</b> is a game developer from Barcelona who has a streak for pixelart, art in general and design.
                Very passionate about game jams, he made the switch from web development to the gamedev industry during 2020.
               <br> After working on a couple gamedev companies, mainly 2 years with Appnormals developing two big indie projects (Terracotta & Frank&Drake), he took to the road to pursue
                his own projects as a freelance, while teaching some programming & pixelart courses at university.
            </div>
        </div>
    </div>
    <div class="presskit-logos">
        <div class="t2">Logos</div>
        <div class="logos-grid">
            <img src="images/icedrop_new_horizontal.png"/>
            <img src="images/icedrop_h_simple_darkbg.png"/>
            <img src="images/icedrop_h_simple_lightbg.png"/>
            <img src="images/icedrop_square.png"/>
            <img src="images/icedrop_icon.png"/>
        </div>
    </div>
</div>

<style>
    .about {
        width: 100%;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 64px;
        padding-bottom: 64px;

        text-align: left;
    }
    .presskit-main {
        display: flex;
        width: 50%;
        flex-direction: row;
    }

    .presskit-col-1 {
        flex-grow: 1;
        flex-shrink: 1;
        align-items: start;
        justify-content: start;
        padding-right: 32px;
        flex-basis: 0;
        padding-top: 22px;
    }

    .presskit-col-2 {
        flex-grow: 2;
        flex-shrink: 1;
        flex-basis: 0;
    }

    .t1 {
        font-size: 64px;
        font-weight: bold;
    }

    .t2 {
        font-size: 42px;
        font-weight: bold;
    }

    .t3 {
        font-size: 22px;
        font-weight: bold;
        padding-top: 24px;
        padding-bottom: 8px;
        color: #6B98AF;
    }

    .presskit-p {
        padding-top: 8px;
        padding-bottom: 8px;
        font-size: 18px;
        line-height: 28px;
    }

    .presskit-p.block {

        text-align: justify;
    }

    .presskit-logos {
        padding-top: 64px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logos-grid {
        display: flex;
        flex-wrap: wrap;
        padding-top: 32px;
    }

    .logos-grid img {
        max-height: 300px;
        margin: 32px;
        border-radius: 8px;
        overflow: hidden;
    }

    @media only screen and (max-width: 800px) {

        .presskit-main {
            flex-direction: column-reverse;
            width: 80%;
        }

        .t1 {
            padding-top: 32px;
        }
    }
</style>