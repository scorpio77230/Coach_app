<template>
  <div>
    <base-dialog :show="!!error" title="阿伯出事了!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <!-- <section><coach-filter @change-filter="setFilters"></coach-filter></section> -->
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)"
            >重新整理</base-button
          >
          <base-button link to="/auth?redirect=register" v-if="!isLoggedIn"
            >登入以提供課程</base-button
          >
          <base-button
            v-if="!isCoach && isLoggedIn"
            link
            to="/register"
            mode="outline"
            >提供服務</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
          <li>
            <coach-item
              v-for="coach in filteredCoaches"
              :key="coach.id"
              :id="coach.id"
              :mission-name="coach.missionName"
              :provider-name="coach.providerName"
              :rate="coach.hourlyRate"
              :areas="coach.areas"
            ></coach-item>
          </li>
        </ul>
        <h3 v-else>查無服務</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
// import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
  components: {
    CoachItem,
    // CoachFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        juniorhigh: true,
        seniorhigh: true,
        english: true,
        physics: true,
        chemistry: true,
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isCoach() {
      return !this.isLoading && this.$store.getters['coaches/isCoach'];
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(() => {
        if (this.activeFilters.juniorhigh) {
          return true;
        }
        if (this.activeFilters.seniorhigh) {
          return true;
        }
        if (this.activeFilters.english) {
          return true;
        }
        if (this.activeFilters.physics) {
          return true;
        }
        if (this.activeFilters.chemistry) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>