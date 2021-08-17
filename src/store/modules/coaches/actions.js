export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      missionName: data.mission,
      providerName: data.provider,
      areas: data.area,
      description: data.des,
      hourlyRate: data.rate
    };

    const token = context.rootGetters.token;

    const response = await fetch(`https://vue-coachapp-4869f-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token, {
      method: 'PUT',
      body: JSON.stringify(coachData)
    });

    // const responseData = await response.json();

    if (!response.ok) {
      //error...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(`https://vue-coachapp-4869f-default-rtdb.firebaseio.com/coaches.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'fail to fetch');
      throw error;
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        missionName: responseData[key].missionName,
        providerName: responseData[key].providerName,
        areas: responseData[key].area,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }

};