<template>
  <div>
    <section>
      <base-card>
        <h2>{{ missionName }}</h2>
        <h3>費用：{{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <h3>詳細資訊：</h3>
        <p>{{ description }}</p>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>符合您的需求嗎? 立即聯絡!</h2>
          <h3>聯絡人：{{ providerName }}</h3>
          <base-button link :to="contactLink">聯絡我</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    missionName() {
      return this.selectedCoach.missionName;
    },
    providerName() {
      return this.selectedCoach.providerName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>