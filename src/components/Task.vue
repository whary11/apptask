<template>
  <div class="hello text-center row justify-content-center">
    <div class="col-md-12 mb-2">
      <h1>Visión Center and Firebase</h1>
      <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal">Crear
        tarea</button>
    </div>
    <div class="col-md-6" v-if="tasks.length >0">
      <ul class="list-group">
        <li class="list-group-item active bg-danger">
          <h2>Tareas</h2>
        </li>
        <li class="list-group-item" v-for="(item, index) in tasks" :key="index">{{item.name}} <br> <span
            class="text-muted">{{item.description}}</span> </li>
      </ul>
    </div>

    <div class="modal" tabindex="-1" role="dialog" id="exampleModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h5 class="modal-title">Crear Tarea</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="">
              <div class="form-group">
                <label for="exampleInputEmail1">Nombre</label>
                <input type="text" v-model="newTask.name" class="form-control">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Descripción</label>
                <input type="text" v-model="newTask.description" class="form-control">
              </div>
            </form>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal" @click="hideModal()">Cerrar</button>
            <button type="button" class="btn btn-primary" @click="addTask()">Gauardar</button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data() {
      return {
        newTask: {
          name: '',
          description: ''
        },
        db: firebase.firestore(),
        tasks: []

      }
    },
    mounted() {
      this.getTask()
    },
    methods: {
      addTask() {
        if (this.newTask.name != '' && this.newTask.description != '') {
          let db = firebase.firestore()
          this.db.collection("tasks").add(this.newTask)
            .then(function (docRef) {
              console.log("Document written with ID: ", docRef.id);
              $('#exampleModal').modal('hide')
            })
            .catch(function (error) {
              console.error("Error adding document: ", error);
            });

        } else {
          alert('Debes escribir el detalle de la tarea.')
        }
      },
      getTask() {
        // this.db.collection("tasks")
        //   .onSnapshot( (doc) => {
        //     this.tasks.push(doc.data())
        //     console.log(this.tasks);
        //   });

        this.db.collection("tasks")
          .onSnapshot((snapshot) => {
            // console.log(snapshot.data());
            this.tasks = []
            snapshot.forEach((doc) => {
              this.tasks.push(doc.data())
            });
            console.log(this.tasks);
          }, function (error) {
            //...
          });
      },
      hideModal(){
        $('#exampleModal').modal('hide')
      }
    },
  }
</script>