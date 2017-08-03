<template>
 <div style="width:100%">
   <b-navbar toggleable type="inverse" class="navbar">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-link class="navbar-brand" to="#">
      <span>vue</span>
    </b-link>
    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <b-nav-item class="menu">Support</b-nav-item>
        <b-nav-item class="menu">Docs</b-nav-item>
        <b-nav-item class="menu">Contact Us</b-nav-item>
      </b-nav>
      <b-nav is-nav-bar class="ml-auto">
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item to="#" class="Langitem">EN</b-dropdown-item>
          <b-dropdown-item to="#" class="Langitem">ES</b-dropdown-item>
          <b-dropdown-item to="#" class="Langitem">RU</b-dropdown-item>
          <b-dropdown-item to="#" class="Langitem">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <span style="font-weight: bold;">User</span>
          </template>
          <b-dropdown-item to="#" class="Langitem">Profile</b-dropdown-item>
          <b-dropdown-item to="#" class="Langitem">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </b-collapse>
  </b-navbar>
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
             <b-btn size="sm" @click="details(item.item)">Details</b-btn>
           </template>
      </b-table>
     <div class="justify-content-center my-1">
           <b-pagination size="md" :total-rows="items.length" :per-page="perPage" v-model="currentPage" />
     </div>
  </div>
</template>

<script>
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
      currentPage: 1,
      perPage: 5,
      filter: null
    }
  },
  methods: {
    details (item) {
      alert(JSON.stringify(item))
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
</style>
