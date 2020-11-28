<template>
    <div class="home">
        <!--header-->
        <div class="header">
            <div class="container-1">
                <div class="top-1">
                    <h2>Ben and Ben Live</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" id="ticket">Buy Tickets</a>
                    <router-link id="watch" to="/eventPage">Watch now</router-link>
                </div>
                <img class="class-image" src="../assets/benandben.png" />
            </div>
            <div class="container-2">
                <div class="top-2">
                    <h2>Ang Huling El Bimbo</h2>
                    <p>Popular</p>
                </div>
                <img class="class-image" src="../assets/hulingelbimbo.png" />
            </div>
            <div class="container-3">
                <div class="top-3">
                    <h2>Art Fair PH</h2>
                    <p>Popular</p>
                </div>
                <img class="class-image" src="../assets/artfairph.png" />
            </div>
        </div>
        <!--Popular Artists-->
        <div class="artists">
            <div id="pop-artists">
                Popular Artists
            </div>
            <a id="more-btn" href="#">
                More
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style lang="scss" scoped>

    * {
        margin: 0;
        padding: 0;
    }

    .home .header {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        grid-auto-rows: minmax(200px, auto);
        justify-items:stretch;
        align-items: stretch;
    }

    .home .header {

        .container-1 {
            height: 100%;
            width: 62rem;
            grid-column: 1/3;
            grid-row:1/3;
            .top-1{
                position: absolute;
                background: none;
                padding: 100px 0px 0px 60px;
                
                h2{
                    background: none;
                    color: white;
                    margin-bottom: 10px;
                }
                p{
                    background: none;
                    color: white;
                    width: 60%;
                    margin-bottom: 30px;
                }
                #ticket{
                    display: inline-block;
                    padding: 5px 30px;
                    background: none;
                    border: 4px solid white;
                    border-radius: 10px;
                    color: #fff;
                    margin-right: 20px;
                }
                #ticket:hover{
                    display: inline-block;
                    padding: 5px 30px;
                    background: white;
                    border: 4px solid white;
                    border-radius: 10px;
                    color: #120d31;
                    margin-right: 20px;
                    transition: 0.4s;
                }
                #watch {
                    display: inline-block;
                    padding: 5px 30px;
                    background: none;
                    border: 4px solid white;
                    border-radius: 10px;
                    color: #fff;
                }
                #watch:hover{
                    display: inline-block;
                    padding: 5px 30px;
                    background: white;
                    border: 4px solid white;
                    border-radius: 10px;
                    color: #120d31;
                    margin-right: 20px;
                    transition: 0.4s;
                }
            }
            .class-image{
                width:100%;
                height: 100%;
                object-fit: fill;
            }
        }

        .container-2 {
            width: 35rem;
            .top-2{
                padding: 60px 0px 0px 60px;
                position: absolute;
                background: none;
                h2 {
                    background: none;
                    color: white;
                }
                p{
                    background: none;
                    color: white;
                }
            }

            .class-image{
                width:100%;
                height: 100%;
                object-fit: fill;
            }
        }

        .container-3 {
            width: 35rem;
            .top-3{
                padding: 60px 0px 0px 60px;
                position: absolute;
                background: none;
                h2 {
                    background: none;
                    color: white;
                }
                p{
                    background: none;
                    color: white;
                }
            }
            .class-image{
                width:100%;
                height: 100%;
                object-fit: fill;
            }
        }
    }

    .home .artists {
    margin: 350px 60px 0px 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    color: #120d31;
    
    #pop-artists {
        flex-grow: 6;
        font-family: 'Abril Fatface', Arial;
        font-size: 24px;
    }

    #more-btn {
        justify-content: right;
        color: #120d31;
        font-size: 18px;
    }

}

</style>