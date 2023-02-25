<div class="games">
    <div class="game">
        <img src="images/constellations.png" class="game-img"/>

        <div class="game-content">
            <div class="game-name">Constellations </div>
            <div class="game-date">25/05/2022</div>

            <div class="game-brief">
                A minimalist puzzle game about connecting stars. <br> <br>

                Explore space constellation by constellation, solving number puzzles by connecting stars. Try to understand the rules and figure out the secrets of the cosmos.

                <br><br>
                Music and sound effects by <b>Megahammer Audio</b>.
            </div>

            <div class="icons">
                <a href="https://store.steampowered.com/app/1819520/Constellations_Puzzles_in_the_Sky/" target="_blank"><img src="images/steam.png" class="game-link-icon"></a>
                <a href="https://icedropgames.itch.io/constellations" target="_blank"><img src="images/itchio.png" class="game-link-icon"></a>
            </div>
        </div>
    </div>

    <div class="game">
        <img src="images/lok.jpg" class="game-img"/>

        <div class="game-content">
            <div class="game-name">LOK Digital</div>
            <div class="game-date">ETA 2023</div>

            <div class="game-brief">
                A digital adaptation of the puzzle book <b>LOK</b> by <b>Letibus Design</b>, developed alongside with its original creator, <b>Blaž Urban Gracar</b>.
                <br><br>
                Solve cryptic word-search puzzles to guide the Lok towards the expansion of their civilisation.
            </div>

            <div class="icons">
                <a href="https://store.steampowered.com/app/2207440/LOK_Digital/" target="_blank"><img src="images/steam.png" class="game-link-icon"></a>
            </div>
        </div>
    </div>

    <div class="game">
        <img src="images/spells.png" class="game-img"/>

        <div class="game-content">
            <div class="game-name">Unannounced wizard game</div>
            <div class="game-date">WIP</div>

            <div class="game-brief">
                Be a little wizard, learn magic, cast big spells, protect the school.
            </div>
        </div>
    </div>

    <div class="jam-games">
        <div class="line"></div>
        <div class="game-name">Jam games</div>

        <div class="grid">
            <a href="https://freezedice.itch.io/palchemy" target="_blank"><img src="images/palchemy.png" class="game-jam-img"/></a>
            <a href="https://freezedice.itch.io/retrorift" target="_blank"><img src="images/retrorift.png" class="game-jam-img"/></a>
            <a href="https://freezedice.itch.io/sneks" target="_blank"><img src="images/sneks.png" class="game-jam-img"/></a>
            <a href="https://freezedice.itch.io/sliced" target="_blank"><img src="images/sliced.png" class="game-jam-img"/></a>
            <a href="https://freezedice.itch.io/flip-and-seas" target="_blank"><img src="images/flipnseas.png" class="game-jam-img"/></a>
            <a href="https://freezedice.itch.io/tree-golf" target="_blank"><img src="images/treegolf.png" class="game-jam-img"/></a>
        </div>
    </div>

</div>

<style>
    .games {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1000px;

        padding-bottom: 64px;
    }

    .game {

        flex-grow: 1;

        display: flex;

        padding: 32px;

        display: flex;
    }

    .game-img {
        height: 400px;
        border-radius: 8px;
        -webkit-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.5);
        box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.5);
    }

    .game-content {
        padding: 16px 32px;
        text-align: left;

        display: flex;
        flex-direction: column;
    }

    .game-name {
        font-size: 32px;
        font-weight: bold;
    }

    .game-date {
        color: #4F778E;
        font-size: 18px;
        font-weight: bold;
    }

    .game-brief {
        font-size: 18px;
        padding-top: 32px;
        flex-grow: 1;
    }

    .game-link-icon {
        max-width: 42px;
        filter: invert(94%) sepia(2%) saturate(4420%) hue-rotate(174deg) brightness(89%) contrast(100%);
        cursor: pointer;

        transition: 0.1s;
    }

    .game-link-icon:hover {
        transform: scale(1.1);
        filter: invert(100%);
    }

    .line {
        width: 1000px;
        height: 1px;
        background-color: white;
        margin-bottom: 32px;
    }

    .jam-games {
        display: flex;
        flex-direction: column;
        padding-top: 64px;

        align-items: center;
        justify-content: center;
    }

    .game-jam-img {
        height: 200px;
        border-radius: 8px;
        -webkit-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.5);
        box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.5);

        margin: 16px;
    }

    .grid {
        padding-top: 32px;
        display: flex;
        flex-wrap: wrap;

        align-items: center;
        justify-content: center;
    }

</style>