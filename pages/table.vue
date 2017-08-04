<template>
 <div style="width:100%">
   <b-modal ref="modal1" title="Confirm To Delete This Row" @ok="ok"></b-modal>
   <headtop/>
   <div class="my-1 row" style="width: 100%; padding-top:20px">
     <div class="col-6">
       <b-form-fieldset horizontal label="Rows per page" :label-cols="6">
          <b-form-select :options="[{text:5,value:5},{text:10,value:10},{text:15,value:15}]" v-model="perPage">
          </b-form-select>
        </b-form-fieldset>
      </div>
      <div class="col-6">
        <b-form-fieldset horizontal label="Filter" :label-cols="3">
          <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
        </b-form-fieldset>
      </div>
    </div>
  <!-- Main table element -->
    <b-table striped hover
           :items="items"
           :fields="fields"
           :current-page="currentPage"
           :per-page="perPage"
           :filter="filter">
           <template slot="name" scope="item">
             {{item.value.first}} {{item.value.last}}
           </template>
           <template slot="isActive" scope="item">
             {{item.value?'Yes :)':'No :('}}
           </template>
           <template slot="actions" scope="item">
             <b-btn class="danger" size="sm" @click="remove(item.$index, items)">remove</b-btn>
           </template>
      </b-table>
     <div class="justify-content-center my-1">
           <b-pagination size="md" :total-rows="items.length" :per-page="perPage" v-model="currentPage" />
     </div>
  </div>
</template>

<script>
import headtop from '~/components/headtop.vue'
export default {
  data () {
    return {
      items: [
        {
          isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' }
        }, {
          isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' }
        }, {
          _rowVariant: 'success', isActive: false, age: 9, name: { first: 'Mitzi', last: 'Navarro' }
        }, {
          isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' }
        }, {
          isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' }
        }, {
          isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' }
        }, {
          isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' }
        }, {
          _cellVariants: { age: 'danger', name: 'success' }, isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' }
        }, {
          isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' }
        }, {
          isActive: false, age: 22, name: { first: 'Geneva', last: 'Wilson' }
        }, {
          isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' }
        }, {
          isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' }
        }
      ],
      fields: {
        name: {
          label: 'Person Full name',
          sortable: true
        },
        age: {
          label: 'Person age',
          sortable: true
        },
        isActive: {
          label: 'is Active'
        },
        actions: {
          label: 'Actions'
        }
      },
      index: 0,
      currentPage: 1,
      perPage: 5,
      filter: null
    }
  },
  components: {
    headtop
  },
  methods: {
    remove (index, rows) {
      this.index = index
      this.$refs.modal1.show()
    },
    ok () {
      this.items.splice(this.index, 1)
    }
  }
}
</script>
<style scoped>
  .navbar {
    background-color: #3b8070;
  }
  .menu {
    color: #fff;
  }
  .menu:hover {
    text-decoration: line-through;
  }
  .Langitem {
    background-color: #fff;
    color:#333;
    outline: none;
  }
  .Langitem:hover {
    background-color: #3b8070;
    border: none;
  }
  .danger {
    background-color: #d9534f;
    color: #fff;
  }

</style>
