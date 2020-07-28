<template>
  <PageContainer>
    <b-jumbotron :header="$t('home.welcome')">
      <p>{{ $t("home.introRolesSuggestion") }}</p>
      <p>{{ $t("home.introLoginSuggestion") }}</p>
    </b-jumbotron>
  </PageContainer>
</template>

<script>
import PageContainer from "../components/PageContainer";
export default {
  components: {
    PageContainer,
  },
};
</script>
