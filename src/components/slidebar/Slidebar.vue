<template>
  <div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
          <RouterLink to="/" class="logo-name">Adminka</RouterLink>
      </div>
      <ul class="sidebar-menu">
        <li class="menu-header">Menu</li>
        <li class="dropdown active">
          <div class="nav-link">
<!--            <i data-feather="monitor"></i>-->
            <RouterLink :to="{ name: 'home' }"><i class="fas fa-tachometer-alt"></i>Dashboard</RouterLink>
          </div>
        </li>
        <li class="dropdown">
          <div class="nav-link">
            <i data-feather="briefcase"></i>
            <RouterLink :to="{ name: 'users' }"><i class="fas fa-user-alt"></i>Users</RouterLink>
          </div>
        </li>
        <li class="dropdown">
          <div class="nav-link">
            <i data-feather="briefcase"></i>
            <RouterLink :to="{ name: 'drivers' }"><i class="fas fa-car-alt"></i>Drivers</RouterLink>
          </div>
        </li>
      </ul>
    </aside>
  </div>

</template>

<script>
export default {
  name: "Slidebar"
}
</script>

<style scoped>
.logo-name{
  font-size: 1.5rem;
  font-weight: 600;
  color: #0ca605;
}
</style>
