<template>
    <div class="game-list-col col-3 p-0">
        <ul class="game-list-menu text-center">
            <li v-for="(game,index) in gameName" :class={active:game.active} class="game-list py-3" :data-game="game.game" @click="gameListSelect($event)">{{game.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['gameName'],
    data(){
        return{
            lottera:[
                {name:'整合',active:true},
                {name:'牛牛 梭哈',active:false},
                {name:'前中后',active:false},
            ],
            name:'',
            isActive:false
        }
    },
    methods:{
        gameListSelect(event){
            var gameList=document.querySelectorAll(".game-list")
            this.game_name=event.currentTarget.dataset.game;
            for(var i=0;i<gameList.length;i++){
                if(gameList[i].classList.contains('active')){
                    gameList[i].classList.remove('active')
                }
            }
            event.currentTarget.classList.add('active')
            this.name=event.currentTarget.dataset.game;
            this.$emit('gameListSelect',this.name)
        }
    }
}
</script>
