<template>
    <div class="wrapper">
        <navigation/>
        <main-sidebar/>
        <main-content/>
        <control-sidebar/>
        <main-footer/>
    </div>
</template>
<script>
    import Navigation from './Navigation.vue'
    import MainSidebar from './MainSidebar.vue'
    import MainContent from './MainContent.vue'
    import ControlSidebar from './ControlSidebar.vue'
    import MainFooter from './MainFooter.vue'
    export default{
        components:{
            Navigation,
            MainSidebar,
            MainContent,
            ControlSidebar,
            MainFooter
        },
    }
</script>
