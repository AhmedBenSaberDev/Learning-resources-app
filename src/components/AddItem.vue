<template>
  <div>
    <base-dialog @close="closeDialog" v-if="inputIsInvalid" title="Invalid input">
      <template #default>Please check your inputs and make sur you enter at least on character .</template>
      <template #actions>
        <base-button  @click.native="closeDialog">Ok</base-button>
      </template>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input type="text" id="title" name="title" ref="titleInput" />
        </div>

        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="3"
            ref="descriptionInput"
          ></textarea>
        </div>

        <div class="form-control">
          <label for="link">link</label>
          <input type="text" id="link" name="link" ref="linkInput" />
        </div>

        <div>
          <base-button type="submit">Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseDialog from "../UI/BaseDialog.vue";

export default {
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  components: {
    BaseDialog,
  },
  inject: ["addData"],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() == "" ||
        enteredDescription.trim() == "" ||
        enteredLink.trim() == ""
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.addData(enteredTitle, enteredDescription, enteredLink);
    },
    closeDialog()
    {
      this.inputIsInvalid = false;
    }
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>