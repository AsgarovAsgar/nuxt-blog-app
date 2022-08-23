<template>
    <div>
      <form @submit.prevent="onSave()" class="flex flex-col space-y-2 w-min border p-4 bg-gray-100">
        <div class="flex flex-col space-y-1">
          <label for="">Author name</label>
          <input class="px-2 py-1 w-min flex rounded border" v-model="editedPost.author" type="text" />
        </div>
        <div>
          <label for="">Title</label>
          <input class="px-2 py-1 w-min flex rounded border" v-model="editedPost.title" type="text" />
        </div>
        <div>
          <label for="">Thumbnail</label>
          <input class="px-2 py-1 w-min flex rounded border" v-model="editedPost.thumbnail" type="text" />
        </div>
        <div>
          <label for="">Content</label>
          <textarea class="px-2 py-1 w-min flex rounded border" v-model="editedPost.content" name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div class="flex gap-4">
          <button class="px-3 py-2 w-full bg-indigo-500 rounded-sm text-white" type="submit">Save</button>
          <button @click="onCancel()" class="px-3 py-2 w-full bg-red-500 rounded-sm text-white" type="button">Cancel</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  props: {
    post: {
        type: Object,
        required: false
    }
  },
  data() {
    return {
      editedPost: this.post ? { ...this.post } : {
        author: "",
        title: "",
        thumbnail: "",
        content: "",
      },
    };
  },
  methods: {
    onSave() {
        // console.log('save', this.editedPost);
        this.$emit('submit', this.editedPost)
    },
    onCancel() {
        // console.log('cancel');
        this.$router.push('/admin')
    }
  }
};
</script>
