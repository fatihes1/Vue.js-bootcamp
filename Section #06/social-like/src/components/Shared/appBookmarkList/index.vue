<template>
    <div>
        <div class="p-2 grid grid-cols-8 gap-4">
            <BookmarkListItem v-for="item in items" :key="item.id" :item="item" />
        </div>
      </div>
</template>

<script>
import BookmarkListItem from "./BookmarkListItem"
export default {
    components: {
        BookmarkListItem
    },
    props : {
        items : {
            type: Array,
            required : true,
            default: () => []
        }
    }
}
</script>
