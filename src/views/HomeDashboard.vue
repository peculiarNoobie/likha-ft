<template>
    <div class="Home"> 
        <router-link to="/userPage">User Page</router-link>
        <router-link to="/calendar">Calendar</router-link>
        <router-link to="/eventPage">Event Page</router-link>
        <router-view/>    
    </div>
    
</template>

<script>
export default {
    name: 'Home',
}
</script>