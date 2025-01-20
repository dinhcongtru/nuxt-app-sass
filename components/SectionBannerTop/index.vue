<template>
    <div class="content">
        <h1 class="title">Rong chơi bốn phương, giá vẫn "yêu thương"</h1>
        <div class="popup">
            <div class="tabs">
                <ul>
                    <li class="active">
                        <div class="item">
                            <UIcon name="cil:library-building" class="size-5 icon" />
                            <span>Khách sạn</span>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <UIcon name="cil:home" class="size-5" />
                            <span>Nhà và Căn hộ</span>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <UIcon name="cil:flight-takeoff" class="size-5" />
                            <span>Máy bay + K.sạn</span>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <UIcon name="fluent:airplane-take-off-20-filled" class="size-5" />
                            <span>Vé máy bay</span>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <UIcon name="cil:blur-circular" class="size-5" />
                            <span>Hoạt động</span>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <UIcon name="cil:car-alt" class="size-5" />
                            <span>Đưa đón sân bay</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="tab_content">
                <ul class="tags">
                    <li class="active">
                        <div class="item_tag">
                            <span>Chỗ Ở Qua Đêm</span>
                        </div>
                    </li>
                    <li>
                        <div class="item_tag">
                            <span>Chỗ Ở Trong Ngày</span>
                        </div>
                    </li>
                </ul>
                <div class="input_wrapper">
                    <InputSearch id="search" name="search" placeholder="Nhập điểm du lịch hoặc tên khách sạn"
                        v-model="searchText" />
                </div>
            </div>
            <div class="btn_submit">
                <ButtonSubmit id="btn_submit" name="btn_submit" value="tìm" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

const searchText = ref<string>('');
watchEffect(() => {
    if (searchText.value) {
        console.log(searchText.value);
    }
})

</script>

<style lang="sass" scoped>
@import './bannerTop'
</style>