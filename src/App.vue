<template>
    <div class="header"> Moonc - Music - Serve - Ui </div>
    <div class="bodyer">
        <div class="searchBox">
            <el-input v-model="musicName" placeholder="请输入音乐名称" maxlength="18" clearable
                @keydown.enter="serachMusicName">
                <template #append>
                    <el-button @click="serachMusicName"> <i-ep-search /> </el-button>
                </template>
            </el-input>
        </div>
    </div>
</template>

<script setup lang="ts">
import { searchMusic, saveMusic } from "@/api/music";
const musicName = ref<string>('')

function serachMusicName() {
    searchMusic({
        name: musicName.value
    }).then(res => {
    })
}
</script>

<style scoped lang="scss">
.header {
    font-size: 60px;
    padding: 30px 0;
    text-align: center;
    font-weight: bold;
}

.bodyer {
    display: flex;
    flex-direction: column;
    align-items: center;

    :deep(.searchBox) {
        width: 1200px;

        .el-input {
            .el-input__wrapper {
                padding: 0 30px;
                border-radius: 20px 0 0 20px;

                .el-input__inner {
                    height: 80px;
                    font-size: 30px;
                    text-align: center;
                }

                .el-input__suffix {
                    .el-icon {
                        font-size: 34px;
                    }
                }
            }

            .el-input-group__append {
                border-radius: 0 20px 20px 0;

                .el-button {
                    font-size: 34px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    padding: 0 28px;
                }
            }
        }
    }
}
</style>