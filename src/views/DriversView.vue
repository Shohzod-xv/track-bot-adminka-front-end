<template>
  <div class="col-12">
    <div class="card">
      <div class="card-header">
        <h4>Drivers Table</h4>
        <div class="card-header-form">
          <div class="input-group-btn">
            <button type="button" class="btn btn-info font-weight-bolder">
              Add Driver <span class="badge badge-transparent font-weight-bolder">+</span>
            </button>
          </div>
        </div>
      </div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
            <tr>
              <th class="bg-info font-weight-bolder">ID</th>
              <th>User ID</th>
              <th>Name</th>
              <th>Number</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody v-for="driver in drivers">
            <tr>
              <td class="font-weight-bolder">{{ driver.id}}</td>
              <td>{{ driver.user_id}}</td>
              <td>{{ driver.name}}</td>
              <td>{{ driver.phone}}</td>
              <td :class="role(driver.role)">{{ driver.role}}</td>
              <td>
                <span :class="status(driver.status)">{{ driver.status }}</span>
              </td>
              <td>
                <a href="#" class="btn btn-outline-info action"><i class="fas fa-eye"></i></a>
                <a href="#" class="btn btn-outline-danger action"><i class="fas fa-trash"></i></a>
                <a href="#" class="btn btn-outline-success action"><i class="fas fa-pen"></i></a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-footer text-right">
        <nav class="d-inline-block">
          <ul class="pagination mb-0">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1"><i class="fas fa-chevron-left"></i></a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1 <span class="sr-only">(current)</span></a></li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Drivers",
  data() {
    return {
      drivers: [],
    }
  },
  async created() {
    try {
      const {data} = await axios.get("http://127.0.0.1:8000/api/posts");
      this.drivers = data.map((item) => ({
        id: item.id,
        user_id: item.user_id,
        name: item.name,
        phone: item.phone,
        role: item.role,
        status: item.status,
      }))
    } catch (error) {
      alert(error.message);
    }
  },
  methods: {
    status(status) {
      if (status === "completed") {
        return "badge badge-success";
      } else if (status === "pending") {
        return "badge badge-warning";
      } else {
        return "badge badge-danger";
      }
    },
    role(role) {
      if (role === "Admin") {
        return "text-dark font-weight-bolder";
      } else if (role === "User") {
        return "text-dark";
      } else {
        return "badge badge-danger";
      }
    }
  }
}
</script>

<style scoped>
.action{
  margin-right: 4px;
}
</style>
