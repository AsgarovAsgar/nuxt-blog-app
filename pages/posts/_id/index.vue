<template>
  <div>
    <section>
      <h2>{{ loadedPost.title }}</h2>
      <p>Preview: {{ loadedPost.previewText }}</p>
      <div>
        <p>Author: {{ loadedPost.author }}</p>
        <p>Created on: {{ loadedPost.updatedDate }}</p>
      </div>
    </section>
    <section>
      <img :src="loadedPost.thumbnailLink" alt="">
      <p>{{ loadedPost.content }}</p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          title: 'The first post (ID: ' + context.params.id + ')',
          previewText: 'This is preview',
          author: 'Asgar',
          updatedDate: new Date(),
          content: 'thi si icontent ha ha ha ', 
          thumbnailLink: 'https://images.unsplash.com/photo-1660405803327-c3cf599cbf1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
        }
      })
    }, 1000)
  }
}
</script>

<style>

</style>