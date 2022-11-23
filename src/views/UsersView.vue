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
              <th class="text-center">
                <div class="custom-checkbox custom-checkbox-table custom-control">
                  <input type="checkbox" data-checkboxes="mygroup" data-checkbox-role="dad" class="custom-control-input" id="checkbox-all">
                  <label for="checkbox-all" class="custom-control-label">&nbsp;</label>
                </div>
              </th>
              <th>Task Name</th>
              <th>Progress</th>
              <th>Members</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tr>
              <td class="p-0 text-center">
                <div class="custom-checkbox custom-control">
                  <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input" id="checkbox-1">
                  <label for="checkbox-1" class="custom-control-label">&nbsp;</label>
                </div>
              </td>
              <td>Create a mobile app</td>
              <td class="align-middle">
                <div class="progress" data-height="4" data-toggle="tooltip" title="" data-original-title="100%" style="height: 4px;">
                  <div class="progress-bar bg-success" data-width="100" style="width: 100px;"></div>
                </div>
              </td>
              <td>
                <img alt="image" src="assets/img/users/user-5.png" class="rounded-circle" width="35" data-toggle="tooltip" title="" data-original-title="Wildan Ahdian">
              </td>
              <td>2018-01-20</td>
              <td>
                <div class="badge badge-success">Completed</div>
              </td>
              <td><a href="#" class="btn btn-primary">Detail</a></td>
            </tr>
            <tr>
              <td class="p-0 text-center">
                <div class="custom-checkbox custom-control">
                  <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input" id="checkbox-2">
                  <label for="checkbox-2" class="custom-control-label">&nbsp;</label>
                </div>
              </td>
              <td>Redesign homepage</td>
              <td class="align-middle">
                <div class="progress" data-height="4" data-toggle="tooltip" title="" data-original-title="40%" style="height: 4px;">
                  <div class="progress-bar" data-width="40" style="width: 40px;"></div>
                </div>
              </td>
              <td>
                <img alt="image" src="assets/img/users/user-1.png" class="rounded-circle" width="35" data-toggle="tooltip" title="" data-original-title="Nur Alpiana">
                <img alt="image" src="assets/img/users/user-3.png" class="rounded-circle" width="35" data-toggle="tooltip" title="" data-original-title="Hariono Yusup">
                <img alt="image" src="assets/img/users/user-4.png" class="rounded-circle" width="35" data-toggle="tooltip" title="" data-original-title="Bagus Dwi Cahya">
              </td>
              <td>2018-04-10</td>
              <td>
                <div class="badge badge-info">Todo</div>
              </td>
              <td><a href="#" class="btn btn-primary">Detail</a></td>
            </tr>
            <tr>
              <td class="p-0 text-center">
                <div class="custom-checkbox custom-control">
                  <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input" id="checkbox-3">
                  <label for="checkbox-3" class="custom-control-label">&nbsp;</label>
                </div>
              </td>
              <td>Backup database</td>
              <td class="align-middle">
                <div class="progress" data-height="4" data-toggle="tooltip" title="" data-original-title="70%" style="height: 4px;">
                  <div class="progress-bar bg-warning" data-width="70" style="width: 70px;"></div>
                </div>
              </td>
              <td>
                <img alt="image" src="assets/img/users/user-1.png" class="rounded-circle" width="35" data-toggle="tooltip" title="" data-original-title="Rizal Fakhri">
                <img alt="image" src="assets/img/users/user-2.png" class="rounded-circle" width="35" data-toggle="tooltip" title="" data-original-title="Hasan Basri">
              </td>
              <td>2018-01-29</td>
              <td>
                <div class="badge badge-warning">In Progress</div>
              </td>
              <td><a href="#" class="btn btn-primary">Detail</a></td>
            </tr>
            <tr>
              <td class="p-0 text-center">
                <div class="custom-checkbox custom-control">
                  <input type="checkbox" data-checkboxes="mygroup" class="custom-control-input" id="checkbox-4">
                  <label for="checkbox-4" class="custom-control-label">&nbsp;</label>
                </div>
              </td>
              <td>Input data</td>
              <td class="align-middle">
                <div class="progress" data-height="4" data-toggle="tooltip" title="" data-original-title="100%" style="height: 4px;">
                  <div class="progress-bar bg-success" data-width="100" style="width: 100px;"></div>
                </div>
              </td>
              <td>
                <img alt="image" src="assets/img/users/user-2.png" class="rounded-circle" width="35" data-toggle="tooltip" title="" data-original-title="Rizal Fakhri">
                <img alt="image" src="assets/img/users/user-5.png" class="rounded-circle" width="35" data-toggle="tooltip" title="" data-original-title="Isnap Kiswandi">
                <img alt="image" src="assets/img/users/user-4.png" class="rounded-circle" width="35" data-toggle="tooltip" title="" data-original-title="Yudi Nawawi">
                <img alt="image" src="assets/img/users/user-1.png" class="rounded-circle" width="35" data-toggle="tooltip" title="" data-original-title="Khaerul Anwar">
              </td>
              <td>2018-01-16</td>
              <td>
                <div class="badge badge-success">Completed</div>
              </td>
              <td><a href="#" class="btn btn-primary">Detail</a></td>
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
</style>
