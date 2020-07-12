<template>
  <b-container class="my-5">
    <b-breadcrumb>
      <b-breadcrumb-item active to="/dashboard">{{
        $t("dashboard.dashboard")
      }}</b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">{{ $t("dashboard.dashboard") }}</h1>

    <b-nav>
      <b-nav-item to="/locations">Ubicaciones</b-nav-item>
    </b-nav>
  </b-container>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>
