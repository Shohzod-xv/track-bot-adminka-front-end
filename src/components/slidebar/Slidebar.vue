<template>
  <div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="index.html"> <span
            class="logo-name">Adminka</span>
        </a>
      </div>
      <ul class="sidebar-menu">
        <li class="menu-header">Main</li>
        <li class="dropdown active">
          <a href="index.html" class="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></a>
        </li>
        <li class="dropdown">
          <a href="index.html" class="nav-link"><i data-feather="monitor"></i><span>Users</span></a>
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
