<template>
<div>
  <base-card>
    <base-button :class="storedButtonMode"  @click.native="selectTab('stored-item')">The stored resources</base-button>
    <base-button :class="addButtonMode"  @click.native="selectTab('add-item')">Add resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="currentTab"></component>
  </keep-alive>
</div>
</template>

<script>
import StoredItem from './StoredItem.vue';
import AddItem from './AddItem.vue';

export default {
  components:{
    StoredItem,
    AddItem
  },
  data(){
    return{
      currentTab : 'stored-item',
      storedResources:
      [
        {
          id:"official-guide",
          title:"official guide",
          description:"The offical vue js documentation",
          link:"https//vuejs.org"
        },
        {
          id:"google",
          title:"google",
          description:"google search",
          link:"https//google.com"
        }
      ]
    }
  },
  provide(){
    return{
    storedResources:this.storedResources,
    addData:this.addData,
    deleteItem:this.deleteItem
    }
  },
  methods:{
    selectTab(tab)
    {
      this.currentTab = tab
    },
    addData(title,description,link)
    {
      const item = {
        id: new Date().toISOString(),
        title:title,
        description:description,
        link:link
      }

      this.storedResources.unshift(item);
      this.currentTab = 'stored-item';

    },
    deleteItem(itemId)
    {
      const index =  this.storedResources.findIndex(res => res.id == itemId)
      this.storedResources.splice(index,1);
    }
  },
  computed:{
      storedButtonMode()
      {
        return this.currentTab == 'stored-item' ? null : 'flat';
      },
      addButtonMode()
      {
        return this.currentTab == 'add-item' ? null : 'flat';
      }
    }
}
</script>

<style>

</style>