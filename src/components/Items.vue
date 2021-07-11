<template>
  <div>

   <AddItem :text="test" :itemDetails="newitem" @increase="increaseitem"/>

    <ul class="items">
      <li 
      v-for="item in items" 
      :key="item.id"
      class="item"
      >
        {{ item.name }}


        <LikeButton/>
        <RemoveItem @remove="removeItem(index)" />

      </li>
    </ul>

  </div>
</template>

<script>
import LikeButton from '@/components/LikeButton'
import RemoveItem from '@/components/RemoveItem'
import AddItem from '@/components/AddItem'


export default {
  components: {
    LikeButton,
    RemoveItem,
    AddItem
  },
    data () {
    return {
      items: [
        { name:'The Addict' , id:0}, 
        { name:'The Curious' , id:1},
        { name: 'The Hacker' , id:2} 
      ],
      newitem: "",
      test: 'hi'
    }
  },
  methods: {
    removeItem: function (index) {
      this.items.splice(index, 1);
    },
      increaseitem() {
      this.items.push({name: this.newitem});
      this.newitem= ""
    },
  }
}
</script>

<style>
  .items {
    padding: 0 40px;
    margin-bottom: 40px
  }
  
  button{
    background-color: rgb(170, 136, 104);
    border-radius: 10px;
    color: #fff;
    padding: 10px;
    border:none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    margin: 10px;

  }
  .items .item {
    background-color: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: .25rem;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    list-style-type: none;
    padding: 20px 20px;
    border-radius: 10px;
  }



</style>