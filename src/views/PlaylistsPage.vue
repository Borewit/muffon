<template>
  <BasePlaylistsPageContainer
    :responsePageLimit="limit"
  >
    <template #default="pageSlotProps">
      <BaseSegmentContainer
        :class="[
          'raised',
          'main-segment-container',
          'main-page-segment-container',
          'main-paginated-page-segment-container'
        ]"
        :isLoading="pageSlotProps.isLoading"
      >
        <BasePaginatedListContainer
          ref="paginatedContainer"
          scope="playlists"
          :isLoading="pageSlotProps.isLoading"
          :error="pageSlotProps.error"
          :responseData="pageSlotProps.playlistsData"
          :clientPageLimit="limit"
          :responsePageLimit="limit"
          @focus="handleFocus"
          @fetchData="pageSlotProps.fetchData"
          @refresh="pageSlotProps.handleRefresh"
        >
          <template #default="slotProps">
            <BasePlaylistsSimpleList
              :playlists="slotProps.playlists"
              isWithProfile
            />
          </template>
        </BasePaginatedListContainer>
      </BaseSegmentContainer>
    </template>
  </BasePlaylistsPageContainer>
</template>

<script>
import BasePlaylistsPageContainer
  from '@/containers/pages/playlists/BasePlaylistsPageContainer.vue'
import BaseSegmentContainer
  from '@/containers/segments/BaseSegmentContainer.vue'
import BasePaginatedListContainer
  from '@/containers/lists/BasePaginatedListContainer.vue'
import BasePlaylistsSimpleList
  from '@/lists/playlists/BasePlaylistsSimpleList.vue'

export default {
  name: 'PlaylistsPage',
  components: {
    BasePlaylistsPageContainer,
    BaseSegmentContainer,
    BasePaginatedListContainer,
    BasePlaylistsSimpleList
  },
  data () {
    return {
      limit: 50
    }
  },
  methods: {
    handleFocus () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="sass" scoped></style>
