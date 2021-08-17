export default {
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId,
      missionName: data.mission,
      providerName: data.provider,
      areas: data.area,
      description: data.des,
      hourlyRate: data.rate
    };

    context.commit('registerCoach', coachData);
  }
};