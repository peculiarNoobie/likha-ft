<template>
    <div class="dashboard">
        <div class="header">
            <div class="top-bar">
                <div class="top-left">
                    <div class="logo">
                        <router-link id="logo-txt" to="/home">Likha</router-link>
                    </div>
                    <div class="search-box">
                        <a class="search-btn" href="#"><i class="fas fa-search fa-md"></i></a>
                        <input class="search-txt" type="text" name="" placeholder="Search">
                        <a class="caret-down-btn" href="#"><i class="fas fa-caret-down fa-md"></i></a>
                    </div>
                </div>
                <ul>
                    <li><router-link id="link-txt" to="/calendar">Calendar</router-link></li>
                    <li><router-link id="link-txt" to="/userPage">Juan Dela Cruz</router-link></li>
                    <li><router-link id="link-txt" to="#">Sign out</router-link></li>
                </ul>
            </div>
        </div>
        <!--
        <router-link to="/eventPage">Watch now</router-link>
        -->
        <router-view/>    
    </div>
    
</template>

<script>
export default {
    name: 'Dashboard',
}
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        background-color: #f4f7f6;
    }

    .dashboard .header{
        height: 4.5rem;
        display: flex;
        position: relative;
    }

    .dashboard .header .top-bar{
        width: calc(100% - 0px);
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
    }

    .dashboard .header .top-bar .top-left{
        display: flex;
        .logo{
            margin: 0px 25px 0px 40px;
            font-weight: bold;
            font-size: 24px;

            #logo-txt{
                color: #120d31;
                font-family: 'Abril Fatface', Arial;
            }
        }

        /*search bar*/
        .search-box {
            display: flex;
            background: #f4f7f6;
            height: 2.6rem;
            width: 400px;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 0 0 2pt #120d31;
            margin-right: 20px;
        }

        .search-btn {
            color: #120d31;
            margin: 0px 10px;
        }

        .search-txt {
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

        .caret-down-btn {
            color: #120d31;
            float: right;
            margin-right: 10px;
        }
    }

    .dashboard .header .top-bar ul{
        display: flex;
        
        li{
            margin: 0px 20px 0px;
            min-width: 80px;
            #link-txt{
                color: #120d31;
                font-size: 18px;
                &:hover{
                    border-bottom: 4px solid #120d31;
                    transition: 0.2s;
                    font-weight: bold;
                }
            }
        }
    }
</style>