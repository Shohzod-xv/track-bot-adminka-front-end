<template>
  <div class="col-12">
    <div class="card">
      <div class="card-header">
        <h4>Advanced Table</h4>
        <div class="card-header-form">
              <div class="input-group-btn">
                <button type="button" class="btn btn-info font-weight-bolder">
                  Add User <span class="badge badge-transparent font-weight-bolder">+</span>
                </button>
              </div>
        </div>
      </div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-striped">
            <tbody><tr>
              <th class="bg-blue-grey">ID</th>
              <th>User ID</th>
              <th>Name</th>
              <th>Number</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>1</td>
              <td>15716873654</td>
              <td>Behzod Masharipov</td>
              <td>+998 90 123 45 67</td>
              <td>Admin</td>
              <td>
                <div class="badge badge-success">Completed</div>
              </td>
              <td>
                <a href="#" class="btn btn-outline-warning action"><i class="fas fa-eye"></i></a>
                <a href="#" class="btn btn-outline-danger action"><i class="fas fa-trash"></i></a>
                <a href="#" class="btn btn-outline-success action"><i class="fas fa-pen"></i></a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>25716873654</td>
              <td>Sanjar Haliqov</td>
              <td>+998 91 123 45 67</td>
              <td>User</td>
              <td>
                <div class="badge badge-warning">Progressing</div>
              </td>
              <td>
                <a href="#" class="btn btn-outline-warning action"><i class="fas fa-eye"></i></a>
                <a href="#" class="btn btn-outline-danger action"><i class="fas fa-trash"></i></a>
                <a href="#" class="btn btn-outline-success action"><i class="fas fa-pen"></i></a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>35716873654</td>
              <td>Nodir Abdullayev</td>
              <td>+998 90 123 45 67</td>
              <td>Client</td>
              <td>
                <div class="badge badge-warning">Progressing</div>
              </td>
              <td>
                <a href="#" class="btn btn-outline-warning action"><i class="fas fa-eye"></i></a>
                <a href="#" class="btn btn-outline-danger action"><i class="fas fa-trash"></i></a>
                <a href="#" class="btn btn-outline-success action"><i class="fas fa-pen"></i></a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>45716873654</td>
              <td>Jaloliddin Masharipov</td>
              <td>+998 90 123 45 67</td>
              <td>Driver</td>
              <td>
                <div class="badge badge-danger">Failed</div>
              </td>
              <td>
                <a href="#" class="btn btn-outline-warning action"><i class="fas fa-eye"></i></a>
                <a href="#" class="btn btn-outline-danger action"><i class="fas fa-trash"></i></a>
                <a href="#" class="btn btn-outline-success action"><i class="fas fa-pen"></i></a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>55716873654</td>
              <td>Nurbek Sadullayev</td>
              <td>+998 90 123 45 67</td>
              <td>Admin</td>
              <td>
                <div class="badge badge-success">Completed</div>
              </td>
              <td>
                <a href="#" class="btn btn-outline-warning action"><i class="fas fa-eye"></i></a>
                <a href="#" class="btn btn-outline-danger action"><i class="fas fa-trash"></i></a>
                <a href="#" class="btn btn-outline-success action"><i class="fas fa-pen"></i></a>
              </td>
            </tr>
            </tbody></table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.action{
  margin-right: 5px;
}
</style>
