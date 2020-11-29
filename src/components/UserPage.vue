<template>
    <div class="userProf">
        <div class="left">
            <div class="profile">
                <img class="profilePic" src="../assets/Profilepic.png" />
                <h2>Juan Dela Cruz</h2>
            </div>
            <div class="info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div class="right">
            <div class="textfollowingart">
                <h2>Following Artists</h2>
            <div class="followingArtist">
                <div class="container">
                    <div class="top-1">
                        <h3>Ben and Ben</h3>
                    </div>
                    <img class="class-image" src="../assets/benandben.png" />
                </div>
                
                <div class="container">
                    <div class="top-2">
                        <h3>Eraser Heads</h3>
                    </div>
                    <img class="class-image" src="../assets/hulingelbimbo.png" />
                </div>
                
                <div class="container">
                    <div class="top-3">
                        <h3>Joshua Garcia</h3>
                    </div>
                    <img class="class-image" src="../assets/Artist1.jpg" />
                </div>

                <div class="container">
                    <div class="top-4">
                        <h3>Autotelic</h3>
                    </div>
                    <img class="class-image" src="../assets/autotelic.jpg" />
                </div>

            </div>
            </div>

            <div class="post">
                <h2>My Posts</h2>
                <div class="post-box">
                <input class="content" type="text" name="" placeholder="Type here">
                <form action="/">
                <label for="img">Select image:</label>
                <input type="file" id="img" name="img" accept="image/*">
                <input type="submit">
                </form>
                </div>
                <div class="containr">
                    <div class="top-1">
                        <h3>Art 1</h3>
                    </div>
                    <img class="class-image" src="../assets/Artist1.jpg" />
                </div>

                <div class="containr">
                    <div class="top-2">
                        <h2>Art 1</h2>
                    </div>
                    <img class="class-image" src="../assets/Artist1.jpg" />
                </div>

                <div class="containr">
                    <div class="top-3">
                        <h2>Art 1</h2>
                    </div>
                    <img class="class-image" src="../assets/Artist1.jpg" />
                </div>

                <div class="containr">
                    <div class="top-4">
                        <h2>Art 1</h2>
                    </div>
                    <img class="class-image" src="../assets/Artist1.jpg" />
                </div>

            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: 'user'
}
</script>

<style lang="scss" scoped>
    
    * {
        margin:0;
        padding:0;
    }

    .left{
        margin-top: 80px;
        position: absolute;
        height: 100%;
        top: 0;
        width: 20%;
        text-align: center;
        left:20px;
        .profile{
            padding: 50px 3px;
            
            .profilePic{
                width: 70%;
                border-radius: 100%;
                padding:20px 0 20px;
            }

        }
    }

    .right{
        top:0;
        margin-left: 25% ;

        .textfollowingart{
            padding: 30px;
        }

        .post-box{
            display: flex;
            background: #f4f7f6;
            height: 100px;
            width: 100%;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 0 0 2pt #120d31;
            margin-right: 20px;
            margin-bottom: 20px;

            .content {
                border: none;
                background: none;
                outline: none;
                padding: 0;
                color: #404040;
                font-size: 16px;
                transition: 0.4s;
                line-height: 20px;
                width: 100%;
            }
        }

        div.followingArtist {
            position:relative;   
            overflow-x: scroll;
            white-space: nowrap;
            padding: 0px 30px;


            .container {
                display: inline-block;
                width: 27.33%;
                padding: 5px;

                img{
                    width: 300px;
                    height: 200px;
                    min-width: 100%;
                    min-height: 100%;
                    .class-image{
                        display: flex;
                        flex-wrap: wrap;
                    }
                }
            }


        }
        .post{
            padding: 10px 50px;
            .containr{
                text-align: center;
            }    
                
        }



              
    }


    
</style>