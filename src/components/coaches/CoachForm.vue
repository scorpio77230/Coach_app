<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !missionName.isValid }">
      <label for="missionName">提供教學名：</label>
      <input
        type="text"
        id="missionName"
        v-model.trim="missionName.val"
        @blur="clearValidity('missionName')"
      />
      <p v-if="!missionName.isValid">此欄不得為空!</p>
    </div>
    <div class="form-control" :class="{ invalid: !providerName.isValid }">
      <label for="providerName">老師姓名：</label>
      <input
        type="text"
        id="providerName"
        v-model.trim="providerName.val"
        @blur="clearValidity('providerName')"
      />
      <p v-if="!providerName.isValid">此欄不得為空!</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">教學內容：</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">請輸入最少10字元!</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">每小時計價：</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearValidity('rate')"
      />
      <p v-if="!description.isValid">請輸入大於零的數字!</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>專業領域</h3>
      <div>
        <input
          type="checkbox"
          id="juniorhigh"
          value="juniorhigh"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="juniorhigh">國中</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="seniorhigh"
          value="seniorhigh"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="seniorhigh">高中</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="english"
          value="english"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="english">英文</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="physics"
          value="physics"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="physics">物理</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="chemistry"
          value="chemistry"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="chemistry">化學</label>
      </div>
      <p v-if="!areas.isValid">請至少選擇一項領域!</p>
    </div>
    <div class="layout"><base-button>登記</base-button></div>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      missionName: {
        val: '',
        isValid: true,
      },
      providerName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.missionName.val === '') {
        this.missionName.isValid = false;
        this.formIsValid = false;
      }
      if (this.providerName.val === '') {
        this.providerName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val.length < 10) {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        mission: this.missionName.val,
        provider: this.providerName.val,
        des: this.description.val,
        rate: this.rate.val,
        area: this.areas.val,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.5rem auto;
}
.form-control p {
  font-size: 15px;
  margin: 5px 0;
  color: rgba(204, 59, 76);
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  white-space: nowrap;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: rgba(204, 59, 76);
}

.invalid input[type='checkbox'],
.invalid input,
.invalid textarea {
  border: 1px solid rgba(204, 59, 76);
}
.layout {
  text-align: center;
}
</style>