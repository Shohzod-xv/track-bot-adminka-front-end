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
            <tbody><tr>
              <th class="bg-info font-weight-bolder">ID</th>
              <th>User ID</th>
              <th>Name</th>
              <th>Number</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tr>
              <td class="font-weight-bolder">1</td>
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
              <td class="font-weight-bolder">2</td>
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
              <td class="font-weight-bolder">3</td>
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
              <td class="font-weight-bolder">4</td>
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
              <td class="font-weight-bolder">5</td>
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
export default {
  name: "Drivers"
}
</script>

<style scoped>

</style>
