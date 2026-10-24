<script lang="ts">
  let likes = $state(3)
</script>

<div class="flex w-full py-20 justify-end items-center gap-10">
  <p class="font-light"><span class="font-semibold text-teal-600 text-lg">{likes}</span> people like this review.</p>
  <button onclick={() => likes++} class="px-4 py-2 bg-teal-700 text-white uppercase tracking-wider cursor-pointer hover:bg-teal-800">Like</button>
</div>
