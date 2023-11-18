<div class="about">
    <div class="content">
        <div class="logo-img-div">
    <img src="images/lok-digital/logo.png" class="logo-img"/>
        </div>

    <div class="text">
        <b>A charmingly playful adventure of word and rule discovery.</b> <br><br>

        Embark on a whimsical puzzle solving journey as you uncover magical and unrecognizable words, each with their own special powers. Enter into the enchanting LOK universe filled with delight and oozing with charm as you summon adorable creatures and find the meaningful words, each with their own special ability within the grid-based search.

        <br><br>

        Discover the rules as you go, learning how each special word can be used to your advantage, helping you piece together the ultimate puzzle. With simple, cozy mechanics and deep mind-bending gameplay full of unexpected twists, LOK Digital invites you to tap into your logic side while curling up to enjoy the enchanting gameplay.

    </div>

    <div class="images">
        <div class="image-box">
            <div class="image-box-pad">
                <img src="images/lok-digital/screenshot2.png" class="screenshot-img"/>
            </div>
        </div>
        <div class="image-box">
            <div class="image-box-pad">
                <img src="images/lok-digital/screenshot2.png" class="screenshot-img"/>
            </div>
        </div>
        <div class="image-box">
            <div class="image-box-pad">
                <img src="images/lok-digital/screenshot2.png" class="screenshot-img"/>
            </div>
        </div>
        <div class="image-box">
            <div class="image-box-pad">
                <img src="images/lok-digital/screenshot2.png" class="screenshot-img"/>
            </div>
        </div>
    </div>

    <div class="list text">
        <ul>
            <li>Approachable and intuitive gameplay suitable for players of all skill levels and age range</li>
            <li>Daily puzzles with player leaderboards to keep users coming back for more and keep retention high</li>
            <li>Perfect for pick up and play sessions with intuitive mechanics, high replayability, and skill ceiling</li>
            <li>Meditative, entrancing soundtrack and elegant, minimalist art style</li>
            <li>Learn deep and surprising mechanics that simultaneously challenge and delight as the game thoughtfully teaches the rules in an engaging and intuitive manner</li>
            <li>Published by the award-winning puzzle experts, Draknek & Friends the team behind A Monster’s Expedition, Cosmic Express, Bonfire Peaks, and more</li>
        </ul>
    </div>

    <div class="footer">
        <div class="footer-img letibus-icedrop">
            <img src="images/lok-digital/credits.png" class="credits-img"/>
        </div>
        <div class="empty"></div>
        <div class="footer-img draknek">
            <img src="images/lok-digital/DraknekFriendsLogo.png" class="credits-img"/>
        </div>
    </div>
    </div>
</div>

<svelte:head>
    <style>
        #header {
            display: none;
        }
    </style>
</svelte:head>

<style>

    .about {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: #EEEEEE;

        width: 100%;

        font-family: Century,serif;
    }

    .content {
        max-width: 50%;

    }

    .logo-img-div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo-img {
        max-width: 400px;
    }

    .text {

        max-width: 700px;

        text-align: justify;

        font-size: 1.15em;

        color: #333333;
    }

    .credits-img {
        max-width: 200px;
    }

    .images {
        max-width: 700px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: stretch;
        padding-top: 32px;
        padding-bottom: 32px;
    }

    .image-box {
        max-width: 50%;
        display: flex;
        flex-shrink: 1;
    }

    .image-box-pad {
        padding: 16px;
    }

    .screenshot-img {
        border: 4px solid black;
        flex-shrink: 1;
        max-width: 100%;
    }

    .footer {
        display: flex;
        padding-left: 32px;
        padding-right: 16px;
        padding-bottom: 16px;
    }

    .footer-img {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 0;
    }
    .empty {
        flex-grow: 1;
    }

    @media (max-width: 1250px) {
        .content {
            max-width: 85%;
        }
        .text {

            font-size: 1em;
        }

        .footer {
            flex-direction: column;
        }

        .images {
            flex-direction: column;
        }

        .image-box {
            max-width: 100%;
            display: flex;
            flex-shrink: 1;
        }

        .text.list {
            margin-left: -16px;
        }
    }

</style>